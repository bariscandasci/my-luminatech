import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.18) 50%, rgba(0,245,255,0.1) 100%)",
            border: "1px solid rgba(0,212,255,0.2)",
          }}
        >
          {/* Background blobs */}
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #00d4ff, transparent 70%)",
              filter: "blur(50px)",
              transform: "translate(-30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #7c3aed, transparent 70%)",
              filter: "blur(50px)",
              transform: "translate(30%, 30%)",
            }}
          />

          {/* Shine sweep */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
            }}
          />

          <div className="relative z-10">
            <span className="inline-block text-xs font-display font-bold text-primary tracking-widest uppercase mb-4 glass-card-bright px-4 py-2 rounded-full">
              Sınırlı Stok
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
              Bugün Sipariş Ver,{" "}
              <span className="neon-text-cyan">Yarın Kapında!</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light mb-8 max-w-xl mx-auto">
              Türkiye geneli ücretsiz kargo, 30 gün iade garantisi. Hesap
              açmadan, saniyeler içinde sipariş ver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase text-primary-foreground bg-primary hover:shadow-neon-cyan hover:scale-105 transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative z-10">Alışverişe Başla</span>
                <Icon name="ArrowRightIcon" size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/cart"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase glass-card border border-border hover:border-primary/30 text-foreground hover:text-primary transition-all duration-300"
              >
                <Icon name="ShoppingCartIcon" size={16} />
                Sepete Git
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { icon: "TruckIcon", label: "Ücretsiz Kargo" },
                { icon: "ArrowPathIcon", label: "30 Gün İade" },
                { icon: "ShieldCheckIcon", label: "2 Yıl Garanti" },
                { icon: "BoltIcon", label: "Hızlı Teslimat" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Icon
                    name={b.icon as "TruckIcon"}
                    size={16}
                    className="text-primary"
                  />
                  <span className="text-xs font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}