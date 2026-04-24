"use client";
import React, { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

const products = [
{
  id: "aura-wristband",
  name: "Aura Wristband",
  tagline: "Akıllı Sağlık Takibi",
  price: 1299,
  originalPrice: 1799,
  rating: 4.9,
  reviews: 2341,
  badge: "En Çok Satan",
  badgeColor: "cyan" as const,
  image:
  "https://images.unsplash.com/photo-1651406101815-50d85040feb2",
  imageAlt:
  "Sleek smartwatch with cyan glowing display on dark surface, premium wearable technology",
  features: ["7/24 Kalp Atışı", "GPS Takip", "5ATM Su Geçirmez"],
  color: "cyan" as const
},
{
  id: "sonic-buds",
  name: "Sonic Buds",
  tagline: "Aktif Gürültü Engelleme",
  price: 899,
  originalPrice: 1299,
  rating: 4.8,
  reviews: 1876,
  badge: "Yeni Sezon",
  badgeColor: "purple" as const,
  image:
  "https://images.unsplash.com/photo-1675361771537-e099ff32b305",
  imageAlt:
  "True wireless earbuds in charging case with purple ambient lighting, dark background",
  features: ["40dB ANC", "40ms Gecikme", "30h Pil"],
  color: "purple" as const
},
{
  id: "nova-speaker",
  name: "Nova Speaker",
  tagline: "360° Surround Ses",
  price: 1599,
  originalPrice: 2199,
  rating: 4.7,
  reviews: 943,
  badge: "Çok Satılan",
  badgeColor: "cyan" as const,
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1771387fe-1767285681665.png",
  imageAlt:
  "Cylindrical bluetooth speaker with neon accent lighting on dark background, premium audio device",
  features: ["30h Pil", "IPX7 Su Geçirmez", "Multi-Connect"],
  color: "cyan" as const
}];


function ProductCard({ product }: {product: (typeof products)[0];}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = Math.round(
    (product.originalPrice - product.price) / product.originalPrice * 100
  );

  return (
    <div
      className={`group glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-card-hover flex flex-col ${
      product.color === "cyan" ? "hover:neon-border-cyan" : "hover:neon-border-purple"}`
      }>

      {/* Image */}
      <div className="relative overflow-hidden h-56 md:h-64">
        <AppImage
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700" />

        {/* Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-[10px] font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
            product.badgeColor === "cyan" ? "bg-primary text-primary-foreground" : "bg-secondary text-white"}`
            }>

            {product.badge}
          </span>
        </div>

        {/* Discount */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-display font-bold bg-red-500/90 text-white px-2 py-1 rounded-full">
            -{discount}%
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p
          className={`text-[10px] font-display font-bold tracking-widest uppercase mb-1 ${
          product.color === "cyan" ? "text-primary" : "text-secondary"}`
          }>

          {product.tagline}
        </p>
        <h3 className="font-display text-lg font-black text-foreground mb-3">
          {product.name}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.map((f) =>
          <span
            key={f}
            className="text-[10px] text-muted-foreground glass-card px-2 py-1 rounded-full">

              {f}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) =>
            <span
              key={s}
              className={`text-xs ${
              s <= Math.round(product.rating) ?
              "text-yellow-400" : "text-muted-foreground"}`
              }>

                ★
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews.toLocaleString("tr-TR")})
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div>
            <span
              className={`font-display text-xl font-black ${
              product.color === "cyan" ? "text-primary" : "text-secondary"}`
              }>

              ₺{product.price.toLocaleString("tr-TR")}
            </span>
            <span className="text-xs text-muted-foreground line-through ml-2">
              ₺{product.originalPrice.toLocaleString("tr-TR")}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className={`group/btn relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
            added ?
            "bg-green-500 text-white scale-95" :
            product.color === "cyan" ? "bg-primary text-primary-foreground hover:shadow-neon-cyan hover:scale-105" : "bg-secondary text-white hover:shadow-neon-purple hover:scale-105"}`
            }>

            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <span className="relative z-10">
              {added ? "✓ Eklendi" : "Sepete Ekle"}
            </span>
            {!added &&
            <Icon
              name="ShoppingCartIcon"
              size={14}
              className="relative z-10" />

            }
          </button>
        </div>
      </div>
    </div>);

}

export default function ProductShowcase() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 md:py-28 relative">

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-xs font-display font-bold text-primary tracking-widest uppercase mb-3 glass-card-bright px-4 py-2 rounded-full">
              Ürünler
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              Koleksiyonu{" "}
              <span className="neon-text-cyan">Keşfet</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-xs md:text-right">
            Her bütçeye uygun, her yaşam tarzına göre tasarlanmış teknoloji.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) =>
          <div
            key={product.id}
            className={`${
            visible ?
            `animate-fade-in-up delay-${(i + 1) * 100}` :
            "opacity-0"}`
            }
            style={{ animationFillMode: "forwards" }}>

              <ProductCard product={product} />
            </div>
          )}
        </div>
      </div>
    </section>);

}