"use client";
import React from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";

export default function HeroSection() {
  return (
    <section className="relative pt-20">
      {/* Main Hero - Featured Product */}
      <div className="bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
          <p className="text-primary font-display text-sm md:text-base tracking-wide mb-2 animate-fade-in-down">
            Yepyeni
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-4 animate-fade-in">
            Aura Wristband
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 animate-fade-in delay-100">
            Sağlık takibinde yeni nesil. Hayatını değiştir.
          </p>
          <div className="flex items-center justify-center gap-6 mb-10 animate-fade-in delay-200">
            <Link 
              href="#products" 
              className="text-primary hover:text-accent transition-colors font-medium text-lg flex items-center gap-1 group"
            >
              Daha Fazla Bilgi
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <Link 
              href="#products" 
              className="text-primary hover:text-accent transition-colors font-medium text-lg flex items-center gap-1 group"
            >
              Satın Al
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto animate-fade-in-up delay-300">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1f4ead178-1770476588865.png"
              alt="Aura Wristband akıllı saat"
              width={1200}
              height={600}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Secondary Hero - Two Products Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Sonic Buds */}
        <div className="bg-background relative overflow-hidden">
          <div className="px-4 md:px-8 py-16 md:py-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-2">
              Sonic Buds
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-4">
              Sese dal. Dünyadan kopma.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <Link 
                href="#products" 
                className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-1 group"
              >
                Daha Fazla Bilgi
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
              <Link 
                href="#products" 
                className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-1 group"
              >
                Satın Al
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
            <div className="relative max-w-md mx-auto">
              <AppImage
                src="https://images.unsplash.com/photo-1675361771537-e099ff32b305"
                alt="Sonic Buds kablosuz kulaklık"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Nova Speaker */}
        <div className="bg-muted relative overflow-hidden">
          <div className="px-4 md:px-8 py-16 md:py-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-2">
              Nova Speaker
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-4">
              360 derece ses. Sınırsız parti.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <Link 
                href="#products" 
                className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-1 group"
              >
                Daha Fazla Bilgi
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
              <Link 
                href="#products" 
                className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-1 group"
              >
                Satın Al
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
            <div className="relative max-w-md mx-auto">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1771387fe-1767285681665.png"
                alt="Nova Speaker bluetooth hoparlör"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
