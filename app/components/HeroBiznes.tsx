"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function HeroBiznes() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Lekki radial vignette — wideo z layoutu zostaje widoczne */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />

      {/* Top nav: logo left, wstecz-link right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 md:px-10 pt-7 md:pt-8"
      >
        <Link href="/" aria-label="wiktory.ai — strona główna">
          <Logo size={36} withWordmark />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Wróć do wyboru
        </Link>
      </motion.div>

      <div className="relative z-20 mx-auto max-w-5xl w-full px-5 md:px-8 pt-28 pb-16">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center eyebrow mb-6"
        >
          Dla firm — wiktory.ai studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-center font-normal tracking-tight mx-auto max-w-3xl"
          style={{ fontSize: "clamp(38px, 6.5vw, 84px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
        >
          Strona, która{" "}
          <span className="font-display italic text-white/90">sprzedaje</span>{" "}
          za Ciebie.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 mx-auto max-w-xl text-center text-[15px] md:text-base text-white/65 leading-relaxed"
        >
          Zaprojektuję i zakoduję Ci stronę pod klucz. Bez kreatorów, bez
          szablonów. Premium design, błyskawiczna ładowalność, mobilka działa
          pierwsza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-semibold hover:scale-[1.03] active:scale-[0.97] transition-transform btn-shine"
          >
            Napisz do mnie
            <ArrowRight size={15} strokeWidth={2} />
          </a>
          <a
            href="#proces"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full liquid-glass text-sm font-medium text-white/90 hover:text-white"
          >
            Zobacz, jak pracuję
          </a>
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
