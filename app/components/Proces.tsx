"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Konsultacja",
    desc: "Opowiedz mi o swoim biznesie, celach i grupie docelowej. Na pierwszym spotkaniu (darmowo) ustalimy zakres, budżet i najlepszą formę współpracy — bez żadnych zobowiązań.",
  },
  {
    num: "02",
    title: "Wycena",
    desc: "Otrzymujesz przejrzystą wycenę z harmonogramem realizacji. Wszystko na piśmie — zero ukrytych kosztów. Możemy rozłożyć płatność na etapy.",
  },
  {
    num: "03",
    title: "Realizacja",
    desc: "Projektuję i koduję Twoją stronę. Dostajesz regularne podsumowania postępów i możliwość zgłaszania poprawek na bieżąco.",
  },
  {
    num: "04",
    title: "Wsparcie",
    desc: "Uruchomienie, krótkie szkolenie z panelu oraz wsparcie techniczne po wdrożeniu. Nie zostawiam Cię z gotową stroną bez pomocy.",
  },
];

export default function Proces() {
  return (
    <section
      id="proces"
      className="relative bg-black/55 backdrop-blur-sm py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <p className="eyebrow mb-4">Jak pracuję</p>
          <h2
            className="font-normal tracking-tight mx-auto max-w-2xl"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            4 kroki od pomysłu do{" "}
            <span className="font-display italic text-white/80">
              gotowej strony.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 md:p-7 min-h-[280px] flex flex-col overflow-hidden"
            >
              {/* Big number w tle (stary styl STORY) */}
              <div className="absolute -top-6 -right-2 big-number">
                {step.num}
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-auto">
                  Krok {step.num}
                </span>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mt-12">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] text-white/55 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:scale-[1.03] active:scale-[0.97] transition-transform btn-shine"
          >
            Zacznijmy od kroku 01
          </a>
          <p className="mt-4 text-xs text-white/40">
            Pierwsza rozmowa zawsze za darmo i bez zobowiązań.
          </p>
        </div>
      </div>
    </section>
  );
}
