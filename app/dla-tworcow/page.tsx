import type { Metadata } from "next";
import HeroTworcy from "../components/HeroTworcy";
import Skool from "../components/Skool";
import Dowody from "../components/Dowody";
import Footer from "../components/Footer";
import StickyNav from "../components/StickyNav";
import { BRAND } from "../config";

export const metadata: Metadata = {
  title: "Naucz się robić strony internetowe i zarabiaj",
  description:
    "Kurs online + społeczność, w której uczę robić strony od zera do pierwszego klienta. Kod, AI, narzędzia i sprzedaż. Bez ściemy o pasywnym dochodzie.",
  keywords: [
    "nauka kodowania",
    "kurs tworzenia stron www",
    "jak zostać web developerem",
    "kurs webdev od zera",
    "społeczność programistów",
    "zarabianie na stronach www",
  ],
  alternates: {
    canonical: "https://wiktory.tech/dla-tworcow",
  },
  openGraph: {
    title: "wiktory.ai — Naucz się robić strony internetowe i zarabiaj",
    description:
      "Kurs online + społeczność, w której uczę robić strony od zera do pierwszego klienta.",
    url: "https://wiktory.tech/dla-tworcow",
  },
  twitter: {
    title: "wiktory.ai — Naucz się robić strony internetowe i zarabiaj",
    description:
      "Kurs online + społeczność, w której uczę robić strony od zera do pierwszego klienta.",
  },
};

export default function DlaTworcowPage() {
  return (
    <main>
      <StickyNav ctaLabel="Dołącz do Akademii" ctaHref={BRAND.social.skool} />
      <Skool />
      <Dowody />
      <HeroTworcy />
      <Footer />
    </main>
  );
}
