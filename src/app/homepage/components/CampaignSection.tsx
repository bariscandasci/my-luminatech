"use client";
import React, { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const campaignCards = [
  {
    id: "smart-living",
    icon: "CpuChipIcon",
    tag: "Smart Living",
    title: "Akıllı Yaşam",
    description:
      "Aura Wristband ile adım sayarken kalp atışını takip et, uyku kaliteni optimize et. Sağlıklı yaşam artık bilek hareketinde.",
    stat: "7/24",
    statLabel: "Sağlık Takibi",
    color: "cyan" as const,
    delay: "delay-100",
  },
  {
    id: "digital-connection",
    icon: "SignalIcon",
    tag: "Digital Connection",
    title: "Dijital Bağlantı",
    description:
      "Sonic Buds ile 40ms düşük gecikme. Arkadaşlarınla oyun oynarken, müzik dinlerken hiçbir şeyi kaçırma.",
    stat: "40ms",
    statLabel: "Gecikme Süresi",
    color: "purple" as const,
    delay: "delay-200",
  },
  {
    id: "unlimited-fun",
    icon: "BoltIcon",
    tag: "Unlimited Fun",
    title: "Sınırsız Eğlence",
    description:
      "Nova Speaker ile 360° surround ses. Partini, kampını, her anını dolu dolu yaşat. 30 saat pil ömrü ile durma.",
    stat: "30h",
    statLabel: "Pil Ömrü",
    color: "cyan" as const,
    delay: "delay-300",
  },
];

export default function CampaignSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="campaign"
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-display font-bold text-primary tracking-widest uppercase mb-4 glass-card-bright px-4 py-2 rounded-full">
            Kampanya
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Gençlik{" "}
            <span className="neon-text-purple">Enerjisi</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light mt-4 max-w-xl mx-auto">
            Üç temel değer, sonsuz bir yaşam deneyimi. Lumina Tech&apos;in vizyonu
            ile tanış.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {campaignCards.map((card, index) => (
            <div
              key={card.id}
              className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover cursor-default overflow-hidden ${
                visible
                  ? `animate-fade-in-up ${card.delay}`
                  : "opacity-0"
              } ${
                card.color === "cyan" ?"hover:neon-border-cyan" :"hover:neon-border-purple"
              }`}
              style={{ animationFillMode: "forwards" }}
            >
              {/* Card background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background:
                    card.color === "cyan" ?"linear-gradient(135deg, rgba(0,212,255,0.06) 0%, transparent 100%)" :"linear-gradient(135deg, rgba(124,58,237,0.06) 0%, transparent 100%)",
                }}
              />

              {/* Shine sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 rounded-2xl" />

              {/* Tag */}
              <span
                className={`inline-block text-[10px] font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 ${
                  card.color === "cyan" ?"text-primary bg-primary/10" :"text-secondary bg-secondary/10"
                }`}
              >
                {card.tag}
              </span>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  card.color === "cyan" ?"bg-primary/10 text-primary" :"bg-secondary/10 text-secondary"
                }`}
              >
                <Icon name={card.icon as "BoltIcon"} size={28} />
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span
                  className={`font-display text-4xl font-black ${
                    card.color === "cyan" ?"neon-text-cyan" :"neon-text-purple"
                  }`}
                >
                  {card.stat}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider ml-2">
                  {card.statLabel}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
                  card.color === "cyan" ?"bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary/80" :"bg-gradient-to-r from-transparent via-secondary/40 to-transparent group-hover:via-secondary/80"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}