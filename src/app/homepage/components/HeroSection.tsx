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
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-1">
            Aura Wristband Pro
          </h1>
          <p className="text-[21px] md:text-[28px] text-[#1d1d1f] font-normal mb-3">
            Titanium. Daha guclü. Daha akilli.
          </p>
          <p className="text-[17px] text-[#1d1d1f] mb-4">
            1.299 TL&apos;den baslayan fiyatlarla
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link 
              href="#products" 
              className="text-[#0066cc] hover:underline text-[17px]"
            >
              Daha fazla bilgi &gt;
            </Link>
            <Link 
              href="#products" 
              className="text-[#0066cc] hover:underline text-[17px]"
            >
              Satin al &gt;
            </Link>
          </div>
          <div className="max-w-3xl mx-auto">
            <AppImage
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200"
              alt="Aura Wristband Pro"
              width={980}
              height={550}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Secondary Hero - Sonic Buds Pro */}
      <div className="bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-4 py-14 md:py-20 text-center">
          <h2 className="text-[40px] md:text-[56px] font-semibold tracking-tight text-white leading-tight mb-1">
            Sonic Buds Pro
          </h2>
          <p className="text-[21px] md:text-[28px] text-white font-normal mb-3">
            Adaptif Ses. Kisisellestirilmis Uzaysal Ses.
          </p>
          <p className="text-[17px] text-[#86868b] mb-4">
            899 TL
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link 
              href="#products" 
              className="text-[#2997ff] hover:underline text-[17px]"
            >
              Daha fazla bilgi &gt;
            </Link>
            <Link 
              href="#products" 
              className="text-[#2997ff] hover:underline text-[17px]"
            >
              Satin al &gt;
            </Link>
          </div>
          <div className="max-w-2xl mx-auto">
            <AppImage
              src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=1000"
              alt="Sonic Buds Pro"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Two Column Heroes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {/* Nova Speaker Max */}
        <div className="bg-[#f5f5f7] rounded-2xl overflow-hidden">
          <div className="px-6 py-10 md:py-14 text-center">
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-1">
              Nova Speaker Max
            </h2>
            <p className="text-[17px] md:text-[21px] text-[#1d1d1f] mb-3">
              Buyuleyici uzaysal ses.
            </p>
            <div className="flex items-center justify-center gap-5 mb-6">
              <Link 
                href="#products" 
                className="text-[#0066cc] hover:underline text-[14px]"
              >
                Daha fazla bilgi &gt;
              </Link>
              <Link 
                href="#products" 
                className="text-[#0066cc] hover:underline text-[14px]"
              >
                Satin al &gt;
              </Link>
            </div>
            <div className="max-w-sm mx-auto">
              <AppImage
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600"
                alt="Nova Speaker Max"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Aura Wristband SE */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#d2d2d7]">
          <div className="px-6 py-10 md:py-14 text-center">
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-1">
              Aura Wristband SE
            </h2>
            <p className="text-[17px] md:text-[21px] text-[#1d1d1f] mb-3">
              Yepyeni. Herkesin erisebilecegi fiyatta.
            </p>
            <p className="text-[14px] text-[#6e6e73] mb-3">
              699 TL&apos;den baslayan fiyatlarla
            </p>
            <div className="flex items-center justify-center gap-5 mb-6">
              <Link 
                href="#products" 
                className="text-[#0066cc] hover:underline text-[14px]"
              >
                Daha fazla bilgi &gt;
              </Link>
              <Link 
                href="#products" 
                className="text-[#0066cc] hover:underline text-[14px]"
              >
                Satin al &gt;
              </Link>
            </div>
            <div className="max-w-sm mx-auto">
              <AppImage
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600"
                alt="Aura Wristband SE"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
