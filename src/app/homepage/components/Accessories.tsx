"use client";
import React, { useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { useCart } from "@/context/CartContext";

const accessories = [
{
  id: "laptop-sleeve-15",
  name: "Laptop Kılıfı 15\"",
  category: "Ultrabooklar",
  price: 349,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f991b1d7-1772956774754.png",
  alt: "Gri neopren laptop kılıfı 15 inç"
},
{
  id: "gaming-mouse-pro",
  name: "Gaming Mouse Pro RGB",
  category: "Oyuncu Laptopları",
  price: 899,
  image: "https://images.unsplash.com/photo-1616296425622-4560a2ad83de",
  alt: "RGB aydınlatmalı siyah oyuncu faresi"
},
{
  id: "gaming-headset-7-1",
  name: "Gaming Kulaklık 7.1",
  category: "Oyuncu Laptopları",
  price: 1299,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1edb20041-1765142390392.png",
  alt: "Siyah kırmızı oyuncu kulaklığı surround ses"
},
{
  id: "ebook-cover-origami",
  name: "E-Kitap Origami Kapak",
  category: "E-Kitap Okuyucular",
  price: 249,
  image: "https://images.unsplash.com/photo-1611650933823-97a2a1922b7e",
  alt: "Kahverengi deri e-kitap okuyucu kapağı"
},
{
  id: "smart-pen-refill",
  name: "Akıllı Kalem Uç Seti",
  category: "Akıllı Kalemler",
  price: 149,
  image: "https://images.unsplash.com/photo-1522317660659-ad7f20d164f7",
  alt: "Akıllı kalem yedek uç seti farklı boyutlar"
},
{
  id: "arduino-sensor-kit",
  name: "Arduino Sensör Paketi 37in1",
  category: "Arduino & Raspberry Pi",
  price: 599,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1827a79df-1765196172753.png",
  alt: "Arduino sensör modülleri seti elektronik bileşenler"
},
{
  id: "raspberry-pi-case",
  name: "Raspberry Pi Alüminyum Kasa",
  category: "Arduino & Raspberry Pi",
  price: 299,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_122a9ca81-1764876041422.png",
  alt: "Alüminyum Raspberry Pi koruyucu kasa"
},
{
  id: "stm32-programmer",
  name: "ST-Link V2 Programlayıcı",
  category: "STM32",
  price: 199,
  image: "https://images.unsplash.com/photo-1584795959714-86c7784f0d94",
  alt: "STM32 ST-Link V2 USB programlayıcı devre"
},
{
  id: "watch-band-sport",
  name: "Spor Kayış - Siyah",
  category: "Akıllı Saatler",
  price: 349,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2fdd95d-1772808745086.png",
  alt: "Siyah silikon spor akıllı saat kayışı"
},
{
  id: "anc-ear-cushion",
  name: "ANC Kulaklık Yedek Yastık",
  category: "Gürültü Engelleyici",
  price: 199,
  image: "https://images.unsplash.com/photo-1641563786213-185d68345426",
  alt: "Siyah kulaklık yedek kulak yastığı seti"
},
{
  id: "usb-c-cable-100w",
  name: "USB-C Kablo 100W 2m",
  category: "Tüm Ürünler",
  price: 149,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_164285590-1764700763047.png",
  alt: "Siyah USB-C hızlı şarj kablosu 2 metre"
},
{
  id: "ssd-usbc-hub",
  name: "USB-C Hub 7in1",
  category: "Harici SSD/HDD",
  price: 699,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b1b69da-1773347660020.png",
  alt: "Gümüş USB-C çoğaltıcı hub 7 port"
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
        <div className="w-full h-[160px] mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-white">
          <AppImage
            src={accessory.image}
            alt={accessory.alt}
            width={160}
            height={160}
            className="object-cover w-full h-full" />
        </div>
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
            "bg-[#0071e3] text-white hover:bg-[#0077ed] hover:shadow-md hover:shadow-[#0071e3]/25"}`}>
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
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-[28px] md:text-[36px] font-black text-[#1d1d1f] mb-1 tracking-tight">
              Aksesuarlar.
            </h2>
            <p className="text-[18px] text-[#6e6e73] font-light">
              LuminaTech ürünlerinle mükemmel uyum.
            </p>
          </div>
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
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {accessories.map((accessory) =>
          <AccessoryCard key={accessory.id} accessory={accessory} />
          )}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-[#0066cc] hover:underline text-[17px] font-medium tracking-wide">
            Tüm aksesuarları gör &rsaquo;
          </a>
        </div>
      </div>
    </section>);

}