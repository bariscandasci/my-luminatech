"use client";
import React, { useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const youthProducts = [
{
  id: "sonic-buds-youth",
  name: "Sonic Buds",
  tagline: "Müziğini özgürce yaşa",
  originalPrice: 599,
  discountedPrice: 449,
  discount: 25,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d56768df-1773519415172.png",
  alt: "Beyaz kablosuz kulaklık gençler için özel fiyat",
  badge: "Öğrenci Fiyatı",
  color: "from-[#5e5ce6] to-[#3478f6]"
},
{
  id: "aura-wristband-se-youth",
  name: "Aura Wristband SE",
  tagline: "Aktif yaşam için tasarlandı",
  originalPrice: 699,
  discountedPrice: 524,
  discount: 25,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15555c6ef-1777040238679.png",
  alt: "Akıllı saat gençler için özel kampanya fiyatı",
  badge: "Gençlere Özel",
  color: "from-[#ff6b35] to-[#f7931e]"
},
{
  id: "nova-speaker-mini-youth",
  name: "Nova Speaker Mini",
  tagline: "Her yere götür, her yerde çal",
  originalPrice: 799,
  discountedPrice: 599,
  discount: 25,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bbf2656e-1773019725853.png",
  alt: "Taşınabilir mini hoparlör renkli gençlik tasarımı",
  badge: "Sınırlı Stok",
  color: "from-[#34c759] to-[#30d158]"
}];


const perks = [
{
  icon: "🎓",
  title: "Öğrenci İndirimi",
  description: "Geçerli öğrenci kimliğiyle tüm ürünlerde %25 indirim"
},
{
  icon: "📦",
  title: "Ücretsiz Kargo",
  description: "Tüm öğrenci siparişlerinde ücretsiz hızlı teslimat"
},
{
  icon: "🔄",
  title: "30 Gün İade",
  description: "Beğenmezsen koşulsuz iade garantisi"
},
{
  icon: "🎁",
  title: "Sürpriz Hediye",
  description: "Her siparişe özel LuminaTech aksesuar hediyesi"
}];


function YouthProductCard({ product }: {product: (typeof youthProducts)[0];}) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.discountedPrice,
      image: product.image
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // Map youth product ids to main product ids
  const mainProductId = product.id.replace("-youth", "").replace("-se-youth", "-se");

  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
      onClick={() => router.push(`/urun/${mainProductId}`)}
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${product.color} p-6 relative overflow-hidden`}>
        <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full">
          {product.badge}
        </span>
        <div className="flex items-center justify-center h-[160px]">
          <AppImage
            src={product.image}
            alt={product.alt}
            width={160}
            height={160}
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500" />

        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-[17px] font-black text-[#1d1d1f] tracking-tight mb-1">
          {product.name}
        </h3>
        <p className="text-[13px] text-[#6e6e73] font-light mb-4 leading-relaxed">
          {product.tagline}
        </p>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-display text-[22px] font-black text-[#1d1d1f] tracking-tight">
            {product.discountedPrice.toLocaleString("tr-TR")} TL
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#6e6e73] line-through font-light">
              {product.originalPrice.toLocaleString("tr-TR")} TL
            </span>
            <span className="text-[11px] text-[#34c759] font-bold uppercase tracking-wide">
              %{product.discount} İndirim
            </span>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className={`mt-auto w-full py-3 px-6 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 active:scale-95 ${
          added ?
          "bg-[#34c759] text-white" :
          "bg-[#1d1d1f] text-white hover:bg-[#3a3a3c] hover:shadow-lg active:scale-95"}`
          }>

          {added ? "✓ Sepete Eklendi" : "Sepete Ekle"}
        </button>
      </div>
    </div>);

}

export default function YouthCampaign() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-[#5e5ce6] to-[#3478f6] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4">
            Sınırlı Süre
          </span>
          <h2 className="font-display text-[32px] md:text-[44px] font-black text-[#1d1d1f] tracking-tight mb-3 leading-tight">
            Gençlere Özel Kampanya.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6e6e73] font-light max-w-xl mx-auto leading-relaxed">
            Öğrenci kimliğinle tüm LuminaTech ürünlerinde <span className="text-[#1d1d1f] font-semibold">%25 indirim</span> fırsatını kaçırma.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {youthProducts.map((product) =>
          <YouthProductCard key={product.id} product={product} />
          )}
        </div>

        {/* Perks Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {perks.map((perk) =>
          <div
            key={perk.title}
            className="bg-white rounded-2xl p-5 text-center hover:shadow-md transition-shadow duration-300">

              <div className="text-3xl mb-3">{perk.icon}</div>
              <h4 className="font-display text-[13px] font-bold text-[#1d1d1f] mb-1 tracking-tight">
                {perk.title}
              </h4>
              <p className="text-[11px] text-[#6e6e73] font-light leading-relaxed">
                {perk.description}
              </p>
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#1d1d1f] to-[#3a3a3c] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-[22px] md:text-[26px] font-black text-white tracking-tight mb-2">
              Öğrenci doğrulaması yap, indirimini al.
            </h3>
            <p className="text-[14px] text-[#a1a1a6] font-light">
              Geçerli öğrenci e-postanla hemen doğrula, anında indirim kazan.
            </p>
          </div>
          <button className="flex-shrink-0 bg-white text-[#1d1d1f] px-8 py-3.5 rounded-full text-[14px] font-semibold tracking-wide hover:bg-[#f5f5f7] transition-colors active:scale-95 whitespace-nowrap">
            Hemen Doğrula &rsaquo;
          </button>
        </div>
      </div>
    </section>);

}