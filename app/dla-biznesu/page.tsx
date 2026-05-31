import HeroBiznes from "../components/HeroBiznes";
import SocialProof from "../components/SocialProof";
import Proces from "../components/Proces";
import Kontakt from "../components/Kontakt";
import Footer from "../components/Footer";

export const metadata = {
  title: "wiktory.ai — Strona pod klucz dla Twojego biznesu",
  description:
    "Zaprojektuję i zakoduję Ci stronę, która sprzedaje. Bez kreatorów, bez szablonów.",
};

export default function DlaBiznesuPage() {
  return (
    <main>
      <HeroBiznes />
      <SocialProof />
      <Proces />
      <Kontakt />
      <Footer />
    </main>
  );
}
