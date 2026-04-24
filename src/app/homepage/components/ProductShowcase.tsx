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
  { name: "Dogal Titanyum", hex: "#9A9A9D" },
  { name: "Mavi Titanyum", hex: "#394E6A" },
  { name: "Beyaz Titanyum", hex: "#F5F5F0" },
  { name: "Siyah Titanyum", hex: "#3A3A3C" }],

  isNew: true
},
{
  id: "aura-wristband",
  name: "Aura Wristband",
  tagline: "Performans ve tarz bir arada.",
  price: 999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4cc9824-1777039496785.png",
  colors: [
  { name: "Gece Yarisi", hex: "#1d1d1f" },
  { name: "Yildiz Isigi", hex: "#F9F3EE" },
  { name: "Kirmizi", hex: "#BF4F51" }],

  isNew: true
},
{
  id: "aura-wristband-se",
  name: "Aura Wristband SE",
  tagline: "Sevilen ozellikler, uygun fiyat.",
  price: 699,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_188aac220-1775167713455.png",
  colors: [
  { name: "Gece Yarisi", hex: "#1d1d1f" },
  { name: "Yildiz Isigi", hex: "#F9F3EE" }],

  isNew: false
},
{
  id: "sonic-buds-pro",
  name: "Sonic Buds Pro",
  tagline: "Adaptif Ses. Kisisellestirilmis deneyim.",
  price: 899,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1311310f4-1777039496957.png",
  colors: [
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Siyah", hex: "#1d1d1f" }],

  isNew: true
},
{
  id: "sonic-buds",
  name: "Sonic Buds",
  tagline: "Etkileyici ses, rahat kullanim.",
  price: 599,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_188550edd-1774693842049.png",
  colors: [
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Pembe", hex: "#F2D7D9" }],

  isNew: false
},
{
  id: "nova-speaker-max",
  name: "Nova Speaker Max",
  tagline: "Buyuleyici uzaysal ses.",
  price: 1599,
  image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
  colors: [
  { name: "Uzay Grisi", hex: "#86868B" },
  { name: "Gece Yarisi", hex: "#1d1d1f" }],

  isNew: true
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

  isNew: false
},
{
  id: "nova-speaker-mini",
  name: "Nova Speaker Mini",
  tagline: "Kucuk ama guclu.",
  price: 799,
  image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",
  colors: [
  { name: "Turuncu", hex: "#FF9500" },
  { name: "Mavi", hex: "#007AFF" },
  { name: "Yesil", hex: "#34C759" },
  { name: "Pembe", hex: "#FF2D55" },
  { name: "Sari", hex: "#FFCC00" }],

  isNew: true
}];


function ProductCard({ product }: {product: (typeof products)[0];}) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
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

  return (
    <div className="bg-[#fbfbfd] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
      {/* New Badge */}
      {product.isNew &&
      <p className="text-[#bf4800] text-[11px] font-semibold uppercase tracking-[0.1em] mb-1">Yeni</p>
      }

      {/* Product Name */}
      <h3 className="font-display text-[20px] font-bold text-[#1d1d1f] mb-1 tracking-tight leading-tight">
        {product.name}
      </h3>
      <p className="text-[13px] text-[#6e6e73] mb-4 font-light">{product.tagline}</p>

      {/* Price */}
      <p className="text-[13px] uppercase tracking-[0.08em] text-[#1d1d1f] font-medium mb-4">
        {product.price.toLocaleString("tr-TR")} TL&apos;den başlayan fiyatlarla
      </p>

      {/* Product Image */}
      <div className="relative aspect-square mb-6 flex items-center justify-center">
        <AppImage
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-contain w-full h-full" />

      </div>

      {/* Color Options */}
      <div className="flex items-center justify-center gap-2 mb-5">
        {product.colors.map((color) =>
        <button
          key={color.name}
          onClick={() => setSelectedColor(color)}
          className={`w-[14px] h-[14px] rounded-full transition-all duration-200 ${
          selectedColor.name === color.name ?
          "ring-2 ring-[#0071e3] ring-offset-2" :
          "hover:ring-2 hover:ring-[#d2d2d7] hover:ring-offset-1"}`
          }
          style={{ backgroundColor: color.hex }}
          title={color.name} />

        )}
      </div>

      {/* Selected Color Name */}
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#6e6e73] mb-4">{selectedColor.name}</p>

      {/* Actions */}
      <div className="space-y-2">
        <Link
          href="#"
          className="block text-[#0066cc] hover:underline text-[13px] font-medium tracking-wide">

          Daha fazla bilgi &rsaquo;
        </Link>
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 px-6 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 ${
          added ?
          "bg-[#34c759] text-white" :
          "bg-[#0071e3] text-white hover:bg-[#0077ed]"}`
          }>

          {added ? "Eklendi" : "Sepete Ekle"}
        </button>
      </div>
    </div>);

}

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-display text-[28px] md:text-[36px] font-black text-[#1d1d1f] mb-2 tracking-tight">
            Yeni ve popüler ürünler.
          </h2>
          <p className="text-[18px] text-[#6e6e73] font-light">
            En yeni modelleri keşfet ve sepetine ekle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) =>
          <ProductCard key={product.id} product={product} />
          )}
        </div>

        {/* Compare Link */}
        <div className="mt-10 text-center">
          <Link
            href="#"
            className="text-[#0066cc] hover:underline text-[15px] font-medium tracking-wide">

            Tüm modelleri karşılaştır &rsaquo;
          </Link>
        </div>
      </div>
    </section>);

}