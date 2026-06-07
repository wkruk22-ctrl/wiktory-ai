"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

const biznesItems: Item[] = [
  {
    q: "Ile kosztuje strona internetowa?",
    a: "Najczęściej  strona firmowa to przedział 1 000–4 000 zł. Bardziej rozbudowane projekty z dodatkowym funkcjami wyceniam indywidualnie. Wszystko dostaniesz na piśmie przed startem — bez ukrytych kosztów.",
  },
  {
    q: "Jak długo trwa realizacja?",
    a: "Prosty landing page oddaję do 7 dni roboczych od zatwierdzenia projektu graficznego.",
  },
  {
    q: "Czy mogę rozłożyć płatność na raty?",
    a: "Tak. Standardowo dzielę płatność na etapy: zaliczka na start, reszta przy oddaniu. Wszystko ustalamy na piśmie przed startem.",
  },
  {
    q: "Czego potrzebujesz ode mnie, żeby zacząć?",
    a: "Niewiele — logo (jeśli masz) i kilka zdań o firmie. Teksty, design i kod biorę na siebie. Nie musisz nic przygotowywać.",
  },
  {
    q: "Co jeśli coś przestanie działać po wdrożeniu?",
    a: "Przez 30 dni po oddaniu strony poprawiam błędy bezpłatnie. Nie znikam po wrzuceniu plików na serwer.",
  },
  {
    q: "Mam już stronę — możesz ją odświeżyć?",
    a: "Tak. Robię strony od zera, ale też przebudowy istniejących — takich, które przestały działać albo wyglądają przestarzale.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-black/40 backdrop-blur-sm py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Najczęstsze pytania</p>
          <h2
            className="font-normal tracking-tight"
            style={{
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Masz pytanie?{" "}
            <span className="font-display italic text-white/80">
              Pewnie już tu jest.
            </span>
          </h2>
        </div>

        <div className="space-y-2">
          {biznesItems.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-white/45">
          Nie znalazłeś odpowiedzi?{" "}
          <a href="#kontakt" className="text-white/80 hover:text-white underline underline-offset-4 transition-colors">
            Napisz do mnie bezpośrednio →
          </a>
        </p>
      </div>
    </section>
  );
}

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="liquid-glass rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-[15px] md:text-base font-medium text-white/90 leading-snug">
          {item.q}
        </span>
        <span
          className={`shrink-0 size-7 rounded-full border border-white/15 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-white/10" : ""
          }`}
        >
          <Plus size={14} strokeWidth={1.8} className="text-white/60" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[14px] text-white/60 leading-relaxed border-t border-white/5 pt-4">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
