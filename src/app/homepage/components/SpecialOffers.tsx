"use client";
import React from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";

const offers = [
{
  id: "education",
  title: "Egitim",
  description: "Ogrenci ve egitimciler icin ozel fiyatlar.",
  link: "Egitim Magazasi\'na git",
  bgColor: "bg-[#f5f5f7]",
  textColor: "text-[#1d1d1f]",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_127d11d59-1769067180140.png"
},
{
  id: "trade-in",
  title: "LuminaTech Trade In",
  description: "Mevcut cihazini yeni bir LuminaTech urunune indirim olarak kullan.",
  link: "Cihazinin degerini ögren",
  bgColor: "bg-[#fbfbfd]",
  textColor: "text-[#1d1d1f]",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19512bdb6-1768740053729.png"
},
{
  id: "financing",
  title: "Ozel Finansman",
  description: "12 aya varan taksit secenekleri. Faizsiz.",
  link: "Secenekleri incele",
  bgColor: "bg-[#f5f5f7]",
  textColor: "text-[#1d1d1f]",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13a1318e6-1773455972299.png"
}];


const services = [
{
  icon:
  <svg className="w-11 h-11" viewBox="0 0 43 43" fill="none">
        <path d="M21.5 7.5V35.5M7.5 21.5H35.5" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>,

  title: "Kisisellestirilmis urunler",
  description: "Kazimayla kendine ozgu hale getir. Ucretsiz."
},
{
  icon:
  <svg className="w-11 h-11" viewBox="0 0 43 43" fill="none">
        <rect x="8" y="12" width="27" height="19" rx="2" stroke="#1d1d1f" strokeWidth="1.5" />
        <path d="M8 17h27" stroke="#1d1d1f" strokeWidth="1.5" />
      </svg>,

  title: "Ozel finansman secenekleri",
  description: "12 aya varan taksitlerle odeme yap."
},
{
  icon:
  <svg className="w-11 h-11" viewBox="0 0 43 43" fill="none">
        <rect x="6" y="10" width="31" height="23" rx="2" stroke="#1d1d1f" strokeWidth="1.5" />
        <circle cx="21.5" cy="21.5" r="6" stroke="#1d1d1f" strokeWidth="1.5" />
      </svg>,

  title: "Ucretsiz kargo",
  description: "Tum siparislerde ucretsiz teslimat."
},
{
  icon:
  <svg className="w-11 h-11" viewBox="0 0 43 43" fill="none">
        <path d="M12 22l6 6 13-13" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21.5" cy="21.5" r="14" stroke="#1d1d1f" strokeWidth="1.5" />
      </svg>,

  title: "30 gun iade",
  description: "Kosulsuz iade garantisi."
}];


export default function SpecialOffers() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-display text-[28px] md:text-[36px] font-black text-[#1d1d1f] mb-2 tracking-tight">
            LuminaTech Mağazası.
          </h2>
          <p className="text-[18px] text-[#6e6e73] font-light">
            Alışverişi kolaylaştıran yöntemler.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {offers?.map((offer) =>
          <div
            key={offer?.id}
            className={`${offer?.bgColor} rounded-2xl overflow-hidden`}>

              <div className="p-6 md:p-8">
                <h3 className={`font-display text-[20px] font-bold ${offer?.textColor} mb-2 tracking-tight`}>
                  {offer?.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] mb-3 leading-relaxed font-light">
                  {offer?.description}
                </p>
                <Link
                href="#"
                className="text-[#0066cc] hover:underline text-[13px] font-medium tracking-wide">

                  {offer?.link} &rsaquo;
                </Link>
              </div>
              <div className="px-6 pb-6">
                <AppImage
                src={offer?.image}
                alt={offer?.title}
                width={400}
                height={250}
                className="w-full h-40 object-cover rounded-xl" />

              </div>
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services?.map((service) =>
          <div
            key={service?.title}
            className="bg-[#fbfbfd] rounded-2xl p-6 text-center">

              <div className="flex justify-center mb-4">
                {service?.icon}
              </div>
              <h4 className="text-[13px] font-semibold text-[#1d1d1f] mb-1 tracking-wide">
                {service?.title}
              </h4>
              <p className="text-[11px] text-[#6e6e73] font-light leading-relaxed">{service?.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}