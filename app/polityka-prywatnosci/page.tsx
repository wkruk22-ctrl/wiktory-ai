import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description: "Polityka prywatności i ochrony danych osobowych serwisu wiktory.ai",
  robots: { index: false, follow: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <main className="relative z-10 min-h-screen">
      <div className="mx-auto max-w-2xl px-5 md:px-8 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-white/45 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Wróć na stronę główną
        </Link>

        <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-2">
          Polityka prywatności
        </h1>
        <p className="text-white/45 text-sm mb-12">Ostatnia aktualizacja: czerwiec 2026</p>

        <div className="space-y-10 text-[15px] text-white/70 leading-relaxed">

          <Section title="1. Administrator danych">
            <p>
              Administratorem danych osobowych jest Wiktor, prowadzący działalność
              pod marką <strong className="text-white/90">wiktory.ai</strong>,
              z siedzibą w Wyszkowie, e-mail:{" "}
              <a href="mailto:wiktory.kontakt@gmail.com" className="text-white/90 hover:text-white underline underline-offset-4">
                wiktory.kontakt@gmail.com
              </a>.
            </p>
          </Section>

          <Section title="2. Jakie dane zbieramy">
            <p>Zbieramy wyłącznie dane, które sam(-a) podajesz poprzez formularz kontaktowy:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-white/60">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Nazwa firmy (opcjonalnie)</li>
              <li>Orientacyjny budżet</li>
              <li>Treść wiadomości</li>
            </ul>
            <p className="mt-3">
              Strona może zbierać anonimowe dane analityczne (Vercel Analytics) — bez cookies,
              bez śledzenia między stronami, bez danych osobowych.
            </p>
          </Section>

          <Section title="3. Cel i podstawa przetwarzania">
            <p>
              Dane z formularza przetwarzamy wyłącznie w celu udzielenia odpowiedzi
              na Twoje zapytanie i ewentualnej realizacji współpracy (art. 6 ust. 1 lit. b RODO —
              działania zmierzające do zawarcia umowy).
            </p>
          </Section>

          <Section title="4. Jak długo przechowujemy dane">
            <p>
              Dane z korespondencji przechowujemy przez czas niezbędny do obsługi zapytania
              lub realizacji umowy, a następnie przez okres wymagany przepisami prawa podatkowego
              (do 5 lat).
            </p>
          </Section>

          <Section title="5. Czy przekazujemy dane innym podmiotom">
            <p>
              Dane nie są sprzedawane ani przekazywane podmiotom trzecim w celach marketingowych.
              W celu dostarczenia wiadomości e-mail korzystamy z usług Resend (
              <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-white/90 underline underline-offset-4">polityka Resend</a>
              ) — przetwarzają dane wyłącznie w celu dostarczenia maila.
            </p>
          </Section>

          <Section title="6. Twoje prawa (RODO)">
            <p>Masz prawo do:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-white/60">
              <li>dostępu do swoich danych</li>
              <li>sprostowania danych</li>
              <li>usunięcia danych ("prawo do bycia zapomnianym")</li>
              <li>ograniczenia przetwarzania</li>
              <li>przenoszenia danych</li>
              <li>wniesienia sprzeciwu wobec przetwarzania</li>
              <li>wniesienia skargi do UODO (Urząd Ochrony Danych Osobowych)</li>
            </ul>
            <p className="mt-3">
              Aby skorzystać z powyższych praw, napisz na:{" "}
              <a href="mailto:wiktory.kontakt@gmail.com" className="text-white/90 hover:text-white underline underline-offset-4">
                wiktory.kontakt@gmail.com
              </a>
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Strona wiktory.tech nie używa ciasteczek śledzących ani marketingowych.
              Vercel Analytics działa bez cookies, zgodnie z wymogami RODO.
            </p>
          </Section>

          <Section title="8. Zmiany polityki">
            <p>
              Zastrzegamy prawo do aktualizacji niniejszej polityki. O istotnych zmianach
              poinformujemy przez aktualizację daty na górze strony.
            </p>
          </Section>

        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-medium text-white/90 mb-3">{title}</h2>
      {children}
    </section>
  );
}
