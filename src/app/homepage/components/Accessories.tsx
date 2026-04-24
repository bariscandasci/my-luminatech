"use client";
import React, { useState, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

const accessories = [
  {
    id: "sport-band",
    name: "Spor Kayış",
    category: "Aura Wristband",
    price: 299,
    image: "https://images.unsplash.com/photo-1434056886845-dbd065734b29?w=400&h=400&fit=crop",
    colors: ["Siyah", "Turuncu", "Yeşil"],
  },
  {
    id: "leather-band",
    name: "Deri Kayış",
    category: "Aura Wristband",
    price: 499,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
    colors: ["Kahverengi", "Siyah"],
  },
  {
    id: "charging-dock",
    name: "Şarj İstasyonu",
    category: "Tüm Ürünler",
    price: 349,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&h=400&fit=crop",
    colors: ["Beyaz", "Siyah"],
  },
  {
    id: "carrying-case",
    name: "Taşıma Çantası",
    category: "Sonic Buds",
    price: 199,
    image: "https://images.unsplash.com/photo-1590658165737-15a047b7c0b0?w=400&h=400&fit=crop",
    colors: ["Siyah"],
  },
  {
    id: "ear-tips",
    name: "Kulak Ucu Seti",
    category: "Sonic Buds",
    price: 149,
    image: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=400&h=400&fit=crop",
    colors: ["Standart"],
  },
  {
    id: "power-bank",
    name: "Taşınabilir Şarj",
    category: "Tüm Ürünler",
    price: 599,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    colors: ["Siyah", "Gümüş"],
  },
];

function AccessoryCard({ accessory }: { accessory: (typeof accessories)[0] }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: accessory.id,
      name: accessory.name,
      price: accessory.price,
      image: accessory.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-w-[260px] md:min-w-[280px] snap-start">
      <div className="bg-card rounded-2xl p-4 group hover:bg-muted transition-colors h-full">
        {/* Image */}
        <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
          <AppImage
            src={accessory.image}
            alt={accessory.name}
            fill
            sizes="280px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div>
          <p className="text-xs text-primary mb-1">{accessory.category}</p>
          <h4 className="font-display font-bold text-foreground mb-2">
            {accessory.name}
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            {accessory.colors.join(", ")}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-foreground">
              {accessory.price} TL
            </span>
            <button
              onClick={handleAdd}
              className={`p-2 rounded-full transition-all duration-300 ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {added ? (
                <Icon name="CheckIcon" size={18} />
              ) : (
                <Icon name="PlusIcon" size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accessories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-2">
              Aksesuarlar
            </h2>
            <p className="text-muted-foreground">
              LuminaTech ürünlerini tamamlayan aksesuarlar
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-card hover:bg-muted transition-colors flex items-center justify-center"
            >
              <Icon name="ChevronLeftIcon" size={20} className="text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-card hover:bg-muted transition-colors flex items-center justify-center"
            >
              <Icon name="ChevronRightIcon" size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x-mandatory no-scrollbar pb-4"
        >
          {accessories.map((accessory) => (
            <AccessoryCard key={accessory.id} accessory={accessory} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            Tüm Aksesuarları Gör
            <Icon name="ArrowRightIcon" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
