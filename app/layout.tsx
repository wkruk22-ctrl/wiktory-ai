import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import BackgroundVideo from "./components/BackgroundVideo";
import { BG_VIDEO } from "./config";
import { Analytics } from "@vercel/analytics/next";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://wiktory.tech/#person",
      name: "Wiktor",
      url: "https://wiktory.tech",
      jobTitle: "Web Developer & Designer",
      email: "wiktory.kontakt@gmail.com",
      sameAs: [
        "https://www.tiktok.com/@wiktory.ai",
        "https://www.youtube.com/@wiktory_ai",
        "https://www.instagram.com/wiktory.ai/",
        "https://www.facebook.com/profile.php?id=61590163330874",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://wiktory.tech/#business",
      name: "wiktory.ai",
      url: "https://wiktory.tech",
      description:
        "Polskie studio webdev. Tworzę strony internetowe pod klucz dla biznesów oraz uczę kodowania od zera.",
      founder: { "@id": "https://wiktory.tech/#person" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wyszków",
        addressCountry: "PL",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "wiktory.kontakt@gmail.com",
        contactType: "customer service",
        availableLanguage: "Polish",
      },
      sameAs: [
        "https://www.tiktok.com/@wiktory.ai",
        "https://www.youtube.com/@wiktory_ai",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wiktory.tech"),
  title: {
    default: "wiktory.ai — Strony internetowe + nauka kodowania",
    template: "%s | wiktory.ai",
  },
  description:
    "Tworzę strony, na które ludzie chcą wracać. Dla biznesów — robię stronę pod klucz. Dla twórców — uczę Cię, jak budować strony i zarabiać.",
  keywords: [
    "strony internetowe",
    "tworzenie stron www",
    "webdev Wyszków",
    "nauka kodowania",
    "kurs webdev",
    "strona dla firmy",
    "wiktory.ai",
  ],
  authors: [{ name: "Wiktor", url: "https://wiktory.tech" }],
  creator: "Wiktor",
  openGraph: {
    title: "wiktory.ai — Strony internetowe + nauka kodowania",
    description:
      "Tworzę strony, na które ludzie chcą wracać. Dla biznesów — strona pod klucz. Dla twórców — nauka kodowania od zera.",
    type: "website",
    locale: "pl_PL",
    url: "https://wiktory.tech",
    siteName: "wiktory.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "wiktory.ai — Strony internetowe + nauka kodowania",
    description:
      "Tworzę strony, na które ludzie chcą wracać. Strona pod klucz lub nauka kodowania od zera.",
    creator: "@wiktory.ai",
  },
  alternates: {
    canonical: "https://wiktory.tech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full text-white selection:bg-white/20">
        {/* Globalne tło — fixed, widoczne pod każdą sekcją */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Stała baza — zawsze widoczna od razu, żeby nigdy nie było czarnego ekranu
              zanim wideo się załaduje */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#0d0d2a_0%,#000_70%)]" />
          {/* Wideo tła — na WSZYSTKICH urządzeniach (telefon + desktop) */}
          <div className="absolute inset-0">
            <BackgroundVideo src={BG_VIDEO} maxOpacity={1} playbackRate={1.75} />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 pointer-events-none" />
        </div>

        {/* Content nad tłem */}
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
