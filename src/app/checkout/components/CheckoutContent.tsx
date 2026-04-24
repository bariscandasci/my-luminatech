"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvc: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  district: "",
  postalCode: "",
  cardNumber: "",
  cardName: "",
  cardExpiry: "",
  cardCvc: "",
};

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  maxLength,
}: {
  label: string;
  name: keyof FormData;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-display font-bold text-muted-foreground uppercase tracking-widest">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/50 focus:bg-card"
      />
    </div>
  );
}

export default function CheckoutContent() {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const shipping = totalPrice >= 500 ? 0 : 49.9;
  const grandTotal = totalPrice + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formatted = value;

    if (name === "cardNumber") {
      formatted = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }
    if (name === "cardExpiry") {
      formatted = value
        .replace(/\D/g, "")
        .slice(0, 4)
        .replace(/^(\d{2})(\d)/, "$1/$2");
    }
    if (name === "cardCvc") {
      formatted = value.replace(/\D/g, "").slice(0, 3);
    }
    if (name === "phone") {
      formatted = value.replace(/\D/g, "").slice(0, 11);
    }

    setForm((prev) => ({ ...prev, [name]: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      clearCart();
    }, 1800);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="font-display text-2xl font-black text-foreground mb-3">
          Sepetiniz Boş
        </h2>
        <p className="text-muted-foreground mb-8">
          Ödeme yapabilmek için sepetinize ürün ekleyin.
        </p>
        <Link
          href="/homepage"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase text-primary-foreground bg-primary hover:shadow-neon-cyan hover:scale-105 transition-all duration-300"
        >
          <Icon name="ArrowLeftIcon" size={16} />
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-8 animate-fade-in"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
            boxShadow: "0 0 40px rgba(0,212,255,0.4)",
          }}
        >
          <Icon name="CheckIcon" size={40} className="text-white" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3 animate-fade-in-up">
          Siparişin <span className="neon-text-cyan">Alındı!</span>
        </h2>
        <p className="text-muted-foreground text-base mb-2 animate-fade-in-up delay-100">
          Sipariş onayı <strong className="text-foreground">{form.email}</strong> adresine gönderildi.
        </p>
        <p className="text-muted-foreground text-sm mb-8 animate-fade-in-up delay-200">
          1-3 iş günü içinde kapınızda olacak. 🚀
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <Link
            href="/homepage"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase text-primary-foreground bg-primary hover:shadow-neon-cyan hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <span className="relative z-10">Alışverişe Devam Et</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-28 pb-16">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mb-6 font-medium"
        >
          <Icon name="ArrowLeftIcon" size={16} />
          Sepete Geri Dön
        </Link>
        <h1 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tight">
          Hızlı <span className="neon-text-cyan">Ödeme</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          Hesap açmadan, misafir olarak sipariş ver.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-base font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xs font-display">
                  1
                </span>
                İletişim Bilgileri
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Ad"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Adınız"
                  required
                />
                <InputField
                  label="Soyad"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Soyadınız"
                  required
                />
                <InputField
                  label="E-posta"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  required
                />
                <InputField
                  label="Telefon"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="05XX XXX XX XX"
                  required
                  maxLength={11}
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-base font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xs font-display">
                  2
                </span>
                Teslimat Adresi
              </h2>
              <div className="space-y-4">
                <InputField
                  label="Adres"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Mahalle, sokak, bina no, daire no"
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <InputField
                    label="İl"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="İstanbul"
                    required
                  />
                  <InputField
                    label="İlçe"
                    name="district"
                    value={form.district}
                    onChange={handleChange}
                    placeholder="Kadıköy"
                    required
                  />
                  <InputField
                    label="Posta Kodu"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    placeholder="34710"
                    maxLength={5}
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-base font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xs font-display">
                  3
                </span>
                Ödeme Bilgileri
              </h2>

              {/* Card visual */}
              <div
                className="relative rounded-2xl p-6 mb-6 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.2) 100%)",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-80" />
                  <span className="text-xs font-display text-muted-foreground uppercase tracking-widest">
                    Kredi / Banka Kartı
                  </span>
                </div>
                <p className="font-display text-lg font-bold text-foreground tracking-[0.2em] mb-4">
                  {form.cardNumber || "•••• •••• •••• ••••"}
                </p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                      Kart Sahibi
                    </p>
                    <p className="text-sm font-display font-bold text-foreground">
                      {form.cardName || "AD SOYAD"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                      Son Kullanma
                    </p>
                    <p className="text-sm font-display font-bold text-foreground">
                      {form.cardExpiry || "MM/YY"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <InputField
                  label="Kart Numarası"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  maxLength={19}
                />
                <InputField
                  label="Kart Üzerindeki İsim"
                  name="cardName"
                  value={form.cardName}
                  onChange={handleChange}
                  placeholder="AD SOYAD"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Son Kullanma Tarihi"
                    name="cardExpiry"
                    value={form.cardExpiry}
                    onChange={handleChange}
                    placeholder="AA/YY"
                    required
                    maxLength={5}
                  />
                  <InputField
                    label="CVV"
                    name="cardCvc"
                    type="password"
                    value={form.cardCvc}
                    onChange={handleChange}
                    placeholder="•••"
                    required
                    maxLength={3}
                  />
                </div>
              </div>

              {/* SSL Badge */}
              <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                <Icon
                  name="LockClosedIcon"
                  size={14}
                  className="text-primary"
                />
                <span>256-bit SSL ile şifrelenmiş güvenli ödeme</span>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card neon-border-cyan rounded-2xl p-6 sticky top-24">
              <h2 className="font-display text-base font-bold text-foreground mb-6 pb-4 border-b border-border">
                Sipariş Özeti
              </h2>

              {/* Items */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <AppImage
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-display font-bold text-foreground truncate">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        x{item.quantity}
                      </p>
                    </div>
                    <p className="text-xs font-display font-bold text-foreground shrink-0">
                      ₺{(item.price * item.quantity).toLocaleString("tr-TR")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-4 pb-4 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ara Toplam</span>
                  <span className="text-foreground">
                    ₺{totalPrice.toLocaleString("tr-TR")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Kargo</span>
                  <span
                    className={
                      shipping === 0 ? "text-green-400" : "text-foreground"
                    }
                  >
                    {shipping === 0
                      ? "Ücretsiz"
                      : `₺${shipping.toFixed(2).replace(".", ",")}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-display font-bold text-foreground">
                  Toplam
                </span>
                <span className="font-display text-xl font-black neon-text-cyan">
                  ₺{grandTotal.toLocaleString("tr-TR", { minimumFractionDigits: 0 })}
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                  loading
                    ? "bg-primary/60 text-primary-foreground cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:shadow-neon-cyan hover:scale-[1.02]"
                }`}
              >
                {!loading && (
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                )}
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    <span className="relative z-10">İşleniyor...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Siparişi Tamamla</span>
                    <Icon
                      name="CheckIcon"
                      size={16}
                      className="relative z-10"
                    />
                  </>
                )}
              </button>

              <p className="text-[11px] text-muted-foreground text-center mt-3">
                Siparişi tamamlayarak{" "}
                <span className="text-primary">Kullanım Şartları</span>&apos;nı
                kabul etmiş olursunuz.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}