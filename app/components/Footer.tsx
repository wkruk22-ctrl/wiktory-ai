"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, ArrowUpRight } from "lucide-react";
import { BRAND } from "../config";
import Logo from "./Logo";

const cols = [
  {
    title: "Studio",
    links: [
      { label: "Jak pracuję", href: "/dla-biznesu#proces" },
      { label: "Kontakt", href: "/dla-biznesu#kontakt" },
      { label: "Wróć do wyboru", href: "/" },
    ],
  },
  {
    title: "Nauka",
    links: [
      { label: "Dla twórców", href: "/dla-tworcow" },
      { label: "Grupa na Skool", href: BRAND.social.skool },
      { label: "TikTok", href: BRAND.social.tiktok },
    ],
  },
  {
    title: "Reszta",
    links: [
      { label: "Instagram", href: BRAND.social.instagram },
      { label: "YouTube", href: BRAND.social.youtube },
      { label: "Facebook", href: BRAND.social.facebook },
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black/45 backdrop-blur-sm px-5 md:px-8 pb-10 pt-20 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl liquid-glass rounded-3xl p-8 md:p-12 text-white/70"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <a href="#top" className="inline-block" aria-label="wiktory.ai — góra strony">
              <Logo size={40} withWordmark />
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-sm text-white/55">
              Polskie studio webdev i community edukacyjne na Skool. Robię
              strony, na które ludzie chcą wracać. Uczę robić to samo.
            </p>

            <a
              href="#kontakt"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white hover:underline"
            >
              Zacznij projekt
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </div>

          {/* Cols */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] tracking-[0.2em] uppercase text-white font-medium mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2 text-[13px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          l.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-white/55 hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">
            © {new Date().getFullYear()} wiktory.ai — wszystkie prawa zastrzeżone
          </p>
          <div className="flex items-center gap-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
              Znajdziesz mnie tu:
            </span>
            <div className="flex items-center gap-4 text-white/60">
              <a
                href={BRAND.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-white transition-colors"
              >
                <TikTokIcon />
              </a>
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <Youtube size={16} strokeWidth={1.5} />
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a
                href={BRAND.social.skool}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skool"
                className="text-[11px] tracking-[0.15em] uppercase hover:text-white transition-colors"
              >
                Skool ↗
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

function TikTokIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.07a8.16 8.16 0 0 0 4.77 1.52V7.12a4.85 4.85 0 0 1-1.84-.43z" />
    </svg>
  );
}
