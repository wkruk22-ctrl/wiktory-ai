import HeroTworcy from "../components/HeroTworcy";
import SocialProof from "../components/SocialProof";
import Skool from "../components/Skool";
import Dowody from "../components/Dowody";
import Footer from "../components/Footer";

export const metadata = {
  title: "wiktory.ai — Naucz się i zostań dev",
  description:
    "Społeczność na Skool, w której uczę robić strony i zarabiać od zera.",
};

export default function DlaTworcowPage() {
  return (
    <main>
      <Skool />
      <SocialProof />
      <Dowody />
      <HeroTworcy />
      <Footer />
    </main>
  );
}
