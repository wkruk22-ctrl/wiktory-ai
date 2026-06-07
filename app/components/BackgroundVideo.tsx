"use client";

import { useEffect, useRef, useCallback } from "react";

type Props = {
  src: string;
  className?: string;
  playbackRate?: number;
  /** mnożnik docelowego peak opacity (1 = pełne wideo, 0.3 = mocno przyciemnione) */
  maxOpacity?: number;
  /** ms — czas pojedynczego fade-in / fade-out */
  fadeMs?: number;
  /** sekundy przed końcem materiału, kiedy startuje fade-out */
  fadeBeforeEnd?: number;
  /** czy przesunąć wideo o 17% w dół (jak w oryginalnym promcie) */
  shifted?: boolean;
};

export default function BackgroundVideo({
  src,
  className = "",
  playbackRate = 1,
  maxOpacity = 1,
  fadeMs = 500,
  fadeBeforeEnd = 0.55,
  shifted = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);
  const fadedInOnce = useRef(false);

  // Ustaw `muted` synchronicznie w chwili montażu elementu — ZANIM przeglądarka
  // zewaluuje autoplay. Naprawia bug Reacta przez który iOS blokuje autostart
  // i wymaga dotknięcia ekranu.
  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.setAttribute("muted", "");
      el.setAttribute("playsinline", "");
    }
    videoRef.current = el;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS: właściwość `muted` MUSI być ustawiona imperatywnie — sam atrybut JSX
    // nie wystarcza i przeglądarka blokuje autoplay (efekt: zamrożona pierwsza klatka)
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const cancelFade = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const fadeTo = (target: number, durationMs: number) => {
      cancelFade();
      const startOpacity = parseFloat(video.style.opacity || "0") || 0;
      const delta = target - startOpacity;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        video.style.opacity = String(startOpacity + delta * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
        else rafRef.current = null;
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const tryPlay = (): Promise<void> => {
      try {
        video.muted = true;
        video.playbackRate = playbackRate;
      } catch {}
      // play() może zwrócić undefined w starszych przeglądarkach — zabezpieczamy .then()
      const p = video.play();
      return p ?? Promise.resolve();
    };

    const startFadeIn = () => {
      if (fadedInOnce.current) return;
      fadedInOnce.current = true;
      tryPlay()
        .then(() => fadeTo(maxOpacity, fadeMs))
        .catch(() => {
          // iOS zablokował autoplay — zostaw opacity: 0, czekaj na gest użytkownika
          fadedInOnce.current = false;
        });
    };

    const handleTimeUpdate = () => {
      if (!fadedInOnce.current) startFadeIn();
      if (fadingOutRef.current) return;
      const dur = video.duration;
      if (!isFinite(dur)) return;
      const remaining = dur - video.currentTime;
      if (remaining <= fadeBeforeEnd && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0, fadeMs);
      }
    };

    const handleEnded = () => {
      cancelFade();
      video.style.opacity = "0";
      setTimeout(() => {
        try { video.currentTime = 0; } catch {}
        fadingOutRef.current = false;
        tryPlay()
          .then(() => fadeTo(maxOpacity, fadeMs))
          .catch(() => {});
      }, 100);
    };

    // Wznów gdy zakładka wróci na wierzch lub ekran się odblokuje
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && video.paused) {
        tryPlay().catch(() => {});
      }
    };

    // iOS Low Power Mode — nieoczekiwana pauza, retry po 300ms
    const handleUnexpectedPause = () => {
      setTimeout(() => {
        if (video.paused && document.visibilityState === "visible") {
          tryPlay().catch(() => {});
        }
      }, 300);
    };

    // Pierwszy dotyk/klik odblokuje autoplay na iOS
    const handleUserGesture = () => {
      if (video.paused) {
        tryPlay()
          .then(() => {
            if (parseFloat(video.style.opacity || "0") < 0.05) {
              fadedInOnce.current = true;
              fadeTo(maxOpacity, fadeMs);
            }
          })
          .catch(() => {});
      }
    };

    video.addEventListener("loadedmetadata", startFadeIn);
    video.addEventListener("loadeddata", startFadeIn);
    video.addEventListener("canplay", startFadeIn);
    video.addEventListener("playing", startFadeIn);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("pause", handleUnexpectedPause);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("touchstart", handleUserGesture, { once: true, passive: true });
    document.addEventListener("click", handleUserGesture, { once: true });

    if (video.readyState >= 1) startFadeIn();

    // Kilka prób autostartu w pierwszej sekundzie — łapie moment, gdy wideo
    // doładuje się na wolniejszym łączu mobilnym, bez czekania na dotyk ekranu
    const retries = [120, 350, 700, 1200, 1800].map((ms) =>
      setTimeout(() => {
        if (video.paused) {
          tryPlay()
            .then(() => fadeTo(maxOpacity, fadeMs))
            .catch(() => {});
        }
      }, ms)
    );

    // Safety net — ale opacity ustawiamy TYLKO gdy play() faktycznie się uda
    const safety = setTimeout(() => {
      if (!fadedInOnce.current) {
        fadedInOnce.current = true;
        tryPlay()
          .then(() => { video.style.opacity = String(maxOpacity); })
          .catch(() => {
            // Nadal zablokowane — nie pokazuj wideo z przyciskiem play
            fadedInOnce.current = false;
          });
      }
    }, 2000);

    return () => {
      clearTimeout(safety);
      retries.forEach(clearTimeout);
      cancelFade();
      video.removeEventListener("loadedmetadata", startFadeIn);
      video.removeEventListener("loadeddata", startFadeIn);
      video.removeEventListener("canplay", startFadeIn);
      video.removeEventListener("playing", startFadeIn);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("pause", handleUnexpectedPause);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("touchstart", handleUserGesture);
      document.removeEventListener("click", handleUserGesture);
    };
  }, [src, playbackRate, maxOpacity, fadeMs, fadeBeforeEnd]);

  return (
    <video
      ref={setVideoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      // celowo bez `loop` — pętlę robimy ręcznie przez `ended`, żeby fade działał
      className={`absolute inset-0 w-full h-full object-cover${shifted ? " translate-y-[17%]" : ""}${className ? ` ${className}` : ""}`}
      style={{
        opacity: 0,
        // wymusza GPU compositing — zapobiega freezowaniu na mobile przy position:fixed
        transform: "translateZ(0)",
        willChange: "opacity",
      }}
    />
  );
}
