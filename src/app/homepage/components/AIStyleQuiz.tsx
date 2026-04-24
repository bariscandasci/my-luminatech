"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

const questions = [
  {
    id: "lifestyle",
    question: "Günlük hayatın nasıl geçiyor?",
    emoji: "⚡",
    options: [
      { value: "active", label: "Spor & Aktif Yaşam", icon: "BoltIcon" },
      { value: "music", label: "Müzik & Eğlence", icon: "MusicalNoteIcon" },
      { value: "social", label: "Sosyal & Parti", icon: "UserGroupIcon" },
    ],
  },
  {
    id: "priority",
    question: "Teknolojide en çok ne önemli?",
    emoji: "🎯",
    options: [
      { value: "health", label: "Sağlık Takibi", icon: "HeartIcon" },
      { value: "sound", label: "Ses Kalitesi", icon: "SpeakerWaveIcon" },
      { value: "battery", label: "Uzun Pil Ömrü", icon: "BatteryFullIcon" },
    ],
  },
  {
    id: "style",
    question: "Hangi estetik seni yansıtıyor?",
    emoji: "✨",
    options: [
      { value: "minimal", label: "Minimal & Şık", icon: "Squares2X2Icon" },
      { value: "bold", label: "Cesur & Göz Alıcı", icon: "SparklesIcon" },
      { value: "sporty", label: "Sportif & Dinamik", icon: "TrophyIcon" },
    ],
  },
];

const results: Record<string, { product: string; desc: string; price: string; color: "cyan" | "purple" }> = {
  active: {
    product: "Aura Wristband",
    desc: "7/24 sağlık takibi ve GPS ile aktif yaşamın için mükemmel eşlik.",
    price: "₺1.299",
    color: "cyan",
  },
  music: {
    product: "Sonic Buds",
    desc: "40dB ANC ve kristal ses kalitesiyle müziğe gömülürsün.",
    price: "₺899",
    color: "purple",
  },
  social: {
    product: "Nova Speaker",
    desc: "360° surround ses ve 30 saat pil ile her ortamı doldur.",
    price: "₺1.599",
    color: "cyan",
  },
};

function getResult(answers: string[]) {
  const freq: Record<string, number> = {};
  answers.forEach((a) => {
    freq[a] = (freq[a] || 0) + 1;
  });
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const topAnswer = sorted[0]?.[0] || "active";
  if (topAnswer === "health" || topAnswer === "minimal" || topAnswer === "active") return results.active;
  if (topAnswer === "sound" || topAnswer === "music" || topAnswer === "bold") return results.music;
  return results.social;
}

