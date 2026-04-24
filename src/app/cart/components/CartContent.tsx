"use client";
import React from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

export default function CartContent() {
  const { items, updateQuantity, removeItem, totalItems, totalPrice } =
    useCart();

  const shipping = totalPrice >= 500 ? 0 : 49.9;
  const grandTotal = totalPrice + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center">
        <div className="text-8xl mb-6 animate-float">🛒</div>
        <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-3">
          Sepetiniz Boş
        </h2>
        <p className="text-muted-foreground text-base mb-8 max-w-sm">
          Henüz sepetinize ürün eklemediniz. Koleksiyonumuzu keşfedin!
        </p>
        <Link
          href="/homepage"
          className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase text-primary-foreground bg-primary hover:shadow-neon-cyan hover:scale-105 transition-all duration-300"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          <Icon name="ArrowLeftIcon" size={16} className="relative z-10" />
          <span className="relative z-10">Alışverişe Başla</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-28 pb-16">
      {/* Page Header */}
      <div className="mb-10">
        <Link
          href="/homepage"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mb-6 font-medium"
        >
          <Icon name="ArrowLeftIcon" size={16} />
          Alışverişe Devam Et
        </Link>
        <h1 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tight">
          Sepetim{" "}
          <span className="neon-text-cyan">({totalItems} Ürün)</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-5 flex gap-5 items-center group hover:neon-border-cyan transition-all duration-300 animate-fade-in-up"
            >
              {/* Image */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0">
                <AppImage
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base font-bold text-foreground truncate">
                  {item.name}
                </h3>
                <p className="text-primary font-display font-black text-lg mt-1">
                  ₺{item.price.toLocaleString("tr-TR")}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full glass-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                  aria-label="Azalt"
                >
                  <Icon name="MinusIcon" size={14} />
                </button>
                <span className="font-display font-bold text-foreground w-8 text-center text-sm">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full glass-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                  aria-label="Artır"
                >
                  <Icon name="PlusIcon" size={14} />
                </button>
              </div>

              {/* Item Total */}
              <div className="text-right shrink-0 hidden md:block">
                <p className="font-display font-black text-foreground">
                  ₺{(item.price * item.quantity).toLocaleString("tr-TR")}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-red-400 hover:bg-red-400/10 transition-all duration-300 shrink-0"
                aria-label="Kaldır"
              >
                <Icon name="TrashIcon" size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass-card neon-border-cyan rounded-2xl p-6 sticky top-24">
            <h2 className="font-display text-lg font-bold text-foreground mb-6 pb-4 border-b border-border">
              Sipariş Özeti
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Ara Toplam ({totalItems} ürün)
                </span>
                <span className="text-foreground font-medium">
                  ₺{totalPrice.toLocaleString("tr-TR")}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Kargo</span>
                <span
                  className={
                    shipping === 0
                      ? "text-green-400 font-medium" :"text-foreground font-medium"
                  }
                >
                  {shipping === 0
                    ? "Ücretsiz"
                    : `₺${shipping.toFixed(2).replace(".", ",")}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-[11px] text-muted-foreground">
                  ₺500 üzeri siparişlerde ücretsiz kargo!
                </p>
              )}
            </div>

            <div className="flex justify-between items-center py-4 border-t border-border mb-6">
              <span className="font-display font-bold text-foreground">
                Toplam
              </span>
              <span className="font-display text-xl font-black neon-text-cyan">
                ₺{grandTotal.toLocaleString("tr-TR", { minimumFractionDigits: 0 })}
              </span>
            </div>

            <Link
              href="/checkout"
              className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase text-primary-foreground bg-primary hover:shadow-neon-cyan hover:scale-[1.02] transition-all duration-300"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <span className="relative z-10">Ödemeye Geç</span>
              <Icon
                name="ArrowRightIcon"
                size={16}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </Link>

            {/* Trust badges */}
            <div className="mt-4 space-y-2">
              {[
                { icon: "ShieldCheckIcon", text: "256-bit SSL Güvenli Ödeme" },
                { icon: "TruckIcon", text: "1-3 İş Günü Teslimat" },
                { icon: "ArrowPathIcon", text: "30 Gün Ücretsiz İade" },
              ].map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <Icon
                    name={b.icon as "ShieldCheckIcon"}
                    size={14}
                    className="text-primary shrink-0"
                  />
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}