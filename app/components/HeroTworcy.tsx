"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BRAND } from "../config";

export default function HeroTworcy() {
  return (
    <section id="top" className="relative w-full overflow-hidden flex items-center">
      {/* Lekki radial vignette */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-5xl w-full px-5 md:px-8 pt-28 pb-16">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-[11px] tracking-[0.2em] uppercase text-white/70">
            <Sparkles size={12} strokeWidth={1.5} />
            Społeczność na Skool · live co tydzień
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-center font-normal tracking-tight mx-auto max-w-3xl"
          style={{ fontSize: "clamp(40px, 7vw, 88px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
        >
          Naucz się robić strony.{" "}
          <span className="font-display italic text-white/90">
            Zacznij zarabiać.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 mx-auto max-w-xl text-center text-[15px] md:text-lg text-white/65 leading-relaxed"
        >
          Pokażę Ci dokładnie to, co sam robię klientom — kod, AI, narzędzia
          i sprzedaż. Od pierwszej linijki do pierwszego klienta. Bez ściemy
          o pasywnym dochodzie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={BRAND.social.skool}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-semibold hover:scale-[1.03] active:scale-[0.97] transition-transform btn-shine"
          >
            Dołącz do grupy na Skool
            <ArrowRight size={15} strokeWidth={2} />
          </a>
          <a
            href="#dla-tworcow"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full liquid-glass text-sm font-medium text-white/90 hover:text-white"
          >
            Co dostajesz w środku?
          </a>
        </motion.div>

        {/* Mała belka zaufania */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[12px] tracking-[0.12em] uppercase text-white/40"
        >
          <span>Od zera, bez doświadczenia</span>
          <span className="text-white/15">✦</span>
          <span>Pełen kod, zero no-code</span>
          <span className="text-white/15">✦</span>
          <span>Realna robota, nie teoria</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[10px] tracking-[0.3em] uppercase text-white/40"
      >
        Przewiń ↓
      </motion.div>
    </section>
  );
}
