"use client";
import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const features = [
  {
    id: "health",
    icon: "HeartIcon",
    title: "Sağlık Takibi",
    description: "Kalp atış hızı, uyku kalitesi ve aktivite takibi ile sağlığını kontrol altında tut.",
    metric: "7/24",
    metricLabel: "Kesintisiz takip",
  },
  {
    id: "audio",
    icon: "SpeakerWaveIcon",
    title: "Premium Ses",
    description: "40dB aktif gürültü engelleme ve kristal netliğinde ses kalitesi.",
    metric: "40dB",
    metricLabel: "ANC teknolojisi",
  },
  {
    id: "battery",
    icon: "BoltIcon",
    title: "Uzun Pil Ömrü",
    description: "Tek şarjla günlerce kullanım. Hızlı şarj ile dakikalar içinde hazır.",
    metric: "30h",
    metricLabel: "Pil ömrü",
  },
  {
    id: "water",
    icon: "BeakerIcon",
    title: "Su Geçirmez",
    description: "5ATM su direnci ile yüzme dahil tüm aktivitelerde yanında.",
    metric: "5ATM",
    metricLabel: "Su direnci",
  },
];

export default function CampaignSection() {
  return (
    <section id="campaign" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-3">
            Neden LuminaTech?
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto tracking-wide">
            En son teknoloji, üstün kalite ve kusursuz tasarım bir arada.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-6 rounded-2xl bg-background hover:bg-muted transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon
                  name={feature.icon as "HeartIcon"}
                  size={28}
                  className="text-primary"
                />
              </div>

              {/* Metric */}
              <div className="mb-4">
                <span className="font-display text-3xl font-black text-primary tracking-tight">
                  {feature.metric}
                </span>
                <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground ml-2 font-medium">
                  {feature.metricLabel}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-base font-bold text-foreground mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison CTA */}
        <div className="text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
            Hangi ürün sana uygun?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto font-light">
            İhtiyaçlarına en uygun LuminaTech ürününü bulmak için karşılaştırma aracımızı kullan.
          </p>
          <Link
            href="#quiz"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors"
          >
            <Icon name="SparklesIcon" size={18} />
            Ürün Öneri Testi
          </Link>
        </div>
      </div>
    </section>
  );
}
