"use client";
import React from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";

export default function HeroSection() {
  return (
    <section className="pt-12">
      {/* Main Hero - Aura Wristband Pro */}
      <div className="bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-4 py-14 md:py-20 text-center">
          <h1 className="font-display text-[38px] md:text-[54px] lg:text-[62px] font-black tracking-tight text-[#1d1d1f] leading-[1.05] mb-2">
            Aura Wristband Pro
          </h1>
          <p className="text-[20px] md:text-[26px] text-[#1d1d1f] font-light tracking-wide mb-3">
            Titanium. Daha güçlü. Daha akıllı.
          </p>
          <p className="text-[15px] uppercase tracking-[0.12em] text-[#6e6e73] font-medium mb-5">
            1.299 TL&apos;den başlayan fiyatlarla
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link
              href="#products"
              className="text-[#0066cc] hover:underline text-[15px] font-medium tracking-wide">

              Daha fazla bilgi &rsaquo;
            </Link>
            <Link
              href="#products"
              className="text-[#0066cc] hover:underline text-[15px] font-medium tracking-wide">

              Satın al &rsaquo;
            </Link>
          </div>
          <div className="max-w-3xl mx-auto">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_11fdfb7de-1775103922127.png"
              alt="Aura Wristband Pro"
              width={980}
              height={550}
              priority
              className="w-full h-auto" />

          </div>
        </div>
      </div>

      {/* Secondary Hero - Sonic Buds Pro */}
      <div className="bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-4 py-14 md:py-20 text-center">
          <h2 className="font-display text-[38px] md:text-[54px] font-black tracking-tight text-white leading-[1.05] mb-2">
            Sonic Buds Pro
          </h2>
          <p className="text-[20px] md:text-[26px] text-white font-light tracking-wide mb-3">
            Adaptif Ses. Kişiselleştirilmiş Uzaysal Ses.
          </p>
          <p className="text-[15px] uppercase tracking-[0.12em] text-[#86868b] font-medium mb-5">
            899 TL
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link
              href="#products"
              className="text-[#2997ff] hover:underline text-[15px] font-medium tracking-wide">

              Daha fazla bilgi &rsaquo;
            </Link>
            <Link
              href="#products"
              className="text-[#2997ff] hover:underline text-[15px] font-medium tracking-wide">

              Satın al &rsaquo;
            </Link>
          </div>
          <div className="max-w-2xl mx-auto">
            <AppImage
              src="https://images.unsplash.com/photo-1593699086688-ddcfdfd6f006"
              alt="Sonic Buds Pro"
              width={800}
              height={450}
              className="w-full h-auto" />

          </div>
        </div>
      </div>

      {/* Two Column Heroes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {/* Nova Speaker Max */}
        <div className="bg-[#f5f5f7] rounded-2xl overflow-hidden">
          <div className="px-6 py-10 md:py-14 text-center">
            <h2 className="font-display text-[28px] md:text-[36px] font-black tracking-tight text-[#1d1d1f] leading-[1.1] mb-2">
              Nova Speaker Max
            </h2>
            <p className="text-[15px] md:text-[18px] text-[#1d1d1f] font-light tracking-wide mb-4">
              Büyüleyici uzaysal ses.
            </p>
            <div className="flex items-center justify-center gap-5 mb-6">
              <Link
                href="#products"
                className="text-[#0066cc] hover:underline text-[13px] font-medium tracking-wide">

                Daha fazla bilgi &rsaquo;
              </Link>
              <Link
                href="#products"
                className="text-[#0066cc] hover:underline text-[13px] font-medium tracking-wide">

                Satın al &rsaquo;
              </Link>
            </div>
            <div className="max-w-sm mx-auto">
              <AppImage
                src="https://images.unsplash.com/photo-1624089735327-ae3727e64a09"
                alt="Nova Speaker Max"
                width={400}
                height={300}
                className="w-full h-auto" />

            </div>
          </div>
        </div>

        {/* Aura Wristband SE */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#d2d2d7]">
          <div className="px-6 py-10 md:py-14 text-center">
            <h2 className="font-display text-[28px] md:text-[36px] font-black tracking-tight text-[#1d1d1f] leading-[1.1] mb-2">
              Aura Wristband SE
            </h2>
            <p className="text-[15px] md:text-[18px] text-[#1d1d1f] font-light tracking-wide mb-2">
              Yepyeni. Herkesin erişebileceği fiyatta.
            </p>
            <p className="text-[13px] uppercase tracking-[0.1em] text-[#6e6e73] font-medium mb-4">
              699 TL&apos;den başlayan fiyatlarla
            </p>
            <div className="flex items-center justify-center gap-5 mb-6">
              <Link
                href="#products"
                className="text-[#0066cc] hover:underline text-[13px] font-medium tracking-wide">

                Daha fazla bilgi &rsaquo;
              </Link>
              <Link
                href="#products"
                className="text-[#0066cc] hover:underline text-[13px] font-medium tracking-wide">

                Satın al &rsaquo;
              </Link>
            </div>
            <div className="max-w-sm mx-auto">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_11fdfb7de-1775103922127.png"
                alt="Aura Wristband SE"
                width={400}
                height={300}
                className="w-full h-auto" />

            </div>
          </div>
        </div>
      </div>
    </section>);

}