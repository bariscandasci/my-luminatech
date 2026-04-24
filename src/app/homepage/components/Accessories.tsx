"use client";
import React, { useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { useCart } from "@/context/CartContext";

const accessories = [
{
  id: "sport-band-ocean",
  name: "Spor Kayis - Okyanus Mavisi",
  category: "Aura Wristband",
  price: 349,
  image: "https://images.unsplash.com/photo-1472407687365-73a97a947426"
},
{
  id: "braided-loop",
  name: "Orgu Bileklik",
  category: "Aura Wristband",
  price: 449,
  image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400"
},
{
  id: "leather-link",
  name: "Deri Baglanti Kayis",
  category: "Aura Wristband",
  price: 599,
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
},
{
  id: "milanese-loop",
  name: "Milanese Bileklik",
  category: "Aura Wristband",
  price: 699,
  image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=400"
},
{
  id: "magnetic-charger",
  name: "MagSafe Sarj Cihazi",
  category: "Tum Urunler",
  price: 299,
  image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400"
},
{
  id: "charging-dock",
  name: "Duo Sarj Istasyonu",
  category: "Tum Urunler",
  price: 899,
  image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400"
},
{
  id: "carrying-case",
  name: "Sonic Buds Kilifi",
  category: "Sonic Buds",
  price: 249,
  image: "https://images.unsplash.com/photo-1590658165737-15a047b7c0b0?w=400"
},
{
  id: "ear-tips",
  name: "Kulak Ucu Seti",
  category: "Sonic Buds",
  price: 149,
  image: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=400"
},
{
  id: "power-adapter",
  name: "20W USB-C Guc Adaptoru",
  category: "Tum Urunler",
  price: 199,
  image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400"
},
{
  id: "travel-case",
  name: "Seyahat Cantasi",
  category: "Nova Speaker",
  price: 349,
  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
}];


function AccessoryCard({ accessory }: {accessory: (typeof accessories)[0];}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: accessory.id,
      name: accessory.name,
      price: accessory.price,
      image: accessory.image
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-w-[200px] md:min-w-[240px] snap-start flex-shrink-0">
      <div className="bg-[#fbfbfd] rounded-2xl p-4 h-full">
        {/* Image */}
        <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-white">
          <AppImage
            src={accessory.image}
            alt={accessory.name}
            width={200}
            height={200}
            className="object-contain w-full h-full" />

        </div>

        {/* Info */}
        <div>
          <p className="text-[11px] text-[#bf4800] mb-0.5 font-semibold uppercase tracking-[0.1em]">
            {accessory.category}
          </p>
          <h4
            className={`font-display text-[13px] font-bold text-[#1d1d1f] mb-1 line-clamp-2 tracking-tight`}>

            {accessory.name}
          </h4>
          <p className="text-[13px] uppercase tracking-[0.08em] text-[#1d1d1f] font-medium mb-3">
            {accessory.price.toLocaleString("tr-TR")} TL
          </p>
          <button
            onClick={handleAdd}
            className={`w-full py-2 px-4 rounded-full text-[12px] font-medium transition-all duration-300 ${
            added ?
            "bg-[#34c759] text-white" :
            "bg-[#0071e3] text-white hover:bg-[#0077ed]"}`
            }>

            {added ? "Eklendi" : "Sepete Ekle"}
          </button>
        </div>
      </div>
    </div>);

}

export default function Accessories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 260;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-[28px] md:text-[36px] font-black text-[#1d1d1f] mb-1 tracking-tight">
              Aksesuarlar.
            </h2>
            <p className="text-[18px] text-[#6e6e73] font-light">
              LuminaTech ürünlerinle mükemmel uyum.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors flex items-center justify-center"
              aria-label="Geri">

              <svg className="w-4 h-4" fill="none" stroke="#1d1d1f" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors flex items-center justify-center"
              aria-label="Ileri">

              <svg className="w-4 h-4" fill="none" stroke="#1d1d1f" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x-mandatory no-scrollbar pb-4 -mx-4 px-4">

          {accessories.map((accessory) =>
          <AccessoryCard key={accessory.id} accessory={accessory} />
          )}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-[#0066cc] hover:underline text-[17px]">

            Tum aksesuarlari gor &gt;
          </a>
        </div>
      </div>
    </section>);

}