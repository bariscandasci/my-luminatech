"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

const questions = [
{
  id: "lifestyle",
  question: "Günlük hayatında en çok hangisini yapıyorsun?",
  options: [
  { value: "active", label: "Spor ve fitness", icon: "BoltIcon" },
  { value: "music", label: "Müzik dinleme", icon: "MusicalNoteIcon" },
  { value: "social", label: "Sosyal etkinlikler", icon: "UserGroupIcon" }]

},
{
  id: "priority",
  question: "Teknolojide en çok neye önem veriyorsun?",
  options: [
  { value: "health", label: "Sağlık takibi", icon: "HeartIcon" },
  { value: "sound", label: "Ses kalitesi", icon: "SpeakerWaveIcon" },
  { value: "battery", label: "Pil ömrü", icon: "BoltIcon" }]

},
{
  id: "style",
  question: "Hangi tasarım tarzını tercih ediyorsun?",
  options: [
  { value: "minimal", label: "Minimal", icon: "Squares2X2Icon" },
  { value: "bold", label: "Dikkat çekici", icon: "SparklesIcon" },
  { value: "sporty", label: "Sportif", icon: "TrophyIcon" }]

}];


const results: Record<string, {product: string;desc: string;price: number;id: string;image: string;}> = {
  active: {
    product: "Aura Wristband",
    desc: "7/24 sağlık takibi ve GPS ile aktif yaşam tarzın için ideal.",
    price: 1299,
    id: "aura-wristband",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12e8a92af-1772267194381.png"
  },
  music: {
    product: "Sonic Buds",
    desc: "40dB ANC ile müziğin tadını doyasıya çıkar.",
    price: 899,
    id: "sonic-buds",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5f60e70-1777039501239.png"
  },
  social: {
    product: "Nova Speaker",
    desc: "360° ses ile her ortamda partinin yıldızı ol.",
    price: 1599,
    id: "nova-speaker",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c68ccbad-1777039501748.png"
  }
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
    }, 300);
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
    addItem({
      id: result.id,
      name: result.product,
      price: result.price,
      image: result.image
    });
    setAddedToCart(true);
  };

  return (
    <section id="quiz" className="py-16 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-3">
            Sana uygun ürünü bul
          </h2>
          <p className="text-muted-foreground text-lg font-light tracking-wide">
            Birkaç soruyla ihtiyacına en uygun LuminaTech ürününü keşfet.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-background rounded-3xl p-8 md:p-12">
          {/* INTRO */}
          {step === "intro" &&
          <div className="text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="SparklesIcon" size={32} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3 tracking-tight">
                Ürün Öneri Testi
              </h3>
              <p className="text-muted-foreground mb-8 max-w-sm mx-auto font-light">
                3 basit soru ile yaşam tarzına en uygun LuminaTech ürününü keşfet.
              </p>
              <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors">

                Teste Başla
                <Icon name="ArrowRightIcon" size={18} />
              </button>
            </div>
          }

          {/* QUIZ */}
          {step === "quiz" &&
          <div className="animate-fade-in">
              {/* Progress */}
              <div className="flex items-center gap-3 mb-10">
                {questions.map((_, i) =>
              <div
                key={i}
                className={`flex-1 h-1 rounded-full transition-colors ${
                i <= currentQ ? "bg-primary" : "bg-muted"}`
                } />

              )}
              </div>

              {/* Question */}
              <div className="text-center mb-10">
                <p className="text-xs text-primary font-semibold uppercase tracking-[0.12em] mb-2">
                  Soru {currentQ + 1} / {questions.length}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  {questions[currentQ].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQ].options.map((opt) =>
              <button
                key={opt.value}
                onClick={() => handleOption(opt.value)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 ${
                selected === opt.value ?
                "bg-primary text-primary-foreground" :
                "bg-card hover:bg-muted border border-border"}`
                }>

                    <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  selected === opt.value ?
                  "bg-white/20" : "bg-primary/10"}`
                  }>

                      <Icon
                    name={opt.icon as "BoltIcon"}
                    size={20}
                    className={selected === opt.value ? "text-white" : "text-primary"} />

                    </div>
                    <span className="font-medium">{opt.label}</span>
                  </button>
              )}
              </div>
            </div>
          }

          {/* RESULT */}
          {step === "result" && result &&
          <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckIcon" size={32} className="text-green-500" />
              </div>
              <p className="text-xs text-primary font-semibold uppercase tracking-[0.12em] mb-2">Sana önerimiz</p>
              <h3 className="font-display text-3xl font-black text-foreground mb-2 tracking-tight">
                {result.product}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm mx-auto font-light">
                {result.desc}
              </p>
              <p className="font-display text-3xl font-bold text-foreground mb-8 tracking-tight">
                {result.price.toLocaleString("tr-TR")} TL
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all ${
                addedToCart ?
                "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:bg-accent"}`
                }>

                  {addedToCart ? "Sepete Eklendi" : "Sepete Ekle"}
                </button>
                <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium bg-card border border-border text-foreground hover:bg-muted transition-colors">

                  <Icon name="ArrowPathIcon" size={18} />
                  Tekrar Dene
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>);

}