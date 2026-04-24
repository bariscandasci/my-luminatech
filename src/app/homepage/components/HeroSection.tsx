"use client";
import React, { useEffect, useRef } from "react";

import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay pt-20">
      {/* Atmospheric background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          ref={blobRef1}
          className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-20 animate-pulse-glow transition-transform duration-700"
          style={{
            background:
            "radial-gradient(circle, #00d4ff 0%, #7c3aed 50%, transparent 70%)",
            filter: "blur(80px)"
          }} />

        <div
          ref={blobRef2}
          className="absolute bottom-[-15%] left-[-10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full opacity-15 transition-transform duration-700"
          style={{
            background:
            "radial-gradient(circle, #7c3aed 0%, #00f5ff 50%, transparent 70%)",
            filter: "blur(100px)",
            animationDelay: "1.5s"
          }} />

        {/* Grid lines */}
        <div className="absolute inset-0 hidden md:flex justify-between px-12 max-w-7xl mx-auto left-0 right-0">
          <div className="w-px h-full bg-white/[0.03]" />
          <div className="w-px h-full bg-white/[0.03]" />
          <div className="w-px h-full bg-white/[0.03]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh] py-12">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 glass-card-bright px-4 py-2 rounded-full mb-8 w-fit animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-display font-semibold text-primary tracking-widest uppercase">
                Gençlik Enerjisi Seninle!
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-in-up">
              <span className="text-foreground">Sınırlarını</span>
              <br />
              <span className="neon-text-cyan">Lumina Tech</span>
              <br />
              <span className="text-foreground">ile Zorla!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-md animate-fade-in-up delay-200">
              Akıllı saatler, kablosuz kulaklıklar ve hoparlörlerle geleceği
              bugün yaşa. Teknoloji artık senin diline konuşuyor.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="#products"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase text-primary-foreground bg-primary transition-all duration-300 hover:shadow-neon-cyan hover:scale-105">

                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative z-10">Enerjini Keşfet</span>
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              </a>
              <a
                href="#quiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase text-primary glass-card-bright neon-border-cyan transition-all duration-300 hover:bg-primary/10 hover:scale-105">

                <Icon name="SparklesIcon" size={16} />
                Gadget Bul
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border animate-fade-in-up delay-400">
              {[
              { value: "50K+", label: "Mutlu Müşteri" },
              { value: "4.9★", label: "Ortalama Puan" },
              { value: "3", label: "Ürün Serisi" }].
              map((stat) =>
              <div key={stat.label} className="text-center">
                  <div className="font-display text-xl md:text-2xl font-black text-primary">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Rotating badge */}
            <div className="absolute top-0 right-0 md:right-8 z-20 hidden md:block">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg
                  className="animate-rotate-slow w-full h-full"
                  viewBox="0 0 100 100">

                  <path
                    id="heroCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent" />

                  <text
                    fontSize="9"
                    fontFamily="var(--font-orbitron)"
                    fontWeight="600"
                    letterSpacing="2px"
                    fill="#00d4ff">

                    <textPath href="#heroCirclePath" startOffset="0%">
                      LUMINA TECH • GENÇLİK ENERJİSİ •
                    </textPath>
                  </text>
                </svg>
                <span className="absolute text-primary text-lg font-display font-black">
                  ⚡
                </span>
              </div>
            </div>

            {/* Main product image container - arch shape */}
            <div className="relative w-full max-w-[380px] md:max-w-[460px] animate-fade-in delay-200">
              <div
                className="relative overflow-hidden shadow-neon-cyan"
                style={{ borderRadius: "10rem 10rem 1.5rem 1.5rem" }}>

                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1f4ead178-1770476588865.png"
                  alt="Futuristic smartwatch with glowing cyan display on dark background, close-up product shot"
                  width={460}
                  height={560}
                  priority
                  className="w-full object-cover"
                  style={{ height: "520px" }} />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {/* Bottom product label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card-bright px-4 py-3 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-display text-xs font-bold text-primary tracking-wider uppercase">
                          En Çok Satan
                        </p>
                        <p className="font-display text-sm font-black text-foreground mt-0.5">
                          Aura Wristband
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-lg font-black text-primary">
                          ₺1.299
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          Ücretsiz Kargo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating product cards */}
              <div className="absolute -left-6 top-1/3 glass-card neon-border-purple px-3 py-2 rounded-xl hidden md:block animate-float">
                <p className="text-[10px] font-display font-bold text-secondary uppercase tracking-wider">
                  Sonic Buds
                </p>
                <p className="text-sm font-black text-foreground font-display">
                  ₺899
                </p>
              </div>
              <div
                className="absolute -right-4 top-2/3 glass-card neon-border-cyan px-3 py-2 rounded-xl hidden md:block animate-float"
                style={{ animationDelay: "2s" }}>

                <p className="text-[10px] font-display font-bold text-primary uppercase tracking-wider">
                  Nova Speaker
                </p>
                <p className="text-sm font-black text-foreground font-display">
                  ₺1.599
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700 z-10">
        <span className="text-[10px] font-display tracking-widest uppercase text-muted-foreground">
          Keşfet
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>);

}