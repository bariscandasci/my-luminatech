"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import { useCart } from "@/context/CartContext";

const products = [
{
  id: "aura-wristband-pro",
  name: "Aura Wristband Pro",
  tagline: "Daha güçlü. Daha parlak. Daha Pro.",
  price: 1299,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d92dcecf-1777039496934.png",
  colors: [
  { name: "Doğal Titanyum", hex: "#9A9A9D" },
  { name: "Mavi Titanyum", hex: "#394E6A" },
  { name: "Beyaz Titanyum", hex: "#F5F5F0" },
  { name: "Siyah Titanyum", hex: "#3A3A3C" }],

  models: ["41mm", "45mm", "49mm"],
  isNew: true,
  featured: true
},
{
  id: "aura-wristband",
  name: "Aura Wristband",
  tagline: "Performans ve tarz bir arada.",
  price: 999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4cc9824-1777039496785.png",
  colors: [
  { name: "Gece Yarısı", hex: "#1d1d1f" },
  { name: "Yıldız Işığı", hex: "#F9F3EE" },
  { name: "Kırmızı", hex: "#BF4F51" }],

  models: ["41mm", "45mm"],
  isNew: true,
  featured: false
},
{
  id: "aura-wristband-se",
  name: "Aura Wristband SE",
  tagline: "Sevilen özellikler, uygun fiyat.",
  price: 699,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_188aac220-1775167713455.png",
  colors: [
  { name: "Gece Yarısı", hex: "#1d1d1f" },
  { name: "Yıldız Işığı", hex: "#F9F3EE" }],

  models: ["40mm", "44mm"],
  isNew: false,
  featured: false
},
{
  id: "sonic-buds-pro",
  name: "Sonic Buds Pro",
  tagline: "Adaptif Ses. Kişiselleştirilmiş deneyim.",
  price: 899,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18a47b5d5-1777039895231.png",
  colors: [
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Siyah", hex: "#1d1d1f" }],

  models: ["Standart", "Pro", "Pro Max"],
  isNew: true,
  featured: true
},
{
  id: "sonic-buds",
  name: "Sonic Buds",
  tagline: "Etkileyici ses, rahat kullanım.",
  price: 599,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_188550edd-1774693842049.png",
  colors: [
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Pembe", hex: "#F2D7D9" }],

  models: ["Standart", "Lite"],
  isNew: false,
  featured: false
},
{
  id: "nova-speaker-max",
  name: "Nova Speaker Max",
  tagline: "Büyüleyici uzaysal ses.",
  price: 1599,
  image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
  colors: [
  { name: "Uzay Grisi", hex: "#86868B" },
  { name: "Gece Yarısı", hex: "#1d1d1f" }],

  models: ["Standart", "Max"],
  isNew: true,
  featured: false
},
{
  id: "nova-speaker",
  name: "Nova Speaker",
  tagline: "360 derece ses deneyimi.",
  price: 1199,
  image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600",
  colors: [
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Mavi", hex: "#3478F6" }],

  models: ["Standart", "Plus"],
  isNew: false,
  featured: false
},
{
  id: "nova-speaker-mini",
  name: "Nova Speaker Mini",
  tagline: "Küçük ama güçlü.",
  price: 799,
  image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",
  colors: [
  { name: "Turuncu", hex: "#FF9500" },
  { name: "Mavi", hex: "#007AFF" },
  { name: "Yeşil", hex: "#34C759" },
  { name: "Pembe", hex: "#FF2D55" },
  { name: "Sarı", hex: "#FFCC00" }],

  models: ["Mini", "Mini Pro"],
  isNew: true,
  featured: false
}];


function ProductCard({
  product,
  variant = "default"



}: {product: (typeof products)[0];variant?: "default" | "featured" | "wide";}) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);
  const [showModels, setShowModels] = useState(false);

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

  if (variant === "wide") {
    return (
      <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden group relative">
        <div className="flex flex-col md:flex-row items-center gap-0">
          {/* Image side */}
          <div className="relative w-full md:w-1/2 aspect-square overflow-hidden bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed]">
            <AppImage
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain w-full h-full scale-90 group-hover:scale-95 transition-transform duration-700 ease-out" />

            {product.isNew &&
            <span className="absolute top-4 left-4 bg-[#bf4800] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
                Yeni
              </span>
            }
          </div>
          {/* Content side */}
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <div
              className="relative inline-block mb-1"
              onMouseEnter={() => setShowModels(true)}
              onMouseLeave={() => setShowModels(false)}>

              <h3 className="font-display text-[26px] md:text-[30px] font-black text-[#1d1d1f] tracking-tight leading-tight cursor-default hover:text-[#0071e3] transition-colors duration-200">
                {product.name}
              </h3>
              {/* Model dropdown on hover */}
              {showModels &&
              <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#e8e8ed] p-3 z-20 min-w-[180px] animate-fade-in-up">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[#6e6e73] font-semibold mb-2 px-1">
                    Modeller
                  </p>
                  {product.models.map((model) =>
                <div
                  key={model}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#f5f5f7] cursor-pointer transition-colors">

                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      <span className="text-[13px] font-medium text-[#1d1d1f]">
                        {product.name} {model}
                      </span>
                    </div>
                )}
                </div>
              }
            </div>
            <p className="text-[15px] text-[#6e6e73] mb-3 font-light leading-relaxed">
              {product.tagline}
            </p>
            <p className="text-[13px] uppercase tracking-[0.08em] text-[#1d1d1f] font-semibold mb-5">
              {product.price.toLocaleString("tr-TR")} TL&apos;den başlayan fiyatlarla
            </p>
            {/* Color Options */}
            <div className="flex items-center gap-2 mb-2">
              {product.colors.map((color) =>
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-[16px] h-[16px] rounded-full transition-all duration-200 ${
                selectedColor.name === color.name ?
                "ring-2 ring-[#0071e3] ring-offset-2" :
                "hover:ring-2 hover:ring-[#d2d2d7] hover:ring-offset-1"}`
                }
                style={{ backgroundColor: color.hex }}
                title={color.name} />

              )}
            </div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#6e6e73] mb-6">
              {selectedColor.name}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAdd}
                className={`inline-flex items-center justify-center px-7 py-3 rounded-full text-[14px] font-semibold tracking-wide transition-all duration-300 ${
                added ?
                "bg-[#34c759] text-white scale-95" :
                "bg-[#0071e3] text-white hover:bg-[#0077ed] hover:shadow-lg hover:shadow-[#0071e3]/30 active:scale-95"}`
                }>

                {added ? "✓ Eklendi" : "Sepete Ekle"}
              </button>
              <Link
                href="#"
                className="text-[#0066cc] hover:underline text-[13px] font-medium tracking-wide">

                Daha fazla &rsaquo;
              </Link>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div
      className={`rounded-3xl overflow-hidden group relative flex flex-col ${
      variant === "featured" ? "bg-[#1d1d1f] text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"}`
      }>

      {/* Image area */}
      <div
        className={`relative overflow-hidden flex items-center justify-center ${
        variant === "featured" ? "bg-gradient-to-b from-[#2d2d2f] to-[#1d1d1f]" : "bg-gradient-to-b from-white to-[#f5f5f7]"} pt-8 px-6`
        }>

        {product.isNew &&
        <span
          className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${
          variant === "featured" ? "bg-white/10 text-white" : "bg-[#bf4800] text-white"}`
          }>

            Yeni
          </span>
        }
        <AppImage
          src={product.image}
          alt={product.name}
          width={280}
          height={280}
          className="object-contain w-full max-h-[220px] group-hover:scale-105 transition-transform duration-700 ease-out" />

      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Name with hover model dropdown */}
        <div
          className="relative mb-1"
          onMouseEnter={() => setShowModels(true)}
          onMouseLeave={() => setShowModels(false)}>

          <h3
            className={`font-display text-[18px] font-black tracking-tight leading-tight cursor-default transition-colors duration-200 ${
            variant === "featured" ? "text-white hover:text-[#6ac4ff]" : "text-[#1d1d1f] hover:text-[#0071e3]"}`
            }>

            {product.name}
          </h3>
          {/* Model tooltip on hover */}
          {showModels &&
          <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#e8e8ed] p-3 z-20 min-w-[160px]">
              <p className="text-[10px] uppercase tracking-[0.12em] text-[#6e6e73] font-semibold mb-2 px-1">
                Modeller
              </p>
              {product.models.map((model) =>
            <div
              key={model}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#f5f5f7] cursor-pointer transition-colors">

                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                  <span className="text-[12px] font-medium text-[#1d1d1f]">
                    {product.name} {model}
                  </span>
                </div>
            )}
            </div>
          }
        </div>

        <p
          className={`text-[13px] mb-3 font-light leading-relaxed ${
          variant === "featured" ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`
          }>

          {product.tagline}
        </p>

        <p
          className={`text-[12px] uppercase tracking-[0.08em] font-semibold mb-4 ${
          variant === "featured" ? "text-[#f5f5f7]" : "text-[#1d1d1f]"}`
          }>

          {product.price.toLocaleString("tr-TR")} TL&apos;den
        </p>

        {/* Color swatches */}
        <div className="flex items-center gap-1.5 mb-1">
          {product.colors.map((color) =>
          <button
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className={`w-[13px] h-[13px] rounded-full transition-all duration-200 ${
            selectedColor.name === color.name ?
            "ring-2 ring-[#0071e3] ring-offset-2 ring-offset-transparent" :
            "hover:ring-2 hover:ring-[#d2d2d7] hover:ring-offset-1"}`
            }
            style={{ backgroundColor: color.hex }}
            title={color.name} />

          )}
        </div>
        <p
          className={`text-[10px] uppercase tracking-[0.1em] mb-5 ${
          variant === "featured" ? "text-[#6e6e73]" : "text-[#6e6e73]"}`
          }>

          {selectedColor.name}
        </p>

        {/* Actions */}
        <div className="mt-auto space-y-2">
          <button
            onClick={handleAdd}
            className={`w-full py-3 px-6 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 active:scale-95 ${
            added ?
            "bg-[#34c759] text-white" :
            variant === "featured" ? "bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] hover:shadow-lg hover:shadow-white/20" : "bg-[#0071e3] text-white hover:bg-[#0077ed] hover:shadow-lg hover:shadow-[#0071e3]/25"}`
            }>

            {added ? "✓ Eklendi" : "Sepete Ekle"}
          </button>
          <Link
            href="#"
            className={`block text-center text-[12px] font-medium tracking-wide transition-colors ${
            variant === "featured" ? "text-[#6ac4ff] hover:text-white" : "text-[#0066cc] hover:text-[#0071e3]"}`
            }>

            Daha fazla bilgi &rsaquo;
          </Link>
        </div>
      </div>
    </div>);

}

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-[32px] md:text-[40px] font-black text-[#1d1d1f] mb-2 tracking-tight">
            Yeni ve popüler ürünler.
          </h2>
          <p className="text-[18px] text-[#6e6e73] font-light">
            En yeni modelleri keşfet. İsmin üzerine gel, modelleri gör.
          </p>
        </div>

        {/* Featured wide card — Aura Wristband Pro */}
        <div className="mb-4">
          <ProductCard product={products[0]} variant="wide" />
        </div>

        {/* 3-column row: Aura Wristband, SE, Sonic Buds Pro (featured dark) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <ProductCard product={products[1]} variant="default" />
          <ProductCard product={products[2]} variant="default" />
          <ProductCard product={products[3]} variant="featured" />
        </div>

        {/* 2-column row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <ProductCard product={products[4]} variant="default" />
          <ProductCard product={products[5]} variant="wide" />
        </div>

        {/* 3-column row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ProductCard product={products[6]} variant="default" />
          <ProductCard product={products[7]} variant="featured" />
          <ProductCard product={products[0]} variant="default" />
        </div>

        {/* Compare Link */}
        <div className="mt-12 text-center">
          <Link
            href="#"
            className="text-[#0066cc] hover:underline text-[15px] font-medium tracking-wide">

            Tüm modelleri karşılaştır &rsaquo;
          </Link>
        </div>
      </div>
    </section>);

}