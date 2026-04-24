"use client";
import React, { useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { useCart } from "@/context/CartContext";

const accessories = [
{
  id: "sport-band-ocean",
  name: "Spor Kayış - Okyanus Mavisi",
  category: "Aura Wristband",
  price: 349,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2fdd95d-1772808745086.png",
  alt: "Mavi renkli spor akıllı saat kayışı"
},
{
  id: "braided-loop",
  name: "Örgü Bileklik",
  category: "Aura Wristband",
  price: 449,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_161913b7f-1766897839104.png",
  alt: "Modern örgü dokulu akıllı saat kayışı"
},
{
  id: "leather-link",
  name: "Deri Bağlantı Kayış",
  category: "Aura Wristband",
  price: 599,
  image: "https://images.unsplash.com/photo-1641387557393-8ed2aae1c159",
  alt: "Premium deri akıllı saat kayışı"
},
{
  id: "milanese-loop",
  name: "Milanese Bileklik",
  category: "Aura Wristband",
  price: 699,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_132a13ef4-1772282081352.png",
  alt: "Metal örgü Milanese akıllı saat kayışı"
},
{
  id: "magnetic-charger",
  name: "MagSafe Şarj Cihazı",
  category: "Tüm Ürünler",
  price: 299,
  image: "https://images.unsplash.com/photo-1592153507317-473e1a1983e1",
  alt: "Beyaz manyetik kablosuz şarj cihazı"
},
{
  id: "charging-dock",
  name: "Duo Şarj İstasyonu",
  category: "Tüm Ürünler",
  price: 899,
  image: "https://images.unsplash.com/photo-1708610295194-85e3e9387002",
  alt: "Çift cihaz şarj istasyonu masaüstü"
},
{
  id: "carrying-case",
  name: "Sonic Buds Kılıfı",
  category: "Sonic Buds",
  price: 249,
  image: "https://images.unsplash.com/photo-1596195616720-089d7f36c901",
  alt: "Beyaz kablosuz kulaklık şarj kutusu kılıfı"
},
{
  id: "ear-tips",
  name: "Kulak Ucu Seti",
  category: "Sonic Buds",
  price: 149,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7efac9c-1765992810214.png",
  alt: "Silikon kulak ucu seti farklı boyutlar"
},
{
  id: "power-adapter",
  name: "20W USB-C Güç Adaptörü",
  category: "Tüm Ürünler",
  price: 199,
  image: "https://images.unsplash.com/photo-1563908023674-2d2d47dabbda",
  alt: "Kompakt beyaz USB-C güç adaptörü"
},
{
  id: "travel-case",
  name: "Seyahat Çantası",
  category: "Nova Speaker",
  price: 349,
  image: "https://images.unsplash.com/photo-1564212050-2e868e4a34b8",
  alt: "Siyah taşıma çantası elektronik aksesuarlar için"
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
    <div className="min-w-[200px] md:min-w-[220px] snap-start flex-shrink-0">
      <div className="bg-[#fbfbfd] rounded-2xl p-4 h-full flex flex-col">
        {/* Image */}
        <div className="w-full h-[160px] mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-white">
          <AppImage
            src={accessory.image}
            alt={accessory.alt}
            width={160}
            height={160}
            className="object-cover w-full h-full" />

        </div>

        {/* Info */}
        <div className="flex flex-col flex-1">
          <p className="text-[11px] text-[#bf4800] mb-0.5 font-semibold uppercase tracking-[0.1em]">
            {accessory.category}
          </p>
          <h4 className="font-display text-[13px] font-bold text-[#1d1d1f] mb-1 line-clamp-2 tracking-tight leading-snug">
            {accessory.name}
          </h4>
          <p className="text-[13px] uppercase tracking-[0.08em] text-[#1d1d1f] font-medium mb-3">
            {accessory.price.toLocaleString("tr-TR")} TL
          </p>
          <button
            onClick={handleAdd}
            className={`mt-auto w-full py-2.5 px-4 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300 active:scale-95 ${
            added ?
            "bg-[#34c759] text-white" :
            "bg-[#0071e3] text-white hover:bg-[#0077ed] hover:shadow-md hover:shadow-[#0071e3]/25"}`
            }>

            {added ? "✓ Eklendi" : "Sepete Ekle"}
          </button>
        </div>
      </div>
    </div>);

}

export default function Accessories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240;
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
              aria-label="İleri">

              <svg className="w-4 h-4" fill="none" stroke="#1d1d1f" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>

          {accessories.map((accessory) =>
          <AccessoryCard key={accessory.id} accessory={accessory} />
          )}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a href="#" className="text-[#0066cc] hover:underline text-[17px] font-medium tracking-wide">
            Tüm aksesuarları gör &rsaquo;
          </a>
        </div>
      </div>
    </section>);

}