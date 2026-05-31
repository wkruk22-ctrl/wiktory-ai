import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import BackgroundVideo from "./components/BackgroundVideo";
import { BG_VIDEO } from "./config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "wiktory.ai — Strony internetowe + nauka kodowania",
  description:
    "Tworzę strony, na które ludzie chcą wracać. Dla biznesów — robię stronę pod klucz. Dla twórców — uczę Cię, jak budować strony i zarabiać.",
  openGraph: {
    title: "wiktory.ai",
    description: "Strony internetowe + nauka kodowania od zera",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full text-white selection:bg-white/20">
        {/* Globalne wideo tła — fixed, widoczne pod każdą sekcją */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <BackgroundVideo src={BG_VIDEO} maxOpacity={1} playbackRate={1.75} />
          {/* Bardzo lekki gradient — tekst się trzyma, wideo dalej widać */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 pointer-events-none" />
        </div>

        {/* Content nad wideo */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
