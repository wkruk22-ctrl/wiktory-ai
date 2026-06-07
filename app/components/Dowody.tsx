"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Video, Phone, MoreVertical, Check } from "lucide-react";

type Msg = { side: "in" | "out"; text: string; time: string };
type Chat = {
  title: string;
  platform: "whatsapp" | "imessage";
  color: string;
  initials: string;
  msgs: Msg[];
};

const chats: Chat[] = [
  {
    title: "Zbudowane po Module 2",
    platform: "imessage",
    color: "bg-slate-600",
    initials: "M2",
    msgs: [
      { side: "in", text: "ja w ogóle nie jestem developerem", time: "20:11" },
      { side: "in", text: "zrobiłem hero + scroll, wysłałem do znajomego", time: "20:12" },
      { side: "in", text: "powiedział że wygląda jak strona za 20k...", time: "20:12" },
      { side: "out", text: "trafiłeś w narrację zanim w piksele. naprawdę z ciebie dumny", time: "20:14" },
      { side: "in", text: "nie spodziewałem się tego serio", time: "20:15" },
    ],
  },
  {
    title: "Pierwszy klient zamknięty",
    platform: "whatsapp",
    color: "bg-emerald-700",
    initials: "FK",
    msgs: [
      { side: "in", text: "pierwszy klient podpisał wczoraj", time: "14:03" },
      { side: "out", text: "ile minęło od startu?", time: "14:05" },
      { side: "in", text: "11 dni", time: "14:06" },
      { side: "in", text: "myślałem że zajmie miesiące lol", time: "14:06" },
      { side: "out", text: "smakuj to. czas jest realny gdy robota mówi sama za siebie", time: "14:08" },
    ],
  },
  {
    title: "Z utknięcia → wysłane",
    platform: "imessage",
    color: "bg-sky-700",
    initials: "WS",
    msgs: [
      { side: "in", text: "utknąłem na tutorialach przez miesiące", time: "22:48" },
      { side: "in", text: "struktura + hierarchia w końcu to kliknęła", time: "22:48" },
      { side: "in", text: "wysłałem pełny one-pager zeszłej nocy", time: "22:49" },
      { side: "out", text: "wrzuć link jak możesz. chcę zobaczyć", time: "22:51" },
      { side: "in", text: "dobra wyślę jutro na dm", time: "22:52" },
    ],
  },
  {
    title: "Build za 5,5K zamknięty",
    platform: "imessage",
    color: "bg-violet-700",
    initials: "5K",
    msgs: [
      { side: "in", text: "właśnie zdobyłem kolejnego klienta", time: "09:33" },
      { side: "in", text: "5,5k za całą stronę. umowa podpisana wczoraj", time: "09:33" },
      { side: "out", text: "to pozycjonowanie daje efekty", time: "09:36" },
      { side: "in", text: "nadal nie mogę w to uwierzyć lol", time: "09:37" },
    ],
  },
  {
    title: "Build + 120$/m opieka",
    platform: "whatsapp",
    color: "bg-teal-700",
    initials: "RC",
    msgs: [
      { side: "in", text: "zamknięte wczoraj. 3,2k za build", time: "18:22" },
      { side: "in", text: "120/m za hosting i lekki management", time: "18:22" },
      { side: "out", text: "ładnie. retainer się nakłada na build", time: "18:25" },
      { side: "in", text: "sam to zaproponował. prawie płakałem", time: "18:26" },
    ],
  },
  {
    title: "Wycena przyjęta",
    platform: "imessage",
    color: "bg-amber-700",
    initials: "WC",
    msgs: [
      { side: "in", text: "wycena na 6,5k", time: "11:04" },
      { side: "out", text: "i?", time: "11:06" },
      { side: "in", text: "powiedział tak. bez negocjacji", time: "11:07" },
      { side: "out", text: "haha tego właśnie lubię słuchać", time: "11:08" },
    ],
  },
  {
    title: "Strona zaczęła konwertować",
    platform: "imessage",
    color: "bg-rose-700",
    initials: "SK",
    msgs: [
      { side: "in", text: "dziś dostałem wypełniony formularz rezerwacji", time: "16:51" },
      { side: "in", text: "po raz pierwszy z własnej strony lol", time: "16:51" },
      { side: "out", text: "fajnie. co ostatnio zmieniłeś?", time: "16:54" },
      { side: "in", text: "przepisałem hero + blok CTA z modułu 1-2", time: "16:55" },
    ],
  },
];

export default function Dowody() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/55 pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            Dowody, nie obietnice
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-normal tracking-tight"
            style={{
              fontSize: "clamp(34px, 5vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Takie wiadomości{" "}
            <span className="font-display italic text-white/85">
              dostaję co tydzień.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-white/60 text-base md:text-lg leading-relaxed"
          >
            Klienci, przelewy, polecenia — od ludzi, którzy miesiąc wcześniej
            nie napisali ani linijki kodu.
          </motion.p>
        </div>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {chats.map((c, i) => (
            <ChatCard key={c.title} chat={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatCard({ chat, index }: { chat: Chat; index: number }) {
  const sentBg = chat.platform === "imessage" ? "bg-[#0a84ff]" : "bg-[#005c4b]";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="mb-5 break-inside-avoid"
    >
      <div className="rounded-[26px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
        {/* Header */}
        <div className="flex items-center gap-3 bg-[#202c33] px-3.5 py-2.5">
          <ArrowLeft size={18} className="text-[#aebac1] shrink-0" strokeWidth={2} />
          <span
            className={`size-9 rounded-full ${chat.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0 tracking-wider`}
          >
            {chat.initials}
          </span>
          <div className="flex-1 min-w-0 leading-tight">
            <p className="text-[13px] text-white font-medium truncate">{chat.title}</p>
            <p className="text-[10px] text-[#8696a0] uppercase tracking-widest">
              {chat.platform === "imessage" ? "iMessage" : "WhatsApp"}
            </p>
          </div>
          <Video size={17} className="text-[#aebac1] shrink-0" strokeWidth={1.8} />
          <Phone size={16} className="text-[#aebac1] shrink-0" strokeWidth={1.8} />
          <MoreVertical size={17} className="text-[#aebac1] shrink-0" strokeWidth={1.8} />
        </div>

        {/* Chat area */}
        <div
          className="px-3 py-4 space-y-1.5 bg-[#0b141a]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          {chat.msgs.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.side === "out" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] text-[13.5px] leading-snug px-2.5 pt-1.5 pb-1 rounded-lg ${
                  m.side === "out"
                    ? `${sentBg} text-white rounded-tr-sm`
                    : "bg-[#202c33] text-[#e9edef] rounded-tl-sm"
                }`}
              >
                <span>{m.text}</span>
                <span className="float-right ml-2 mt-1.5 flex items-center gap-0.5 translate-y-0.5">
                  <span className="text-[10px] text-[#8696a0]">{m.time}</span>
                  {m.side === "out" && (
                    <span className="flex -space-x-1.5 text-[#53bdeb]">
                      <Check size={13} strokeWidth={2.5} />
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
