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
        <div className="w-24 h-24 rounded-full bg-[#f5f5f7] flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        <h2 className="font-display text-[28px] md:text-[34px] font-black text-[#1d1d1f] mb-3 tracking-tight">
          Sepetiniz Boş
        </h2>
        <p className="text-[#6e6e73] text-[15px] mb-8 max-w-sm font-light leading-relaxed">
          Henüz sepetinize ürün eklemediniz. Koleksiyonumuzu keşfedin!
        </p>
        <Link
          href="/homepage"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0071e3] text-white text-[14px] font-semibold tracking-wide hover:bg-[#0077ed] hover:shadow-lg hover:shadow-[#0071e3]/30 active:scale-95 transition-all duration-300"
        >
          <Icon name="ArrowLeftIcon" size={16} />
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-6 pt-28 pb-20">
      {/* Page Header */}
      <div className="mb-10">
        <Link
          href="/homepage"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#6e6e73] hover:text-[#0071e3] transition-colors duration-200 mb-6 font-medium"
        >
          <Icon name="ArrowLeftIcon" size={14} />
          Alışverişe Devam Et
        </Link>
        <h1 className="font-display text-[32px] md:text-[40px] font-black text-[#1d1d1f] tracking-tight">
          Sepetim{" "}
          <span className="text-[#6e6e73] font-light text-[24px] md:text-[28px]">
            ({totalItems} ürün)
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#f5f5f7] rounded-2xl p-5 flex gap-5 items-center group hover:bg-[#ebebf0] transition-colors duration-200"
            >
              {/* Image */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 bg-white flex items-center justify-center">
                <AppImage
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-[15px] font-bold text-[#1d1d1f] truncate tracking-tight">
                  {item.name}
                </h3>
                <p className="text-[#0071e3] font-semibold text-[15px] mt-0.5">
                  ₺{item.price.toLocaleString("tr-TR")}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-1 shrink-0 bg-white rounded-full px-1 py-1 shadow-sm">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] transition-all duration-200"
                  aria-label="Azalt"
                >
                  <Icon name="MinusIcon" size={13} />
                </button>
                <span className="font-semibold text-[#1d1d1f] w-7 text-center text-[14px]">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] transition-all duration-200"
                  aria-label="Artır"
                >
                  <Icon name="PlusIcon" size={13} />
                </button>
              </div>

              {/* Item Total */}
              <div className="text-right shrink-0 hidden md:block">
                <p className="font-display font-black text-[#1d1d1f] text-[15px]">
                  ₺{(item.price * item.quantity).toLocaleString("tr-TR")}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#86868b] hover:text-[#ff3b30] hover:bg-[#ff3b30]/10 transition-all duration-200 shrink-0"
                aria-label="Kaldır"
              >
                <Icon name="TrashIcon" size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-[#f5f5f7] rounded-3xl p-7 sticky top-24">
            <h2 className="font-display text-[18px] font-black text-[#1d1d1f] mb-6 tracking-tight">
              Sipariş Özeti
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-[14px]">
                <span className="text-[#6e6e73] font-light">
                  Ara Toplam ({totalItems} ürün)
                </span>
                <span className="text-[#1d1d1f] font-medium">
                  ₺{totalPrice.toLocaleString("tr-TR")}
                </span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-[#6e6e73] font-light">Kargo</span>
                <span
                  className={
                    shipping === 0
                      ? "text-[#34c759] font-semibold"
                      : "text-[#1d1d1f] font-medium"
                  }
                >
                  {shipping === 0
                    ? "Ücretsiz"
                    : `₺${shipping.toFixed(2).replace(".", ",")}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-[11px] text-[#6e6e73] bg-white rounded-xl px-3 py-2 font-light">
                  ₺500 üzeri siparişlerde ücretsiz kargo!
                </p>
              )}
            </div>

            <div className="flex justify-between items-center py-4 border-t border-[#d2d2d7] mb-6">
              <span className="font-display font-black text-[#1d1d1f] text-[15px]">
                Toplam
              </span>
              <span className="font-display text-[22px] font-black text-[#1d1d1f]">
                ₺{grandTotal.toLocaleString("tr-TR", { minimumFractionDigits: 0 })}
              </span>
            </div>

            {/* Premium CTA Button */}
            <Link
              href="/checkout"
              className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0071e3] text-white text-[15px] font-semibold tracking-wide hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/30 active:scale-[0.98] transition-all duration-300"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative z-10">Ödemeye Geç</span>
              <Icon
                name="ArrowRightIcon"
                size={16}
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>

            {/* Trust badges */}
            <div className="mt-5 space-y-2.5">
              {[
                { icon: "ShieldCheckIcon", text: "256-bit SSL Güvenli Ödeme" },
                { icon: "TruckIcon", text: "1-3 İş Günü Teslimat" },
                { icon: "ArrowPathIcon", text: "30 Gün Ücretsiz İade" },
              ].map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-2.5 text-[12px] text-[#6e6e73]"
                >
                  <Icon
                    name={b.icon as "ShieldCheckIcon"}
                    size={14}
                    className="text-[#0071e3] shrink-0"
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