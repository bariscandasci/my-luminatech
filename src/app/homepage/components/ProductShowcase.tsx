"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import AppImage from "@/components/ui/AppImage";
import { useCart } from "@/context/CartContext";

const products = [
{
  id: "ultrabook-pro-x1",
  name: "UltraBook Pro X1",
  tagline: "İnce. Hafif. Güçlü. Her yerde.",
  price: 42999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_126be6519-1775981160710.png",
  colors: [
  { name: "Uzay Grisi", hex: "#86868B" },
  { name: "Gümüş", hex: "#C0C0C0" },
  { name: "Gece Yarısı", hex: "#1d1d1f" }],

  models: ["Core i5 / 16GB", "Core i7 / 16GB", "Core i7 / 32GB"],
  isNew: true,
  featured: true
},
{
  id: "gaming-laptop-rx9",
  name: "GameForce RX9",
  tagline: "Sınırları zorla. Oyunu kazan.",
  price: 67999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_138ad3eb2-1767882683688.png",
  colors: [
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Kırmızı/Siyah", hex: "#BF4F51" }],

  models: ["RTX 4060 / 16GB", "RTX 4070 / 32GB", "RTX 4080 / 32GB"],
  isNew: true,
  featured: true
},
{
  id: "ebook-reader-lumina",
  name: "Lumina E-Reader 7",
  tagline: "Binlerce kitap, tek cihaz.",
  price: 4999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1030a098a-1777043254820.png",
  colors: [
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Siyah", hex: "#1d1d1f" }],

  models: ["8GB", "32GB", "32GB Waterproof"],
  isNew: false,
  featured: false
},
{
  id: "smart-pen-aura",
  name: "Aura Smart Pen Pro",
  tagline: "Yaz, çiz, dijitalleştir.",
  price: 2499,
  image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600",
  colors: [
  { name: "Gümüş", hex: "#C0C0C0" },
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Altın", hex: "#D4AF37" }],

  models: ["Standart", "Pro", "Pro Max"],
  isNew: true,
  featured: false
},
{
  id: "arduino-starter-kit",
  name: "Arduino Mega Starter Kit",
  tagline: "Projeye başla, hayal et, üret.",
  price: 1299,
  image: "https://images.unsplash.com/photo-1612801727528-b9594cc7649f",
  colors: [
  { name: "Mavi", hex: "#007AFF" }],

  models: ["Arduino Uno R3", "Arduino Mega 2560", "Raspberry Pi 4 4GB", "Raspberry Pi 5 8GB"],
  isNew: false,
  featured: false
},
{
  id: "stm32-dev-board",
  name: "STM32 Geliştirme Kiti",
  tagline: "Gömülü sistemlerde profesyonel çözüm.",
  price: 899,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16987e45b-1765126602033.png",
  colors: [
  { name: "Yeşil", hex: "#34C759" }],

  models: ["STM32F103", "STM32F407", "STM32H743", "Nucleo-64"],
  isNew: false,
  featured: false
},
{
  id: "smartwatch-pro-s3",
  name: "Aura Watch Pro S3",
  tagline: "Sağlığını takip et, hayatını yönet.",
  price: 8999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9e0c16d-1764676756614.png",
  colors: [
  { name: "Siyah Titanyum", hex: "#3A3A3C" },
  { name: "Gümüş", hex: "#C0C0C0" },
  { name: "Altın Rose", hex: "#B76E79" }],

  models: ["41mm", "45mm", "49mm Ultra"],
  isNew: true,
  featured: false
},
{
  id: "anc-headphones-elite",
  name: "SoundShield Elite ANC",
  tagline: "Sessizliği hisset. Müziği yaşa.",
  price: 5499,
  image: "https://images.unsplash.com/photo-1581250505440-d813cad691a6",
  colors: [
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Gece Mavisi", hex: "#394E6A" }],

  models: ["Standart", "Pro", "Pro Wireless"],
  isNew: true,
  featured: false
},
{
  id: "powerbank-ultra-30k",
  name: "PowerCore Ultra 30000",
  tagline: "Şarj tükenmesin, hayat durmasın.",
  price: 1799,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9cfc6f4-1764899056839.png",
  colors: [
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Mavi", hex: "#007AFF" }],

  models: ["10.000 mAh", "20.000 mAh", "30.000 mAh 140W"],
  isNew: false,
  featured: false
},
{
  id: "external-ssd-swift",
  name: "SwiftDrive Pro SSD",
  tagline: "Hız, güvenlik, taşınabilirlik.",
  price: 2299,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15dc9bf79-1764826415456.png",
  colors: [
  { name: "Uzay Grisi", hex: "#86868B" },
  { name: "Gümüş", hex: "#C0C0C0" }],

  models: ["500GB SSD", "1TB SSD", "2TB SSD", "4TB HDD", "8TB HDD"],
  isNew: true,
  featured: false
}];



function ProductCard({
  product,
  variant = "default"
}: {product: (typeof products)[0];variant?: "default" | "featured" | "wide";}) {
  const { addItem } = useCart();
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);
  const [showModels, setShowModels] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleColorClick = (e: React.MouseEvent, color: (typeof product.colors)[0]) => {
    e.stopPropagation();
    setSelectedColor(color);
  };

  if (variant === "wide") {
    return (
      <div
        className="bg-[#f5f5f7] rounded-3xl overflow-hidden group relative cursor-pointer hover:shadow-xl transition-shadow duration-300"
        onClick={() => router.push(`/urun/${product.id}`)}>

        <div className="flex flex-col md:flex-row items-center gap-0">
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
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <div
              className="relative inline-block mb-1"
              onMouseEnter={() => setShowModels(true)}
              onMouseLeave={() => setShowModels(false)}>
              <h3 className="font-display text-[26px] md:text-[30px] font-black text-[#1d1d1f] tracking-tight leading-tight cursor-default hover:text-[#0071e3] transition-colors duration-200">
                {product.name}
              </h3>
              {showModels &&
              <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#e8e8ed] p-3 z-20 min-w-[200px] animate-fade-in-up">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[#6e6e73] font-semibold mb-2 px-1">
                    Modeller
                  </p>
                  {product.models.map((model) =>
                <div
                  key={model}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#f5f5f7] cursor-pointer transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      <span className="text-[13px] font-medium text-[#1d1d1f]">
                        {model}
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
            <div className="flex items-center gap-2 mb-2">
              {product.colors.map((color) =>
              <button
                key={color.name}
                onClick={(e) => handleColorClick(e, color)}
                className={`w-[16px] h-[16px] rounded-full transition-all duration-200 ${
                selectedColor.name === color.name ?
                "ring-2 ring-[#0071e3] ring-offset-2" :
                "hover:ring-2 hover:ring-[#d2d2d7] hover:ring-offset-1"}`}
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
                "bg-[#0071e3] text-white hover:bg-[#0077ed] hover:shadow-lg hover:shadow-[#0071e3]/30 active:scale-95"}`}>
                {added ? "✓ Eklendi" : "Sepete Ekle"}
              </button>
            </div>
          </div>
        </div>
      </div>);

  }

  if (variant === "featured") {
    return (
      <div
        className="bg-[#1d1d1f] rounded-3xl overflow-hidden group relative cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        onClick={() => router.push(`/urun/${product.id}`)}>

        <div className="relative aspect-square overflow-hidden">
          <AppImage
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" />
          {product.isNew &&
          <span className="absolute top-4 left-4 bg-[#bf4800] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
              Yeni
            </span>
          }
        </div>
        <div className="p-6">
          <div
            className="relative inline-block mb-1"
            onMouseEnter={() => setShowModels(true)}
            onMouseLeave={() => setShowModels(false)}>
            <h3 className="font-display text-[20px] font-black text-white tracking-tight leading-tight cursor-default hover:text-[#6e9ef5] transition-colors duration-200">
              {product.name}
            </h3>
            {showModels &&
            <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#e8e8ed] p-3 z-20 min-w-[200px]">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#6e6e73] font-semibold mb-2 px-1">
                  Modeller
                </p>
                {product.models.map((model) =>
              <div
                key={model}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#f5f5f7] cursor-pointer transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                    <span className="text-[13px] font-medium text-[#1d1d1f]">
                      {model}
                    </span>
                  </div>
              )}
              </div>
            }
          </div>
          <p className="text-[13px] text-[#a1a1a6] mb-3 font-light leading-relaxed">
            {product.tagline}
          </p>
          <p className="text-[12px] uppercase tracking-[0.08em] text-white font-semibold mb-4">
            {product.price.toLocaleString("tr-TR")} TL
          </p>
          <div className="flex items-center gap-2 mb-4">
            {product.colors.map((color) =>
            <button
              key={color.name}
              onClick={(e) => handleColorClick(e, color)}
              className={`w-[14px] h-[14px] rounded-full transition-all duration-200 ${
              selectedColor.name === color.name ?
              "ring-2 ring-white ring-offset-2 ring-offset-[#1d1d1f]" :
              "hover:ring-2 hover:ring-[#6e6e73] hover:ring-offset-1 hover:ring-offset-[#1d1d1f]"}`}
              style={{ backgroundColor: color.hex }}
              title={color.name} />
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 active:scale-95 ${
            added ?
            "bg-[#34c759] text-white" :
            "bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]"}`}>
            {added ? "✓ Eklendi" : "Sepete Ekle"}
          </button>
        </div>
      </div>);

  }

  return (
    <div
      className="bg-[#f5f5f7] rounded-3xl overflow-hidden group relative cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => router.push(`/urun/${product.id}`)}>

      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed]">
        <AppImage
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="object-contain w-full h-full scale-85 group-hover:scale-90 transition-transform duration-700 ease-out p-6" />
        {product.isNew &&
        <span className="absolute top-4 left-4 bg-[#bf4800] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
            Yeni
          </span>
        }
      </div>
      <div className="p-5">
        <div
          className="relative inline-block mb-1"
          onMouseEnter={() => setShowModels(true)}
          onMouseLeave={() => setShowModels(false)}>
          <h3 className="font-display text-[18px] font-black text-[#1d1d1f] tracking-tight leading-tight cursor-default hover:text-[#0071e3] transition-colors duration-200">
            {product.name}
          </h3>
          {showModels &&
          <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#e8e8ed] p-3 z-20 min-w-[200px]">
              <p className="text-[10px] uppercase tracking-[0.12em] text-[#6e6e73] font-semibold mb-2 px-1">
                Modeller
              </p>
              {product.models.map((model) =>
            <div
              key={model}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#f5f5f7] cursor-pointer transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                  <span className="text-[13px] font-medium text-[#1d1d1f]">
                    {model}
                  </span>
                </div>
            )}
            </div>
          }
        </div>
        <p className="text-[13px] text-[#6e6e73] mb-3 font-light leading-relaxed">
          {product.tagline}
        </p>
        <p className="text-[12px] uppercase tracking-[0.08em] text-[#1d1d1f] font-semibold mb-4">
          {product.price.toLocaleString("tr-TR")} TL
        </p>
        <div className="flex items-center gap-2 mb-4">
          {product.colors.map((color) =>
          <button
            key={color.name}
            onClick={(e) => handleColorClick(e, color)}
            className={`w-[14px] h-[14px] rounded-full transition-all duration-200 ${
            selectedColor.name === color.name ?
            "ring-2 ring-[#0071e3] ring-offset-2" :
            "hover:ring-2 hover:ring-[#d2d2d7] hover:ring-offset-1"}`}
            style={{ backgroundColor: color.hex }}
            title={color.name} />
          )}
        </div>
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 active:scale-95 ${
          added ?
          "bg-[#34c759] text-white" :
          "bg-[#0071e3] text-white hover:bg-[#0077ed] hover:shadow-md hover:shadow-[#0071e3]/25"}`}>
          {added ? "✓ Eklendi" : "Sepete Ekle"}
        </button>
      </div>
    </div>);

}

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-[36px] md:text-[52px] font-black text-[#1d1d1f] tracking-tight mb-3">
            Ürünlerimiz.
          </h2>
          <p className="text-[18px] md:text-[21px] text-[#6e6e73] font-light max-w-xl mx-auto">
            Teknolojinin her alanında en iyi seçenekler.
          </p>
        </div>

        {/* Wide Featured — UltraBook */}
        <div className="mb-5">
          <ProductCard product={products[0]} variant="wide" />
        </div>

        {/* Two Featured Dark — Gaming + E-Reader */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <ProductCard product={products[1]} variant="featured" />
          <ProductCard product={products[2]} variant="featured" />
        </div>

        {/* Three Standard — Smart Pen, Arduino, STM32 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          <ProductCard product={products[3]} variant="default" />
          <ProductCard product={products[4]} variant="default" />
          <ProductCard product={products[5]} variant="default" />
        </div>

        {/* Wide Featured — Smartwatch */}
        <div className="mb-5">
          <ProductCard product={products[6]} variant="wide" />
        </div>

        {/* Three Standard — ANC, Powerbank, SSD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProductCard product={products[7]} variant="default" />
          <ProductCard product={products[8]} variant="default" />
          <ProductCard product={products[9]} variant="default" />
        </div>
      </div>
    </section>);

}