export default function AIStyleQuiz() {
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleStart = () => setStep("quiz");

  const handleOption = (value: string) => {
    setSelected(value);
    setTimeout(() => {
      const newAnswers = [...answers, value];
      if (currentQ + 1 < questions.length) {
        setAnswers(newAnswers);
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        setAnswers(newAnswers);
        setStep("result");
      }
    }, 400);
  };

  const handleReset = () => {
    setStep("intro");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setAddedToCart(false);
  };

  const result = step === "result" ? getResult(answers) : null;

  const handleAddToCart = () => {
    if (!result) return;
    const productMap: Record<string, { id: string; price: number; image: string }> = {
      "Aura Wristband": {
        id: "aura-wristband",
        price: 1299,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
      },
      "Sonic Buds": {
        id: "sonic-buds",
        price: 899,
        image:
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop",
      },
      "Nova Speaker": {
        id: "nova-speaker",
        price: 1599,
        image:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop",
      },
    };
    const p = productMap[result.product];
    if (p) {
      addItem({ id: p.id, name: result.product, price: p.price, image: p.image });
      setAddedToCart(true);
    }
  };

  return (
    <section
      id="quiz"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(124,58,237,0.4), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(0,212,255,0.4), transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #00d4ff, transparent 50%), radial-gradient(circle at 75% 50%, #7c3aed, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-display font-bold text-secondary tracking-widest uppercase mb-4 glass-card px-4 py-2 rounded-full border border-secondary/20">
            AI Style Quiz
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tight">
            Sana Özel{" "}
            <span className="neon-text-purple">Gadget</span>
            <br />
            <span className="text-muted-foreground font-light text-2xl">
              bulmana yardım edelim
            </span>
          </h2>
        </div>

        {/* Quiz Box */}
        <div className="glass-card rounded-3xl p-8 md:p-10 neon-border-purple relative overflow-hidden">
          {/* Scan line animation */}
          <div
            className="absolute left-0 right-0 h-px opacity-20 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
              animation: "scanLine 4s linear infinite",
            }}
          />

          {/* INTRO */}
          {step === "intro" && (
            <div className="text-center animate-fade-in">
              <div className="text-6xl mb-6">🤖</div>
              <h3 className="font-display text-2xl font-black text-foreground mb-3">
                3 Soru, 1 Mükemmel Eşleşme
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                Yaşam tarzına göre en uygun Lumina Tech ürününü sana önerelim.
                30 saniyede tamamla!
              </p>
              <button
                onClick={handleStart}
                className="group relative overflow-hidden inline-flex items-center gap-3 px-10 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase text-primary-foreground bg-secondary hover:shadow-neon-purple hover:scale-105 transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative z-10">Quize Başla</span>
                <Icon name="ArrowRightIcon" size={16} className="relative z-10" />
              </button>
            </div>
          )}

          {/* QUIZ */}
          {step === "quiz" && (
            <div className="animate-fade-in">
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((currentQ + 1) / questions.length) * 100}%`,
                      background: "linear-gradient(90deg, #7c3aed, #00d4ff)",
                    }}
                  />
                </div>
                <span className="text-xs font-display text-muted-foreground whitespace-nowrap">
                  {currentQ + 1} / {questions.length}
                </span>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">
                  {questions[currentQ].emoji}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {questions[currentQ].question}
                </h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {questions[currentQ].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleOption(opt.value)}
                    className={`group relative overflow-hidden glass-card rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1 border ${
                      selected === opt.value
                        ? "border-primary/60 bg-primary/10 scale-95" :"border-border hover:border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon
                        name={opt.icon as "BoltIcon"}
                        size={20}
                        className="text-primary"
                      />
                    </div>
                    <p className="font-display text-sm font-bold text-foreground">
                      {opt.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* RESULT */}
          {step === "result" && result && (
            <div className="text-center animate-fade-in">
              <div className="text-5xl mb-4">🎯</div>
              <p className="text-xs font-display font-bold text-primary tracking-widest uppercase mb-2">
                Sana Özel Öneri
              </p>
              <h3 className="font-display text-3xl font-black mb-2">
                <span
                  className={
                    result.color === "cyan" ?"neon-text-cyan" :"neon-text-purple"
                  }
                >
                  {result.product}
                </span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                {result.desc}
              </p>
              <div
                className={`font-display text-4xl font-black mb-8 ${
                  result.color === "cyan" ? "neon-text-cyan" : "neon-text-purple"
                }`}
              >
                {result.price}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                    addedToCart
                      ? "bg-green-500 text-white"
                      : result.color === "cyan" ?"bg-primary text-primary-foreground hover:shadow-neon-cyan hover:scale-105" :"bg-secondary text-white hover:shadow-neon-purple hover:scale-105"
                  }`}
                >
                  <span className="relative z-10">
                    {addedToCart ? "✓ Sepete Eklendi!" : "Sepete Ekle"}
                  </span>
                  {!addedToCart && (
                    <Icon
                      name="ShoppingCartIcon"
                      size={16}
                      className="relative z-10"
                    />
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase glass-card border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  <Icon name="ArrowPathIcon" size={16} />
                  Tekrar Dene
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}