"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, ArrowLeft, Users, Zap, Calendar } from "lucide-react";
import Link from "next/link";
import { BRAND } from "../config";
import Logo from "./Logo";

const features = [
  "Od zera do strony w 5 dni",
  "Cały stack: HTML, CSS, JS, React, AI w robocie",
  "Jak korzystać z AI, żeby kodować 10× szybciej",
  "Jak zdobyć pierwszego klienta (skrypty, follow-upy)",
  "Cennik, oferty, faktury — strona biznesowa zawodu",
  "Społeczność, gdzie nikt nie zostaje sam z błędem",
];

export default function Skool() {
  return (
    <section id="dla-tworcow" className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Subtelny vignette — wideo z layoutu widoczne */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/50 pointer-events-none" />

      {/* Top nav: logo left, wstecz-link right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 flex items-center justify-between px-6 md:px-10 pt-7 md:pt-8"
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

      <div className="relative z-20 mx-auto max-w-5xl w-full px-5 md:px-8 py-20 md:py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Społeczność na Skool
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-normal tracking-tight mx-auto max-w-3xl"
          style={{
            fontSize: "clamp(38px, 6vw, 76px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          Wejdź tam, gdzie{" "}
          <span className="font-display italic text-white/85">
            uczę robić strony
          </span>{" "}
          na żywo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 mx-auto max-w-xl text-white/65 text-base md:text-lg leading-relaxed"
        >
          Cały mój proces — kod, AI, narzędzia, sprzedaż — w jednym miejscu.
          Bez bullshitu o pasywnym dochodzie. Tylko realna robota i ludzie,
          którzy ją robią obok Ciebie.
        </motion.p>

        {/* Mini metrics */}
        <div className="mt-9 flex flex-wrap justify-center gap-x-10 gap-y-4">
          <Metric icon={<Users size={14} />} label="Aktywna grupa" />
          <Metric icon={<Zap size={14} />} label="Live co tydzień" />
          <Metric icon={<Calendar size={14} />} label="Nowe lekcje co miesiąc" />
        </div>

        {/* BIG Skool sign / link */}
        <motion.a
          href={BRAND.social.skool}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="group mt-14 block liquid-glass rounded-3xl px-8 md:px-14 py-12 md:py-16 max-w-3xl mx-auto transition-all duration-500 hover:bg-white/[0.06] hover:scale-[1.015] shadow-[0_0_80px_-20px_rgba(255,255,255,0.2)]"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/40">
            Dołącz do grupy
          </span>
          <div className="mt-4 flex items-center justify-center gap-3 md:gap-4">
            <span
              className="font-display italic text-white leading-none"
              style={{ fontSize: "clamp(54px, 11vw, 120px)", letterSpacing: "-0.04em" }}
            >
              Skool
            </span>
            <ArrowUpRight
              className="text-white/70 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              size={48}
              strokeWidth={1.5}
            />
          </div>
          <span className="mt-5 inline-block text-[13px] md:text-sm text-white/55">
            Kliknij, żeby zobaczyć grupę i dołączyć →
          </span>
        </motion.a>

        {/* Checklist below */}
        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl mx-auto text-left">
          {features.map((f, i) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 text-[14px] md:text-[15px] text-white/80"
            >
              <span className="mt-0.5 shrink-0 size-5 rounded-full bg-white/10 flex items-center justify-center">
                <Check size={11} strokeWidth={2.5} />
              </span>
              {f}
            </motion.li>
          ))}
        </ul>

        {/* Secondary CTA */}
        <div className="mt-12">
          <a
            href={BRAND.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-[13px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors"
          >
            Nie jesteś pewien? Zobacz najpierw na TikToku
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Metric({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-white/70">
      <span className="text-white/80">{icon}</span>
      <span className="text-[12px] tracking-[0.15em] uppercase">{label}</span>
    </div>
  );
}
