"use client";

import { useEffect, useRef } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadedInOnce = false;

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
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const startFadeIn = () => {
      if (fadedInOnce) return;
      fadedInOnce = true;
      video.playbackRate = playbackRate;
      void video.play().catch(() => {});
      fadeTo(maxOpacity, fadeMs);
    };

    const handleTimeUpdate = () => {
      if (!fadedInOnce) startFadeIn();
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
        try {
          video.currentTime = 0;
          void video.play();
        } catch {}
        fadingOutRef.current = false;
        fadeTo(maxOpacity, fadeMs);
      }, 100);
    };

    // Multi-event safety net — coś musi pociągnąć fade-in
    video.addEventListener("loadedmetadata", startFadeIn);
    video.addEventListener("loadeddata", startFadeIn);
    video.addEventListener("canplay", startFadeIn);
    video.addEventListener("playing", startFadeIn);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 1) startFadeIn();

    // Ostateczny safety net — jak po 2s dalej nic nie widać, force show
    const safety = setTimeout(() => {
      if (!fadedInOnce || parseFloat(video.style.opacity || "0") < 0.05) {
        fadedInOnce = true;
        video.style.opacity = String(maxOpacity);
        void video.play().catch(() => {});
      }
    }, 2000);

    return () => {
      clearTimeout(safety);
      cancelFade();
      video.removeEventListener("loadedmetadata", startFadeIn);
      video.removeEventListener("loadeddata", startFadeIn);
      video.removeEventListener("canplay", startFadeIn);
      video.removeEventListener("playing", startFadeIn);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [src, playbackRate, maxOpacity, fadeMs, fadeBeforeEnd]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      // celowo bez `loop` — pętlę robimy ręcznie przez `ended`, żeby fade działał
      className={`absolute inset-0 w-full h-full object-cover ${shifted ? "translate-y-[17%]" : ""} ${className}`}
      style={{ opacity: 0 }}
    />
  );
}
