import type { Metadata } from "next";
import HeroBiznes from "../components/HeroBiznes";
import Proces from "../components/Proces";
import FAQ from "../components/FAQ";
import Kontakt from "../components/Kontakt";
import Footer from "../components/Footer";
import StickyNav from "../components/StickyNav";

export const metadata: Metadata = {
  title: "Strona internetowa pod klucz dla Twojego biznesu",
  description:
    "Zaprojektuję i zakoduję Ci stronę, która sprzedaje. Bez kreatorów, bez szablonów. Premium design, mobilka działa pierwsza. Wyszków i cała Polska.",
  keywords: [
    "strona internetowa dla firmy",
    "tworzenie stron www",
    "strona pod klucz",
    "webdev Wyszków",
    "landing page",
    "strona firmowa",
  ],
  alternates: {
    canonical: "https://wiktory.tech/dla-biznesu",
  },
  openGraph: {
    title: "wiktory.ai — Strona internetowa pod klucz dla Twojego biznesu",
    description:
      "Zaprojektuję i zakoduję Ci stronę, która sprzedaje. Bez kreatorów, bez szablonów.",
    url: "https://wiktory.tech/dla-biznesu",
  },
  twitter: {
    title: "wiktory.ai — Strona internetowa pod klucz dla Twojego biznesu",
    description:
      "Zaprojektuję i zakoduję Ci stronę, która sprzedaje. Bez kreatorów, bez szablonów.",
  },
};

export default function DlaBiznesuPage() {
  return (
    <main>
      <StickyNav ctaLabel="Napisz do mnie" ctaHref="#kontakt" />
      <HeroBiznes />
      <Proces />
      <Kontakt />
      <FAQ />
      <Footer />
    </main>
  );
}
