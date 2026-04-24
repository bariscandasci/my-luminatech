"use client";
import React from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const offers = [
  {
    id: "student",
    title: "Eğitim İndirimi",
    subtitle: "Öğrenci ve eğitimcilere özel",
    description: "Tüm LuminaTech ürünlerinde %20 indirim. Eğitim e-postanla hemen başvur.",
    discount: "%20",
    bgColor: "bg-gradient-to-br from-blue-900/50 to-cyan-900/50",
    icon: "AcademicCapIcon",
    cta: "Şimdi Başvur",
  },
  {
    id: "trade-in",
    title: "Takas Programı",
    subtitle: "Eski cihazını değerlendir",
    description: "Eski giyilebilir cihazını getir, yeni LuminaTech ürününde indirim kazan.",
    discount: "₺500",
    bgColor: "bg-gradient-to-br from-green-900/50 to-emerald-900/50",
    icon: "ArrowPathIcon",
    cta: "Cihazını Değerle",
  },
  {
    id: "bundle",
    title: "Paket Fırsatı",
    subtitle: "Birlikte al, daha çok kazan",
    description: "Aura Wristband + Sonic Buds birlikte al, toplam ₺400 tasarruf et.",
    discount: "₺400",
    bgColor: "bg-gradient-to-br from-purple-900/50 to-violet-900/50",
    icon: "GiftIcon",
    cta: "Paketi İncele",
  },
];

const paymentOptions = [
  {
    icon: "CreditCardIcon",
    title: "Taksit Seçenekleri",
    description: "12 aya varan taksit imkanı",
  },
  {
    icon: "TruckIcon",
    title: "Ücretsiz Kargo",
    description: "Tüm siparişlerde",
  },
  {
    icon: "ArrowPathIcon",
    title: "30 Gün İade",
    description: "Koşulsuz iade garantisi",
  },
  {
    icon: "ShieldCheckIcon",
    title: "2 Yıl Garanti",
    description: "Resmi LuminaTech garantisi",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            Özel Fırsatlar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sadece LuminaTech&apos;te bulacağın avantajlarla alışverişin tadını çıkar.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.bgColor} rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-white/20" />
                <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full border border-white/10" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Icon
                    name={offer.icon as "AcademicCapIcon"}
                    size={24}
                    className="text-white"
                  />
                </div>

                {/* Discount Badge */}
                <div className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-2xl font-display font-black text-white">
                    {offer.discount}
                  </span>
                  <span className="text-xs text-white/70 uppercase">indirim</span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {offer.title}
                </h3>
                <p className="text-sm text-white/60 mb-3">{offer.subtitle}</p>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  {offer.description}
                </p>

                {/* CTA */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-medium text-sm group/link"
                >
                  {offer.cta}
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Promotion Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0">
            <AppImage
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
              alt="LuminaTech ürün koleksiyonu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-xl">
            <span className="inline-block text-xs font-display font-bold text-primary tracking-widest uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
              Sınırlı Süre
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">
              Yaz Kampanyası
            </h3>
            <p className="text-muted-foreground mb-6">
              Tüm ürünlerde geçerli ekstra %10 indirim kodu. Kod: <span className="text-primary font-mono font-bold">LUMINA10</span>
            </p>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors"
            >
              Alışverişe Başla
              <Icon name="ArrowRightIcon" size={18} />
            </Link>
          </div>
        </div>

        {/* Payment & Shipping Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paymentOptions.map((option) => (
            <div
              key={option.title}
              className="text-center p-6 rounded-2xl bg-card hover:bg-muted transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={option.icon as "CreditCardIcon"}
                  size={24}
                  className="text-primary"
                />
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">
                {option.title}
              </h4>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
