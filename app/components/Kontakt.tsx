"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Instagram, Check, Mail, Send, AlertCircle } from "lucide-react";
import { BRAND } from "../config";

type FormData = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

const budgets = [
  "Do 3 000 zł",
  "3 000 – 7 000 zł",
  "7 000 – 15 000 zł",
  "Jeszcze nie wiem",
];

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setServerError(false);
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("send failed");

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setServerError(true);
    }
  };

  return (
    <section id="kontakt" className="relative overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/35 via-black/25 to-black/45 pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow mb-4">Dla firm — zacznijmy</p>
            <h2
              className="font-normal tracking-tight"
              style={{
                fontSize: "clamp(34px, 5vw, 60px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Opowiedz mi o swoim{" "}
              <span className="font-display italic text-white/85">
                projekcie.
              </span>
            </h2>

            <p className="mt-6 text-white/65 text-base leading-relaxed max-w-md">
              Wypełnij formularz, a wrócę do Ciebie w 24h roboczych. Albo wyślij
              maila wprost. Pierwsza rozmowa zawsze za darmo, bez zobowiązań.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 group"
              >
                <span className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail size={16} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                    E-mail
                  </p>
                  <p className="text-[15px] text-white/90 group-hover:text-white">
                    {BRAND.email}
                  </p>
                </div>
              </a>

              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Instagram size={16} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Instagram
                  </p>
                  <p className="text-[15px] text-white/90 group-hover:text-white">
                    @wiktory.ai
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="liquid-glass rounded-3xl p-6 md:p-8 space-y-5"
          >
            <Field
              label="Jak się nazywasz?"
              error={errors.name?.message}
              input={
                <input
                  {...register("name", { required: "Powiedz mi swoje imię" })}
                  placeholder="Np. Anna Kowalska"
                  className="input-style"
                />
              }
            />

            <Field
              label="E-mail kontaktowy"
              error={errors.email?.message}
              input={
                <input
                  type="email"
                  {...register("email", {
                    required: "Bez maila nie odpiszę :)",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Sprawdź, czy mail jest poprawny",
                    },
                  })}
                  placeholder="anna@firma.pl"
                  className="input-style"
                />
              }
            />

            <Field
              label="Orientacyjny budżet"
              error={errors.budget?.message}
              input={
                <select
                  {...register("budget", { required: "Wybierz przedział" })}
                  className="input-style appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-black">
                    Wybierz przedział
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-black">
                      {b}
                    </option>
                  ))}
                </select>
              }
            />

            <Field
              label="Opowiedz o projekcie"
              error={errors.message?.message}
              input={
                <textarea
                  {...register("message", {
                    required: "Napisz coś o swoim pomyśle",
                    minLength: { value: 20, message: "Trochę więcej szczegółów :)" },
                  })}
                  rows={4}
                  placeholder="Czym się zajmujesz, do kogo trafia Twoja oferta, co ma osiągnąć ta strona?"
                  className="input-style resize-none"
                />
              }
            />

            {serverError && (
              <div className="flex items-center gap-2 text-[13px] text-rose-400/90 px-1">
                <AlertCircle size={14} strokeWidth={2} />
                Coś poszło nie tak. Napisz bezpośrednio na {BRAND.email}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-black text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-transform btn-shine"
            >
              {submitted ? (
                <>
                  <Check size={16} strokeWidth={2.5} />
                  Wysłane — odezwę się w 24h
                </>
              ) : isSubmitting ? (
                <>Wysyłam…</>
              ) : (
                <>
                  Wyślij zapytanie
                  <Send size={14} strokeWidth={2} />
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-white/40 leading-relaxed">
              Wysyłając formularz akceptujesz, że odezwę się w 24h roboczych.
              Twoich danych nie udostępniam nikomu.
            </p>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        :global(.input-style) {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 14px;
          color: #fff;
          transition: all 0.2s ease;
          outline: none;
          font-family: inherit;
        }
        :global(.input-style:focus) {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.06);
        }
        :global(.input-style::placeholder) {
          color: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.16em] uppercase text-white/55 mb-2">
        {label}
      </label>
      {input}
      {error && (
        <p className="mt-1.5 text-[11px] text-rose-400/90">{error}</p>
      )}
    </div>
  );
}
