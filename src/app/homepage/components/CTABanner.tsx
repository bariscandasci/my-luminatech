"use client";
import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const supportOptions = [
  {
    icon: "ChatBubbleLeftRightIcon",
    title: "LuminaTech Uzmanı",
    description: "Alışverişte birebir yardım al",
    cta: "Sohbet Başlat",
    href: "#",
  },
  {
    icon: "BuildingStorefrontIcon",
    title: "Mağazayı Ziyaret Et",
    description: "En yakın LuminaTech mağazası",
    cta: "Mağaza Bul",
    href: "#",
  },
];

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {supportOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group p-8 rounded-3xl bg-card hover:bg-muted transition-all duration-300 flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon
                  name={option.icon as "ChatBubbleLeftRightIcon"}
                  size={28}
                  className="text-primary"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1 tracking-tight">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-3 font-light text-sm">{option.description}</p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all tracking-wide">
                  {option.cta}
                  <Icon name="ArrowRightIcon" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "TruckIcon", label: "Sipariş Takibi" },
            { icon: "DevicePhoneMobileIcon", label: "LuminaTech Uygulaması" },
            { icon: "WrenchScrewdriverIcon", label: "Servis & Destek" },
            { icon: "GiftIcon", label: "Hediye Kartları" },
          ].map((link) => (
            <Link
              key={link.label}
              href="#"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card hover:bg-muted transition-colors text-center group"
            >
              <Icon
                name={link.icon as "TruckIcon"}
                size={24}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
              <span className="text-sm font-semibold text-foreground tracking-wide">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
