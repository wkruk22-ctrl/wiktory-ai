"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

type Props = {
  ctaLabel: string;
  ctaHref: string;
  showAfter?: number;
};

export default function StickyNav({ ctaLabel, ctaHref, showAfter = 120 }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const isExternal = ctaHref.startsWith("http");

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-3 bg-black/85 backdrop-blur-md border-b border-white/[0.07]"
        >
          <Link href="/" aria-label="wiktory.ai — strona główna">
            <Logo size={28} withWordmark />
          </Link>

          {isExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-[13px] font-semibold hover:scale-[1.03] active:scale-[0.97] transition-transform btn-shine"
            >
              {ctaLabel}
              <ArrowRight size={13} strokeWidth={2} />
            </a>
          ) : (
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-[13px] font-semibold hover:scale-[1.03] active:scale-[0.97] transition-transform btn-shine"
            >
              {ctaLabel}
              <ArrowRight size={13} strokeWidth={2} />
            </a>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
