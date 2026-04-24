"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AppImage from "@/components/ui/AppImage";
import { useCart } from "@/context/CartContext";

const allProducts = [
{
  id: "aura-wristband-pro",
  name: "Aura Wristband Pro",
  tagline: "Daha güçlü. Daha parlak. Daha Pro.",
  price: 1299,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12901a2b5-1767695755283.png",
  colors: [
  { name: "Doğal Titanyum", hex: "#9A9A9D" },
  { name: "Mavi Titanyum", hex: "#394E6A" },
  { name: "Beyaz Titanyum", hex: "#F5F5F0" },
  { name: "Siyah Titanyum", hex: "#3A3A3C" }],

  models: ["41mm", "45mm", "49mm"],
  isNew: true,
  category: "Akıllı Bileklik",
  description:
  "Aura Wristband Pro, titanyum kasasıyla hem dayanıklı hem de şık bir tasarım sunar. Gelişmiş sağlık sensörleri, 36 saate kadar pil ömrü ve su geçirmezlik özelliğiyle her koşulda yanınızda. Yeni nesil ekran teknolojisi ile güneş ışığında bile mükemmel görünürlük sağlar.",
  specs: [
  { label: "Kasa Malzemesi", value: "Titanyum" },
  { label: "Ekran", value: "Always-On LTPO OLED" },
  { label: "Pil Ömrü", value: "36 saate kadar" },
  { label: "Su Direnci", value: "100 metre" },
  { label: "Sensörler", value: "Kalp atışı, SpO2, EKG, Sıcaklık" },
  { label: "Bağlantı", value: "Bluetooth 5.3, Wi-Fi 6" }],

  faqs: [
  {
    question: "Aura Wristband Pro hangi telefonlarla uyumlu?",
    answer:
    "Aura Wristband Pro, Android 10 ve üzeri ile iOS 15 ve üzeri işletim sistemleriyle tam uyumludur. LuminaTech uygulamasını indirerek tüm özelliklerden yararlanabilirsiniz."
  },
  {
    question: "Pil ömrü ne kadar sürer?",
    answer:
    "Normal kullanımda 36 saate kadar pil ömrü sunar. Always-On ekran kapalıyken bu süre 48 saate çıkabilir. Manyetik şarj cihazıyla 1 saatte tam şarj olur."
  },
  {
    question: "Su geçirmez mi?",
    answer:
    "Evet, 100 metre su direncine sahiptir. Yüzme ve dalış aktivitelerinde rahatlıkla kullanabilirsiniz. Ancak yüksek basınçlı su altında kullanılması önerilmez."
  },
  {
    question: "Kayış değiştirilebilir mi?",
    answer:
    "Evet, Aura Wristband Pro tüm LuminaTech kayışlarıyla uyumludur. Hızlı değiştirme mekanizması sayesinde saniyeler içinde kayışınızı değiştirebilirsiniz."
  },
  {
    question: "Garanti süresi ne kadar?",
    answer:
    "Aura Wristband Pro, satın alma tarihinden itibaren 2 yıl üretici garantisi kapsamındadır. Ekstra koruma için LuminaTech Care+ planına dahil olabilirsiniz."
  }]

},
{
  id: "aura-wristband",
  name: "Aura Wristband",
  tagline: "Performans ve tarz bir arada.",
  price: 999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_160012b9f-1764826416747.png",
  colors: [
  { name: "Gece Yarısı", hex: "#1d1d1f" },
  { name: "Yıldız Işığı", hex: "#F9F3EE" },
  { name: "Kırmızı", hex: "#BF4F51" }],

  models: ["41mm", "45mm"],
  isNew: true,
  category: "Akıllı Bileklik",
  description:
  "Aura Wristband, günlük yaşamın her anına eşlik eden akıllı bilekliktir. Sağlık takibi, spor modları ve akıllı bildirimlerle hayatınızı kolaylaştırır. Alüminyum kasası ve renkli seçenekleriyle tarzınızı yansıtın.",
  specs: [
  { label: "Kasa Malzemesi", value: "Alüminyum" },
  { label: "Ekran", value: "LTPO OLED Retina" },
  { label: "Pil Ömrü", value: "18 saate kadar" },
  { label: "Su Direnci", value: "50 metre" },
  { label: "Sensörler", value: "Kalp atışı, SpO2, Uyku takibi" },
  { label: "Bağlantı", value: "Bluetooth 5.2, Wi-Fi 5" }],

  faqs: [
  {
    question: "Aura Wristband ile Aura Wristband Pro arasındaki fark nedir?",
    answer:
    "Pro modeli titanyum kasa, daha uzun pil ömrü (36 saat), daha derin su direnci (100m) ve EKG sensörü gibi gelişmiş özellikler sunar. Standart model ise daha uygun fiyatıyla günlük kullanım için idealdir."
  },
  {
    question: "Hangi spor aktivitelerini takip edebilir?",
    answer:
    "Koşu, yürüyüş, bisiklet, yüzme, yoga, HIIT ve 40'tan fazla spor aktivitesini otomatik olarak algılar ve takip eder."
  },
  {
    question: "Uyku takibi yapıyor mu?",
    answer:
    "Evet, uyku evrelerini (derin uyku, REM, hafif uyku) takip eder ve sabah detaylı uyku analizi sunar. Uyku kalitesini artırmak için öneriler de alabilirsiniz."
  },
  {
    question: "Şarj süresi ne kadar?",
    answer:
    "Dahil edilen manyetik şarj kablosuyla yaklaşık 1.5 saatte tam şarj olur. 30 dakikalık hızlı şarjla 8 saatlik kullanım süresi elde edebilirsiniz."
  }]

},
{
  id: "aura-wristband-se",
  name: "Aura Wristband SE",
  tagline: "Sevilen özellikler, uygun fiyat.",
  price: 699,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12e8a92af-1772267194381.png",
  colors: [
  { name: "Gece Yarısı", hex: "#1d1d1f" },
  { name: "Yıldız Işığı", hex: "#F9F3EE" }],

  models: ["40mm", "44mm"],
  isNew: false,
  category: "Akıllı Bileklik",
  description:
  "Aura Wristband SE, en çok sevilen özellikleri uygun bir fiyatla sunar. Temel sağlık takibi, bildirimler ve uzun pil ömrüyle günlük hayatınızın vazgeçilmezi olur. Giriş seviyesi akıllı bileklik arayanlar için mükemmel seçim.",
  specs: [
  { label: "Kasa Malzemesi", value: "Alüminyum" },
  { label: "Ekran", value: "LTPO OLED" },
  { label: "Pil Ömrü", value: "18 saate kadar" },
  { label: "Su Direnci", value: "50 metre" },
  { label: "Sensörler", value: "Kalp atışı, Adım sayar" },
  { label: "Bağlantı", value: "Bluetooth 5.0" }],

  faqs: [
  {
    question: "SE modeli diğer modellerden ne farkı var?",
    answer:
    "SE modeli, temel sağlık ve fitness özelliklerini daha uygun bir fiyatla sunar. SpO2 ve EKG gibi gelişmiş sensörler bulunmaz, ancak günlük kullanım için gereken tüm özellikler mevcuttur."
  },
  {
    question: "Çocuklar için uygun mu?",
    answer:
    "Evet, 40mm boyutu küçük bilekler için uygundur. Ebeveyn kontrol özellikleri ve konum paylaşımı ile çocuklar için güvenli bir seçenektir."
  },
  {
    question: "Diğer Aura Wristband kayışlarıyla uyumlu mu?",
    answer:
    "Evet, aynı boyuttaki tüm LuminaTech kayışlarıyla uyumludur. 40mm SE için 40mm kayışlar, 44mm SE için 44mm kayışlar kullanılabilir."
  }]

},
{
  id: "sonic-buds-pro",
  name: "Sonic Buds Pro",
  tagline: "Adaptif Ses. Kişiselleştirilmiş deneyim.",
  price: 899,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_196519acc-1767957458604.png",
  colors: [
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Siyah", hex: "#1d1d1f" }],

  models: ["Standart", "Pro", "Pro Max"],
  isNew: true,
  category: "Kablosuz Kulaklık",
  description:
  "Sonic Buds Pro, adaptif gürültü engelleme teknolojisiyle çevrenizi dinleyip otomatik olarak ayarlanan ses deneyimi sunar. Kişiselleştirilmiş ses profili, 30 saate kadar pil ömrü ve kristal netliğinde mikrofon sistemiyle müziği ve aramaları yeni bir boyuta taşır.",
  specs: [
  { label: "Sürücü", value: "11mm Dinamik + Armature" },
  { label: "Gürültü Engelleme", value: "Adaptif ANC (-40dB)" },
  { label: "Pil Ömrü", value: "6 saat (kılıfla 30 saat)" },
  { label: "Şarj", value: "USB-C + Kablosuz" },
  { label: "Bağlantı", value: "Bluetooth 5.3, Multipoint" },
  { label: "Su Direnci", value: "IPX4" }],

  faqs: [
  {
    question: "Gürültü engelleme ne kadar etkili?",
    answer:
    "Adaptif ANC teknolojisi, ortam sesini -40dB'e kadar azaltır. Uçak, metro veya kalabalık ofis gibi gürültülü ortamlarda bile müziğinizi net bir şekilde duyabilirsiniz."
  },
  {
    question: "Aynı anda birden fazla cihaza bağlanabilir mi?",
    answer:
    "Evet, Multipoint teknolojisi sayesinde aynı anda 2 cihaza bağlı kalabilirsiniz. Telefon ve bilgisayar arasında otomatik geçiş yapar."
  },
  {
    question: "Pil ömrü ne kadar?",
    answer:
    "Kulaklıkların kendisi 6 saate kadar, şarj kılıfıyla birlikte toplam 30 saate kadar kullanım sunar. ANC açıkken bu süre yaklaşık %20 azalır."
  },
  {
    question: "Spor yaparken kullanılabilir mi?",
    answer:
    "Evet, IPX4 su ve ter direnci sayesinde yoğun antrenmanlar sırasında güvenle kullanabilirsiniz. Ergonomik tasarımı sayesinde kulaktan düşmez."
  },
  {
    question: "Kişiselleştirilmiş ses profili nasıl çalışır?",
    answer:
    "LuminaTech uygulamasındaki işitme testi ile kişisel işitme profiliniz oluşturulur. Kulaklık bu profile göre sesi otomatik olarak optimize eder."
  }]

},
{
  id: "sonic-buds",
  name: "Sonic Buds",
  tagline: "Etkileyici ses, rahat kullanım.",
  price: 599,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a965f3a1-1773946767324.png",
  colors: [
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Pembe", hex: "#F2D7D9" }],

  models: ["Standart", "Lite"],
  isNew: false,
  category: "Kablosuz Kulaklık",
  description:
  "Sonic Buds, günlük kullanım için tasarlanmış kablosuz kulaklıktır. Zengin bas ve net tiz dengesiyle müziğin her detayını hissedersiniz. Hafif yapısı ve ergonomik tasarımıyla saatlerce konforlu kullanım sunar.",
  specs: [
  { label: "Sürücü", value: "10mm Dinamik" },
  { label: "Gürültü Engelleme", value: "Pasif Gürültü Yalıtımı" },
  { label: "Pil Ömrü", value: "5 saat (kılıfla 24 saat)" },
  { label: "Şarj", value: "USB-C" },
  { label: "Bağlantı", value: "Bluetooth 5.2" },
  { label: "Su Direnci", value: "IPX4" }],

  faqs: [
  {
    question: "Sonic Buds ile Sonic Buds Pro arasındaki fark nedir?",
    answer:
    "Pro modeli adaptif ANC, daha uzun pil ömrü, kablosuz şarj ve Multipoint bağlantı gibi gelişmiş özellikler sunar. Standart Sonic Buds ise günlük kullanım için uygun fiyatlı bir seçenektir."
  },
  {
    question: "Telefon görüşmesi kalitesi nasıl?",
    answer:
    "Çift mikrofon sistemi ve gürültü filtreleme teknolojisi sayesinde açık havada bile net ses kalitesi sunar. Aramalarda karşı taraf sizi net bir şekilde duyar."
  },
  {
    question: "Kulaklık kılıfı kablosuz şarj destekliyor mu?",
    answer:
    "Standart Sonic Buds kılıfı USB-C ile şarj olur. Kablosuz şarj özelliği yalnızca Sonic Buds Pro modelinde mevcuttur."
  }]

},
{
  id: "nova-speaker-max",
  name: "Nova Speaker Max",
  tagline: "Büyüleyici uzaysal ses.",
  price: 1599,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11dc1cfc7-1777040845228.png",
  colors: [
  { name: "Uzay Grisi", hex: "#86868B" },
  { name: "Gece Yarısı", hex: "#1d1d1f" }],

  models: ["Standart", "Max"],
  isNew: true,
  category: "Hoparlör",
  description:
  "Nova Speaker Max, 360 derece uzaysal ses teknolojisiyle odanın her köşesine eşit ses dağıtır. 5 tweeter ve 1 woofer ile oluşan ses sistemi, canlı konser deneyimini evinize taşır. Akıllı ev sistemleriyle tam entegrasyon sunar.",
  specs: [
  { label: "Sürücü Sayısı", value: "5 Tweeter + 1 Woofer" },
  { label: "Toplam Güç", value: "360W" },
  { label: "Ses Teknolojisi", value: "Uzaysal Ses, Dolby Atmos" },
  { label: "Bağlantı", value: "Wi-Fi 6, Bluetooth 5.3, AirPlay" },
  { label: "Akıllı Asistan", value: "Uyumlu" },
  { label: "Boyut", value: "168 x 168 x 172 mm" }],

  faqs: [
  {
    question: "Birden fazla Nova Speaker Max birbirine bağlanabilir mi?",
    answer:
    "Evet, stereo çift veya çok odalı ses sistemi oluşturmak için birden fazla Nova Speaker Max'i birbirine bağlayabilirsiniz. LuminaTech uygulaması üzerinden kolayca yapılandırabilirsiniz."
  },
  {
    question: "Hangi müzik servisleriyle uyumlu?",
    answer:
    "Spotify, Apple Music, YouTube Music, Tidal ve diğer popüler müzik servisleriyle uyumludur. AirPlay ve Bluetooth ile herhangi bir kaynaktan müzik çalabilirsiniz."
  },
  {
    question: "Akıllı ev sistemleriyle entegre olabiliyor mu?",
    answer:
    "Evet, Google Home, Apple HomeKit ve Amazon Alexa ile tam entegrasyon sağlar. Ses komutlarıyla kontrol edebilir, otomasyon rutinlerine ekleyebilirsiniz."
  },
  {
    question: "Pil var mı, sadece prize mi bağlı çalışıyor?",
    answer:
    "Nova Speaker Max yalnızca prize bağlı çalışır. Taşınabilir kullanım için Nova Speaker Mini modelini tercih edebilirsiniz."
  }]

},
{
  id: "nova-speaker",
  name: "Nova Speaker",
  tagline: "360 derece ses deneyimi.",
  price: 1199,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f2aa369-1777040845288.png",
  colors: [
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Mavi", hex: "#3478F6" }],

  models: ["Standart", "Plus"],
  isNew: false,
  category: "Hoparlör",
  description:
  "Nova Speaker, kompakt tasarımı ve güçlü sesiyle her ortama uyum sağlar. 360 derece ses yayılımı ve derin bas teknolojisiyle müziği yeni bir boyutta deneyimleyin. Akıllı ses optimizasyonu ile bulunduğunuz odaya göre sesi otomatik ayarlar.",
  specs: [
  { label: "Sürücü Sayısı", value: "3 Tweeter + 1 Woofer" },
  { label: "Toplam Güç", value: "150W" },
  { label: "Ses Teknolojisi", value: "360° Ses, Adaptif EQ" },
  { label: "Bağlantı", value: "Wi-Fi 5, Bluetooth 5.2, AirPlay" },
  { label: "Akıllı Asistan", value: "Uyumlu" },
  { label: "Boyut", value: "142 x 142 x 148 mm" }],

  faqs: [
  {
    question: "Nova Speaker ve Nova Speaker Max arasındaki fark nedir?",
    answer:
    "Max modeli daha fazla sürücü, daha yüksek güç (360W vs 150W) ve Dolby Atmos desteği sunar. Standart Nova Speaker ise orta büyüklükteki odalar için idealdir."
  },
  {
    question: "Adaptif EQ nasıl çalışır?",
    answer:
    "Hoparlör, bulunduğu odanın akustiğini analiz eder ve ses çıkışını otomatik olarak optimize eder. Köşede, masada veya açık alanda farklı ses profilleri uygular."
  },
  {
    question: "Bluetooth bağlantısı ne kadar uzaktan çalışır?",
    answer:
    "Bluetooth 5.2 teknolojisiyle engelsiz ortamda 10 metreye kadar stabil bağlantı sağlar. Wi-Fi bağlantısında ise ev ağınız kapsamında her yerden kontrol edebilirsiniz."
  }]

},
{
  id: "nova-speaker-mini",
  name: "Nova Speaker Mini",
  tagline: "Küçük ama güçlü.",
  price: 799,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1bb5331-1766246274336.png",
  colors: [
  { name: "Turuncu", hex: "#FF9500" },
  { name: "Mavi", hex: "#007AFF" },
  { name: "Yeşil", hex: "#34C759" },
  { name: "Pembe", hex: "#FF2D55" },
  { name: "Sarı", hex: "#FFCC00" }],

  models: ["Mini", "Mini Pro"],
  isNew: true,
  category: "Hoparlör",
  description:
  "Nova Speaker Mini, cebinize sığan boyutuyla güçlü ses sunar. Su geçirmez yapısı ve 12 saatlik pil ömrüyle plaj, kamp veya piknik gibi açık hava aktivitelerine mükemmel eşlik eder. Canlı renk seçenekleriyle kişiliğinizi yansıtın.",
  specs: [
  { label: "Sürücü", value: "2 Tweeter + 1 Pasif Radyatör" },
  { label: "Toplam Güç", value: "30W" },
  { label: "Pil Ömrü", value: "12 saate kadar" },
  { label: "Su Direnci", value: "IP67" },
  { label: "Bağlantı", value: "Bluetooth 5.3" },
  { label: "Boyut", value: "95 x 95 x 88 mm" }],

  faqs: [
  {
    question: "Suya düşerse ne olur?",
    answer:
    "IP67 su direnci sayesinde 1 metre derinlikte 30 dakikaya kadar suya dayanır. Havuz kenarı, plaj veya yağmurlu hava için idealdir."
  },
  {
    question: "Pil ömrü ne kadar?",
    answer:
    "Orta ses seviyesinde 12 saate kadar kullanım sunar. USB-C ile yaklaşık 2 saatte tam şarj olur. Şarj ederken de müzik çalmaya devam edebilirsiniz."
  },
  {
    question: "İki Mini hoparlörü stereo olarak kullanabilir miyim?",
    answer:
    "Evet, iki Nova Speaker Mini'yi eşleştirerek stereo ses deneyimi yaşayabilirsiniz. Bluetooth üzerinden otomatik eşleştirme yapılır."
  },
  {
    question: "Mikrofon var mı, telefon görüşmesi yapılabilir mi?",
    answer:
    "Evet, dahili mikrofon sayesinde hoparlörü speakerphone olarak kullanabilirsiniz. Gürültü azaltma teknolojisi ile net ses kalitesi sunar."
  }]

}];


function FAQItem({ question, answer }: {question: string;answer: string;}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8e8ed] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group">

        <span className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-200 leading-snug">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#f5f5f7] flex items-center justify-center transition-transform duration-300 ${
          open ? "rotate-45" : ""}`
          }>

          <svg
            className="w-3 h-3 text-[#1d1d1f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 5v14M5 12h14" />

          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
        open ? "max-h-96 pb-5" : "max-h-0"}`
        }>

        <p className="text-[14px] text-[#6e6e73] font-light leading-relaxed">
          {answer}
        </p>
      </div>
    </div>);

}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);
  const [added, setAdded] = useState(false);

  const product = allProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-display text-[28px] font-black text-[#1d1d1f] mb-3 tracking-tight">
            Ürün bulunamadı.
          </h1>
          <button
            onClick={() => router.back()}
            className="text-[#0066cc] hover:underline text-[15px] font-medium">

            ← Geri dön
          </button>
        </div>
      </div>);

  }

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#f5f5f7] border-b border-[#e8e8ed]">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-2 text-[13px]">
          <button
            onClick={() => router.push("/homepage")}
            className="text-[#0066cc] hover:underline font-medium">

            Ana Sayfa
          </button>
          <span className="text-[#6e6e73]">/</span>
          <span className="text-[#6e6e73]">{product.category}</span>
          <span className="text-[#6e6e73]">/</span>
          <span className="text-[#1d1d1f] font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-10">
            {product.isNew &&
            <span className="absolute top-5 left-5 bg-[#bf4800] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
                Yeni
              </span>
            }
            <AppImage
              src={product.image}
              alt={product.name}
              width={480}
              height={480}
              className="object-contain w-full h-full" />

          </div>

          {/* Info */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#bf4800] font-semibold mb-2">
              {product.category}
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] font-black text-[#1d1d1f] tracking-tight leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-[18px] text-[#6e6e73] font-light mb-6 leading-relaxed">
              {product.tagline}
            </p>

            <p className="font-display text-[28px] font-black text-[#1d1d1f] tracking-tight mb-6">
              {product.price.toLocaleString("tr-TR")} TL
            </p>

            {/* Color Picker */}
            <div className="mb-5">
              <p className="text-[12px] uppercase tracking-[0.1em] text-[#6e6e73] font-semibold mb-3">
                Renk —{" "}
                <span className="text-[#1d1d1f]">
                  {product.colors[selectedColor].name}
                </span>
              </p>
              <div className="flex items-center gap-3">
                {product.colors.map((color, i) =>
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(i)}
                  className={`w-7 h-7 rounded-full transition-all duration-200 ${
                  selectedColor === i ?
                  "ring-2 ring-[#0071e3] ring-offset-2" :
                  "hover:ring-2 hover:ring-[#d2d2d7] hover:ring-offset-1"}`
                  }
                  style={{ backgroundColor: color.hex }}
                  title={color.name} />

                )}
              </div>
            </div>

            {/* Model Picker */}
            <div className="mb-8">
              <p className="text-[12px] uppercase tracking-[0.1em] text-[#6e6e73] font-semibold mb-3">
                Model
              </p>
              <div className="flex flex-wrap gap-2">
                {product.models.map((model, i) =>
                <button
                  key={model}
                  onClick={() => setSelectedModel(i)}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold tracking-wide border transition-all duration-200 ${
                  selectedModel === i ?
                  "bg-[#1d1d1f] text-white border-[#1d1d1f]" :
                  "bg-white text-[#1d1d1f] border-[#d2d2d7] hover:border-[#1d1d1f]"}`
                  }>

                    {model}
                  </button>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 px-8 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 active:scale-95 ${
                added ?
                "bg-[#34c759] text-white" :
                "bg-[#0071e3] text-white hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/30"}`
                }>

                {added ? "✓ Sepete Eklendi" : "Sepete Ekle"}
              </button>
              <button
                onClick={() => router.push("/checkout")}
                className="flex-1 py-4 px-8 rounded-full text-[15px] font-semibold tracking-wide border-2 border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-all duration-300 active:scale-95">

                Hemen Satın Al
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-4 py-14">
          <h2 className="font-display text-[24px] md:text-[30px] font-black text-[#1d1d1f] tracking-tight mb-4">
            Ürün Hakkında
          </h2>
          <p className="text-[16px] text-[#6e6e73] font-light leading-relaxed max-w-2xl">
            {product.description}
          </p>
        </div>
      </div>

      {/* Specs */}
      <div className="max-w-[1200px] mx-auto px-4 py-14">
        <h2 className="font-display text-[24px] md:text-[30px] font-black text-[#1d1d1f] tracking-tight mb-8">
          Teknik Özellikler
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.specs.map((spec) =>
          <div
            key={spec.label}
            className="bg-[#f5f5f7] rounded-2xl p-5">

              <p className="text-[11px] uppercase tracking-[0.1em] text-[#6e6e73] font-semibold mb-1">
                {spec.label}
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">
                {spec.value}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[#f5f5f7]">
        <div className="max-w-[800px] mx-auto px-4 py-14">
          <h2 className="font-display text-[24px] md:text-[30px] font-black text-[#1d1d1f] tracking-tight mb-2">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-[15px] text-[#6e6e73] font-light mb-8">
            {product.name} hakkında merak edilenler.
          </p>
          <div className="bg-white rounded-3xl px-6 md:px-8 divide-y-0">
            {product.faqs.map((faq) =>
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer} />

            )}
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="max-w-[1200px] mx-auto px-4 py-10 text-center">
        <button
          onClick={() => router.back()}
          className="text-[#0066cc] hover:underline text-[15px] font-medium tracking-wide">

          ← Tüm ürünlere dön
        </button>
      </div>
    </div>);

}