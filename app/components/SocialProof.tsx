"use client";

const proof = [
  "Widzisz mnie na TikToku",
  "wiktory.ai",
  "Strony, które sprzedają",
  "Community na Skool",
  "Polskie studio webdev",
  "AI w służbie designu",
  "Pełen kod. Zero no-code.",
];

export default function SocialProof() {
  // Duplikujemy listę żeby marquee było płynne
  const items = [...proof, ...proof];

  return (
    <section className="relative py-14 md:py-20 border-y border-white/5 overflow-hidden bg-black/40 backdrop-blur-sm">
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {items.map((label, i) => (
          <span
            key={i}
            className="text-[13px] md:text-sm tracking-[0.22em] uppercase text-white/35 flex items-center gap-12"
          >
            {label}
            <span className="text-white/15">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
