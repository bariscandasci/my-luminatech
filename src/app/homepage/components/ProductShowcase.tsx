"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: "aura-wristband",
    name: "Aura Wristband",
    tagline: "Akıllı sağlık takibi",
    price: 1299,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1651406101815-50d85040feb2",
    colors: ["Gece Siyahı", "Okyanus Mavisi", "Gümüş"],
    isNew: true,
  },
  {
    id: "sonic-buds",
    name: "Sonic Buds",
    tagline: "Aktif gürültü engelleme",
    price: 899,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1675361771537-e099ff32b305",
    colors: ["Siyah", "Beyaz", "Mor"],
    isNew: true,
  },
  {
    id: "nova-speaker",
    name: "Nova Speaker",
    tagline: "360° surround ses",
    price: 1599,
    originalPrice: 2199,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1771387fe-1767285681665.png",
    colors: ["Karbon", "Titanyum"],
    isNew: false,
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-card rounded-3xl p-6 md:p-8 transition-all duration-500 hover:bg-muted">
      {/* New Badge */}
      {product.isNew && (
        <div className="mb-4">
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            Yeni
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl">
        <AppImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Color Options */}
      <div className="flex items-center gap-2 mb-4">
        {product.colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              selectedColor === color
                ? "ring-2 ring-primary ring-offset-2 ring-offset-card"
                : "opacity-60 hover:opacity-100"
            }`}
            style={{
              backgroundColor:
                color === "Gece Siyahı" || color === "Siyah" || color === "Karbon"
                  ? "#1a1a2e"
                  : color === "Okyanus Mavisi"
                  ? "#00d4ff"
                  : color === "Gümüş" || color === "Titanyum"
                  ? "#94a3b8"
                  : color === "Beyaz"
                  ? "#e2e8f0"
                  : color === "Mor"
                  ? "#7c3aed"
                  : "#64748b",
            }}
            title={color}
          />
        ))}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{product.tagline}</p>

        {/* Price */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-2xl font-display font-bold text-foreground">
            {product.price.toLocaleString("tr-TR")} TL
          </span>
          <span className="text-sm text-muted-foreground line-through">
            {product.originalPrice.toLocaleString("tr-TR")} TL
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link
            href="#"
            className="text-primary hover:text-accent transition-colors font-medium text-sm"
          >
            Daha Fazla Bilgi &rarr;
          </Link>
          <button
            onClick={handleAdd}
            className={`w-full py-3 px-6 rounded-full font-medium text-sm transition-all duration-300 ${
              added
                ? "bg-green-500 text-white"
                : "bg-primary text-primary-foreground hover:bg-accent"
            }`}
          >
            {added ? "Sepete Eklendi" : "Sepete Ekle"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            Alışveriş
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En yeni LuminaTech ürünlerini keşfet. Ücretsiz kargo ve 30 gün iade garantisi.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Compare Section */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            <Icon name="Squares2X2Icon" size={18} />
            Tüm modelleri karşılaştır
          </Link>
        </div>
      </div>
    </section>
  );
}
