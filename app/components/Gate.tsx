"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Gate() {
  return (
    <section className="relative h-screen w-screen overflow-hidden flex flex-col">
      {/* Bardzo lekki vignette — tylko żeby karty miały kontrast, wideo dalej widać */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      {/* Logo top-left nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-20 pt-7 md:pt-8 px-6 md:px-10"
      >
        <Logo size={36} withWordmark />
      </motion.div>

      {/* Center content */}
      <div className="relative z-20 flex-1 flex items-center justify-center px-5">
        <div className="w-full max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-[14px] md:text-[15px] text-white/55 leading-relaxed mb-10 md:mb-12"
          >
            Dwie drogi. Wybierz tę, która<br />
            sprowadziła Cię tutaj.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="space-y-3"
          >
            <GateCard
              eyebrow="Dla firm i twórców"
              title="Zrób mi stronę"
              description="Zaprojektuję i zakoduję Ci stronę pod klucz. Bez kreatorów, bez szablonów."
              href="/dla-biznesu"
              featured
            />
            <GateCard
              eyebrow="Dla początkujących"
              title="Naucz się i zostań dev"
              description="Społeczność na Skool, w której uczę robić strony i zarabiać."
              href="/dla-tworcow"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-20 pb-8 md:pb-10 text-center"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
          Kliknij, aby kontynuować
        </span>
      </motion.div>
    </section>
  );
}

function GateCard({
  eyebrow,
  title,
  description,
  href,
  featured = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group block liquid-glass rounded-2xl transition-all duration-500 hover:bg-white/[0.06] ${
        featured
          ? "px-7 md:px-8 py-7 md:py-8 bg-white/[0.03] scale-100 hover:scale-[1.02] shadow-[0_0_60px_-10px_rgba(255,255,255,0.15)]"
          : "px-6 py-5 hover:bg-white/[0.04]"
      }`}
    >
      <div className="flex items-center justify-between gap-5">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <p
              className={`tracking-[0.22em] uppercase text-white/40 ${
                featured ? "text-[11px]" : "text-[10px]"
              }`}
            >
              {eyebrow}
            </p>
            {featured && (
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/80 px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
                Najpopularniejsze
              </span>
            )}
          </div>
          <h2
            className={`font-display italic leading-tight text-white ${
              featured
                ? "text-[34px] md:text-[44px]"
                : "text-[26px] md:text-[28px]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-white/65 leading-relaxed ${
              featured ? "mt-3 text-[14px] md:text-[15px]" : "mt-1.5 text-[13px] text-white/55"
            }`}
          >
            {description}
          </p>
        </div>
        <div
          className={`shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white ${
            featured
              ? "size-12 md:size-14 border-white/25 bg-white/5"
              : "size-9 border-white/15"
          }`}
        >
          <ArrowRight
            size={featured ? 20 : 15}
            strokeWidth={1.5}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
