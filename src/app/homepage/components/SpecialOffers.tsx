"use client";
import React from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";

const offers = [
  {
    id: "education",
    title: "Egitim",
    description: "Ogrenci ve egitimciler icin ozel fiyatlar.",
    link: "Egitim Magazasi'na git",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-[#1d1d1f]",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    id: "trade-in",
    title: "LuminaTech Trade In",
    description: "Mevcut cihazini yeni bir LuminaTech urunune indirim olarak kullan.",
    link: "Cihazinin degerini ögren",
    bgColor: "bg-[#fbfbfd]",
    textColor: "text-[#1d1d1f]",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800",
  },
  {
    id: "financing",
    title: "Ozel Finansman",
    description: "12 aya varan taksit secenekleri. Faizsiz.",
    link: "Secenekleri incele",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-[#1d1d1f]",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
  },
];

const services = [
  {
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 43 43" fill="none">
        <path d="M21.5 7.5V35.5M7.5 21.5H35.5" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Kisisellestirilmis urunler",
    description: "Kazimayla kendine ozgu hale getir. Ucretsiz.",
  },
  {
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 43 43" fill="none">
        <rect x="8" y="12" width="27" height="19" rx="2" stroke="#1d1d1f" strokeWidth="1.5"/>
        <path d="M8 17h27" stroke="#1d1d1f" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Ozel finansman secenekleri",
    description: "12 aya varan taksitlerle odeme yap.",
  },
  {
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 43 43" fill="none">
        <rect x="6" y="10" width="31" height="23" rx="2" stroke="#1d1d1f" strokeWidth="1.5"/>
        <circle cx="21.5" cy="21.5" r="6" stroke="#1d1d1f" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Ucretsiz kargo",
    description: "Tum siparislerde ucretsiz teslimat.",
  },
  {
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 43 43" fill="none">
        <path d="M12 22l6 6 13-13" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21.5" cy="21.5" r="14" stroke="#1d1d1f" strokeWidth="1.5"/>
      </svg>
    ),
    title: "30 gun iade",
    description: "Kosulsuz iade garantisi.",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-1">
            LuminaTech Magazasi.
          </h2>
          <p className="text-[21px] text-[#6e6e73]">
            Alisverisi kolaylastiran yontemler.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.bgColor} rounded-2xl overflow-hidden`}
            >
              <div className="p-6 md:p-8">
                <h3 className={`text-[24px] font-semibold ${offer.textColor} mb-2`}>
                  {offer.title}
                </h3>
                <p className="text-[14px] text-[#6e6e73] mb-3 leading-relaxed">
                  {offer.description}
                </p>
                <Link
                  href="#"
                  className="text-[#0066cc] hover:underline text-[14px]"
                >
                  {offer.link} &gt;
                </Link>
              </div>
              <div className="px-6 pb-6">
                <AppImage
                  src={offer.image}
                  alt={offer.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#fbfbfd] rounded-2xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-1">
                {service.title}
              </h4>
              <p className="text-[12px] text-[#6e6e73]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
