"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AppImage from "@/components/ui/AppImage";
import { useCart } from "@/context/CartContext";

const allProducts = [
{
  id: "ultrabook-pro-x1",
  name: "UltraBook Pro X1",
  tagline: "İnce. Hafif. Güçlü. Her yerde.",
  price: 42999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f4266108-1777043256605.png",
  colors: [
  { name: "Uzay Grisi", hex: "#86868B" },
  { name: "Gümüş", hex: "#C0C0C0" },
  { name: "Gece Yarısı", hex: "#1d1d1f" }],

  models: ["Core i5 / 16GB", "Core i7 / 16GB", "Core i7 / 32GB"],
  isNew: true,
  category: "Ultrabook",
  description:
  "UltraBook Pro X1, sadece 1.1 kg ağırlığı ve 13.5mm inceliğiyle dünyanın en taşınabilir iş bilgisayarlarından biridir. Intel Core i7 işlemcisi, 16 saate kadar pil ömrü ve 2K OLED ekranıyla her ortamda üstün performans sunar. Tam boyutlu klavye ve Thunderbolt 4 bağlantısıyla profesyonel iş akışlarını destekler.",
  specs: [
  { label: "İşlemci", value: "Intel Core i7-1365U" },
  { label: "Ekran", value: "14\" 2K OLED 120Hz" },
  { label: "RAM", value: "16GB / 32GB LPDDR5" },
  { label: "Depolama", value: "512GB / 1TB NVMe SSD" },
  { label: "Pil Ömrü", value: "16 saate kadar" },
  { label: "Ağırlık", value: "1.1 kg" }],

  faqs: [
  {
    question: "UltraBook Pro X1 hangi işletim sistemleriyle çalışır?",
    answer: "Windows 11 Pro ile birlikte gelir. Linux dağıtımlarıyla da tam uyumludur. macOS desteklenmez."
  },
  {
    question: "Pil ömrü gerçekten 16 saat mi?",
    answer: "Orta yoğunlukta kullanımda (web, ofis uygulamaları) 16 saate kadar ulaşabilir. Video düzenleme veya yoğun işlemci kullanımında bu süre 8-10 saate düşebilir."
  },
  {
    question: "RAM yükseltilebilir mi?",
    answer: "Hayır, RAM anakarta lehimlidir. Satın alma sırasında doğru kapasiteyi seçmeniz önerilir."
  },
  {
    question: "Kaç adet USB-C portu var?",
    answer: "2 adet Thunderbolt 4 (USB-C), 1 adet USB-A 3.2 ve 1 adet HDMI 2.1 portu bulunur. Her iki Thunderbolt portu şarj ve veri aktarımı için kullanılabilir."
  },
  {
    question: "Garanti süresi ne kadar?",
    answer: "2 yıl uluslararası üretici garantisi kapsamındadır. LuminaTech Care+ ile 3 yıla uzatılabilir."
  }]

},
{
  id: "gaming-laptop-rx9",
  name: "GameForce RX9",
  tagline: "Sınırları zorla. Oyunu kazan.",
  price: 67999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ef3d81d-1777043255349.png",
  colors: [
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Kırmızı/Siyah", hex: "#BF4F51" }],

  models: ["RTX 4060 / 16GB", "RTX 4070 / 32GB", "RTX 4080 / 32GB"],
  isNew: true,
  category: "Oyuncu Laptopu",
  description:
  "GameForce RX9, NVIDIA RTX 4080 ekran kartı ve Intel Core i9 işlemcisiyle en zorlu oyunları maksimum ayarlarda çalıştırır. 240Hz QHD ekranı, RGB aydınlatmalı klavyesi ve gelişmiş soğutma sistemiyle gerçek bir oyun canavarıdır. MUX Switch teknolojisiyle ekran kartı performansını doğrudan ekrana yönlendirir.",
  specs: [
  { label: "İşlemci", value: "Intel Core i9-13980HX" },
  { label: "Ekran Kartı", value: "NVIDIA RTX 4080 16GB" },
  { label: "Ekran", value: "17.3\" QHD 240Hz IPS" },
  { label: "RAM", value: "32GB DDR5 5600MHz" },
  { label: "Depolama", value: "2TB NVMe SSD (PCIe 5.0)" },
  { label: "Soğutma", value: "Çift Fan + Sıvı Metal" }],

  faqs: [
  {
    question: "Hangi oyunları 4K\'da oynayabilirim?",
    answer: "RTX 4080 modeliyle Cyberpunk 2077, Hogwarts Legacy, Alan Wake 2 gibi AAA oyunları 4K/60fps'de DLSS 3 ile akıcı şekilde oynanabilir."
  },
  {
    question: "Pil ömrü oyun oynarken ne kadar?",
    answer: "Oyun oynarken 1.5-2 saat pil ömrü beklenir. Günlük kullanımda (web, ofis) 6-8 saate kadar çıkabilir. Oyun için prize bağlı kullanım önerilir."
  },
  {
    question: "RAM yükseltilebilir mi?",
    answer: "Evet, 2 adet SO-DIMM yuvası bulunur ve 64GB'a kadar yükseltilebilir. Fabrika çıkışı 32GB DDR5 ile gelir."
  },
  {
    question: "MUX Switch nedir?",
    answer: "MUX Switch, entegre ekran kartını devre dışı bırakarak oyun performansını %10-15 artırır. BIOS veya uygulama üzerinden etkinleştirilebilir."
  },
  {
    question: "Soğutma sistemi ne kadar gürültülü?",
    answer: "Yoğun oyun sırasında 45-50 dB ses seviyesine ulaşabilir. Sessiz mod aktifken 35 dB'nin altında kalır."
  }]

},
{
  id: "ebook-reader-lumina",
  name: "Lumina E-Reader 7",
  tagline: "Binlerce kitap, tek cihaz.",
  price: 4999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b258fcf-1777043255209.png",
  colors: [
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Siyah", hex: "#1d1d1f" }],

  models: ["8GB", "32GB", "32GB Waterproof"],
  isNew: false,
  category: "E-Kitap Okuyucu",
  description:
  "Lumina E-Reader 7, 7 inçlik E-Ink Carta 1200 ekranıyla gerçek kağıt hissini dijital ortama taşır. Ayarlanabilir sıcak/soğuk arka ışık, 12 haftalık pil ömrü ve IPX8 su geçirmezliğiyle her ortamda okuma keyfi sunar. 32GB depolama ile 24.000'den fazla kitap taşıyabilirsiniz.",
  specs: [
  { label: "Ekran", value: "7\" E-Ink Carta 1200, 300 PPI" },
  { label: "Arka Işık", value: "Ayarlanabilir Sıcak/Soğuk LED" },
  { label: "Depolama", value: "8GB / 32GB" },
  { label: "Pil Ömrü", value: "12 haftaya kadar" },
  { label: "Su Direnci", value: "IPX8 (2m, 60 dk)" },
  { label: "Ağırlık", value: "205 gram" }],

  faqs: [
  {
    question: "Hangi kitap formatlarını destekliyor?",
    answer: "EPUB, MOBI, PDF, AZW3, TXT, HTML, DOCX formatlarını destekler. Kindle kitapları için DRM dönüştürme aracı gerekebilir."
  },
  {
    question: "Gözlere zararlı mı?",
    answer: "E-Ink teknolojisi, tablet veya telefon ekranlarına kıyasla çok daha az göz yorar. Yansımasız mat yüzey ve ayarlanabilir arka ışık ile saatlerce rahat okuma sağlar."
  },
  {
    question: "Kütüphane senkronizasyonu var mı?",
    answer: "Evet, LuminaCloud ile birden fazla cihaz arasında kitap ve okuma ilerlemesi senkronize edilir. Calibre ile de uyumludur."
  },
  {
    question: "Waterproof model banyo veya havuzda kullanılabilir mi?",
    answer: "IPX8 sertifikasıyla 2 metre derinlikte 60 dakikaya kadar suya dayanır. Tatlı su için uygundur, tuzlu su veya klor içeren suda kullanımdan sonra temizlenmelidir."
  }]

},
{
  id: "smart-pen-aura",
  name: "Aura Smart Pen Pro",
  tagline: "Yaz, çiz, dijitalleştir.",
  price: 2499,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_118c7c508-1777043255258.png",
  colors: [
  { name: "Gümüş", hex: "#C0C0C0" },
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Altın", hex: "#D4AF37" }],

  models: ["Standart", "Pro", "Pro Max"],
  isNew: true,
  category: "Akıllı Kalem",
  description:
  "Aura Smart Pen Pro, kağıda yazdıklarınızı anında dijitalleştiren devrimci bir akıllı kalemdir. 4096 basınç seviyesi, eğim algılama ve 0.5ms gecikme süresiyle doğal yazı ve çizim deneyimi sunar. Dahili mikrofon ile ses kaydı yaparak notlarınızla senkronize eder.",
  specs: [
  { label: "Basınç Seviyesi", value: "4096 Kademe" },
  { label: "Gecikme", value: "0.5ms" },
  { label: "Eğim Algılama", value: "±60 derece" },
  { label: "Pil Ömrü", value: "12 saate kadar" },
  { label: "Bağlantı", value: "Bluetooth 5.2" },
  { label: "Uyumluluk", value: "iOS, Android, Windows, macOS" }],

  faqs: [
  {
    question: "Hangi tablet ve uygulamalarla uyumlu?",
    answer: "iPad (USB-C modeller), Samsung Galaxy Tab S serisi, Microsoft Surface ve tüm Bluetooth destekli tabletlerle uyumludur. Procreate, GoodNotes, Notability, OneNote ile tam entegrasyon sağlar."
  },
  {
    question: "Kağıda yazılanları dijitalleştirmek için özel defter gerekiyor mu?",
    answer: "Pro Max modeli, özel Aura Smart Notebook ile birlikte kullanıldığında kağıt notları otomatik dijitalleştirir. Standart ve Pro modeller tablet ekranında çalışır."
  },
  {
    question: "Şarj süresi ne kadar?",
    answer: "USB-C ile 45 dakikada tam şarj olur. Manyetik şarj standıyla da şarj edilebilir."
  },
  {
    question: "Sol elle kullanım için uygun mu?",
    answer: "Evet, simetrik tasarımı ve eğim algılama özelliği sayesinde hem sağ hem sol elle doğal kullanım sağlar."
  }]

},
{
  id: "arduino-starter-kit",
  name: "Arduino Mega Starter Kit",
  tagline: "Projeye başla, hayal et, üret.",
  price: 1299,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17baa3db7-1777043255708.png",
  colors: [
  { name: "Mavi", hex: "#007AFF" }],

  models: ["Arduino Uno R3", "Arduino Mega 2560", "Raspberry Pi 4 4GB", "Raspberry Pi 5 8GB"],
  isNew: false,
  category: "Arduino & Raspberry Pi",
  description:
  "Arduino ve Raspberry Pi starter kitleri, elektronik ve yazılım dünyasına adım atmak isteyenler için eksiksiz başlangıç noktasıdır. 37 parça sensör seti, breadboard, jumper kablolar ve proje rehberiyle ilk projenizi hemen hayata geçirebilirsiniz. Raspberry Pi 5 modeli 8GB RAM ve PCIe 2.0 bağlantısıyla güçlü mini bilgisayar deneyimi sunar.",
  specs: [
  { label: "Arduino Uno R3", value: "ATmega328P, 14 Dijital Pin" },
  { label: "Arduino Mega", value: "ATmega2560, 54 Dijital Pin" },
  { label: "Raspberry Pi 4", value: "Cortex-A72, 4GB LPDDR4" },
  { label: "Raspberry Pi 5", value: "Cortex-A76, 8GB LPDDR4X" },
  { label: "Kit İçeriği", value: "37 Sensör + Breadboard + Kablolar" },
  { label: "Güç", value: "5V USB-C / Micro-USB" }],

  faqs: [
  {
    question: "Arduino ve Raspberry Pi arasındaki fark nedir?",
    answer: "Arduino bir mikrodenetleyicidir; sensör okuma, motor kontrolü gibi donanım görevleri için idealdir. Raspberry Pi tam bir mini bilgisayardır; işletim sistemi çalıştırır, web sunucusu, medya merkezi gibi karmaşık uygulamalar için uygundur."
  },
  {
    question: "Başlangıç için hangisi daha uygun?",
    answer: "Elektronik ve devre konusunda yeni başlayanlar için Arduino Uno R3 daha basit ve öğreticidir. Yazılım geliştirme deneyimi olanlar Raspberry Pi ile daha hızlı ilerleme kaydedebilir."
  },
  {
    question: "Hangi programlama dilleri kullanılır?",
    answer: "Arduino, C/C++ tabanlı Arduino IDE ile programlanır. Raspberry Pi Python, JavaScript, C++, Java ve daha birçok dili destekler."
  },
  {
    question: "Raspberry Pi 5 için ekran gerekiyor mu?",
    answer: "Micro HDMI çıkışı ile monitöre bağlanabilir. Headless (ekransız) kurulum ile SSH üzerinden de kullanılabilir."
  }]

},
{
  id: "stm32-dev-board",
  name: "STM32 Geliştirme Kiti",
  tagline: "Gömülü sistemlerde profesyonel çözüm.",
  price: 899,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3394b13-1777043254818.png",
  colors: [
  { name: "Yeşil", hex: "#34C759" }],

  models: ["STM32F103", "STM32F407", "STM32H743", "Nucleo-64"],
  isNew: false,
  category: "STM32",
  description:
  "STM32 geliştirme kartları, endüstriyel ve profesyonel gömülü sistem projelerinde tercih edilen ARM Cortex-M tabanlı mikrodenetleyicilerdir. STM32H743 modeli 480MHz çalışma frekansı ve DSP/FPU desteğiyle sinyal işleme ve motor kontrolü uygulamaları için idealdir. ST-Link V2 programlayıcı ve kapsamlı kütüphane desteğiyle hızlı geliştirme sağlar.",
  specs: [
  { label: "STM32F103", value: "ARM Cortex-M3, 72MHz, 64KB Flash" },
  { label: "STM32F407", value: "ARM Cortex-M4, 168MHz, 1MB Flash" },
  { label: "STM32H743", value: "ARM Cortex-M7, 480MHz, 2MB Flash" },
  { label: "Nucleo-64", value: "Arduino uyumlu pin dizilimi" },
  { label: "Programlama", value: "ST-Link V2, SWD/JTAG" },
  { label: "IDE Desteği", value: "STM32CubeIDE, Keil, IAR" }],

  faqs: [
  {
    question: "STM32 başlangıç için uygun mu?",
    answer: "Arduino'ya kıyasla öğrenme eğrisi daha diktir. Temel C bilgisi ve mikrodenetleyici kavramlarına aşinalık önerilir. Nucleo-64 kartı, Arduino uyumlu pinleri sayesinde başlangıç için en uygun modeldir."
  },
  {
    question: "HAL kütüphanesi mi, LL kütüphanesi mi kullanmalıyım?",
    answer: "HAL (Hardware Abstraction Layer) başlangıç için daha kolaydır ve taşınabilirlik sağlar. LL (Low Layer) daha hızlı ve verimlidir ancak daha fazla donanım bilgisi gerektirir."
  },
  {
    question: "FreeRTOS kullanılabilir mi?",
    answer: "Evet, tüm STM32 modelleri FreeRTOS ile uyumludur. STM32CubeMX ile FreeRTOS entegrasyonu otomatik olarak yapılandırılabilir."
  },
  {
    question: "Hangi iletişim protokollerini destekliyor?",
    answer: "UART, SPI, I2C, CAN, USB, Ethernet (F407/H743) protokollerini destekler. H743 modeli ayrıca FDCAN ve QSPI desteği sunar."
  }]

},
{
  id: "smartwatch-pro-s3",
  name: "Aura Watch Pro S3",
  tagline: "Sağlığını takip et, hayatını yönet.",
  price: 8999,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17e2d565b-1777043254838.png",
  colors: [
  { name: "Siyah Titanyum", hex: "#3A3A3C" },
  { name: "Gümüş", hex: "#C0C0C0" },
  { name: "Altın Rose", hex: "#B76E79" }],

  models: ["41mm", "45mm", "49mm Ultra"],
  isNew: true,
  category: "Akıllı Saat",
  description:
  "Aura Watch Pro S3, titanyum kasası ve safir cam ekranıyla hem dayanıklı hem de şık bir tasarım sunar. EKG, SpO2, vücut sıcaklığı ve kan basıncı ölçümü gibi gelişmiş sağlık sensörleriyle sürekli sağlık takibi yapar. 49mm Ultra modeli, dağcılık ve dalış için özel sensörler içerir.",
  specs: [
  { label: "Kasa", value: "Titanyum / Safir Cam" },
  { label: "Ekran", value: "Always-On LTPO OLED 2000 nit" },
  { label: "Pil Ömrü", value: "72 saate kadar" },
  { label: "Su Direnci", value: "100 metre (Ultra: 200m)" },
  { label: "Sensörler", value: "EKG, SpO2, Sıcaklık, Kan Basıncı" },
  { label: "Bağlantı", value: "Bluetooth 5.3, Wi-Fi 6, LTE (opsiyonel)" }],

  faqs: [
  {
    question: "Kan basıncı ölçümü ne kadar güvenilir?",
    answer: "Klinik sınıf hassasiyette ölçüm yapar. Ancak tıbbi teşhis için kullanılmamalı, doktor kontrolü önerilir. Düzenli kalibrasyon için uygulamada yönlendirme yapılır."
  },
  {
    question: "LTE modeli için hangi operatörler destekleniyor?",
    answer: "Türkiye'de Turkcell, Vodafone ve Türk Telekom eSIM desteği mevcuttur. Telefonsuz bağımsız kullanım için LTE modeli gereklidir."
  },
  {
    question: "Hangi telefonlarla uyumlu?",
    answer: "Android 10+ ve iOS 16+ ile tam uyumludur. LuminaTech uygulaması üzerinden tüm özellikler kullanılabilir."
  },
  {
    question: "49mm Ultra modeli normal bilekler için çok büyük mü?",
    answer: "49mm kasa 17cm ve üzeri bilek çevresi için önerilir. 41mm ve 45mm modeller daha geniş bir kitleye hitap eder."
  },
  {
    question: "Kayış değiştirilebilir mi?",
    answer: "Evet, hızlı değiştirme mekanizmasıyla tüm LuminaTech kayışlarıyla uyumludur. Spor, deri, metal ve örgü kayış seçenekleri mevcuttur."
  }]

},
{
  id: "anc-headphones-elite",
  name: "SoundShield Elite ANC",
  tagline: "Sessizliği hisset. Müziği yaşa.",
  price: 5499,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7091a9c-1765437610015.png",
  colors: [
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Gece Mavisi", hex: "#394E6A" }],

  models: ["Standart", "Pro", "Pro Wireless"],
  isNew: true,
  category: "Gürültü Engelleyici Kulaklık",
  description:
  "SoundShield Elite ANC, -45dB aktif gürültü engelleme teknolojisiyle uçak, metro ve kalabalık ofis ortamlarında mükemmel sessizlik sağlar. 40mm özel sürücüler ve Hi-Res Audio sertifikasıyla stüdyo kalitesinde ses sunar. 30 saatlik pil ömrü ve katlanabilir tasarımıyla seyahat için ideal eşlik.",
  specs: [
  { label: "Sürücü", value: "40mm Özel Dinamik" },
  { label: "ANC", value: "-45dB Hibrit Aktif Gürültü Engelleme" },
  { label: "Frekans Yanıtı", value: "4Hz - 40kHz (Hi-Res)" },
  { label: "Pil Ömrü", value: "30 saat (ANC açık), 40 saat (ANC kapalı)" },
  { label: "Şarj", value: "USB-C + Kablosuz Qi" },
  { label: "Bağlantı", value: "Bluetooth 5.3 Multipoint, 3.5mm" }],

  faqs: [
  {
    question: "ANC açıkken ses kalitesi düşüyor mu?",
    answer: "Hayır, hibrit ANC sistemi ses kalitesini etkilemez. Bazı kullanıcılar ANC açıkken hafif bir basınç hissi yaşayabilir, bu normaldir."
  },
  {
    question: "Telefon görüşmelerinde mikrofon kalitesi nasıl?",
    answer: "6 adet mikrofon ve yapay zeka destekli gürültü filtreleme ile rüzgarlı veya kalabalık ortamlarda bile kristal net ses kalitesi sunar."
  },
  {
    question: "Aynı anda iki cihaza bağlanabilir mi?",
    answer: "Evet, Multipoint teknolojisi ile telefon ve bilgisayara aynı anda bağlı kalır. Bir cihazda müzik çalarken diğerinden gelen arama otomatik olarak algılanır."
  },
  {
    question: "Uzun süre kullanımda kulak ısınıyor mu?",
    answer: "Nefes alabilen protein deri kulak yastıkları ve ergonomik tasarım sayesinde 4-5 saatlik kullanımda bile konfor sağlar. Yoğun spor aktiviteleri için kulak içi model önerilir."
  },
  {
    question: "Kablo ile kullanılabilir mi?",
    answer: "Evet, dahil edilen 3.5mm kablo ile kablolu kullanım mümkündür. Pil bittiğinde de kablolu modda çalışmaya devam eder."
  }]

},
{
  id: "powerbank-ultra-30k",
  name: "PowerCore Ultra 30000",
  tagline: "Şarj tükenmesin, hayat durmasın.",
  price: 1799,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b3fb128b-1777043254549.png",
  colors: [
  { name: "Siyah", hex: "#1d1d1f" },
  { name: "Beyaz", hex: "#F5F5F0" },
  { name: "Mavi", hex: "#007AFF" }],

  models: ["10.000 mAh", "20.000 mAh", "30.000 mAh 140W"],
  isNew: false,
  category: "Powerbank",
  description:
  "PowerCore Ultra 30000, 140W çift yönlü hızlı şarj teknolojisiyle hem cihazlarınızı hem de kendisini hızla şarj eder. 30.000 mAh kapasitesiyle laptop dahil tüm cihazlarınızı birden şarj edebilirsiniz. Dijital ekran, akıllı güç dağıtımı ve uçak güvenli tasarımıyla seyahatin vazgeçilmezi.",
  specs: [
  { label: "Kapasite", value: "10.000 / 20.000 / 30.000 mAh" },
  { label: "Maks. Çıkış", value: "140W (USB-C)" },
  { label: "Portlar", value: "2x USB-C + 2x USB-A" },
  { label: "Şarj Süresi", value: "1.5 saat (140W girişle)" },
  { label: "Uçak Uyumu", value: "Evet (30.000 mAh dahil)" },
  { label: "Ağırlık", value: "680g (30.000 mAh)" }],

  faqs: [
  {
    question: "Laptop şarj edebilir mi?",
    answer: "Evet, 140W USB-C çıkışı ile MacBook Pro, Dell XPS, ThinkPad gibi laptopları şarj edebilir. Laptopun USB-C PD şarjı desteklemesi gerekir."
  },
  {
    question: "Uçakta taşınabilir mi?",
    answer: "30.000 mAh model 111Wh kapasitesiyle uluslararası havayolu kurallarına uygundur (100Wh üzeri için havayolu onayı gerekebilir). 20.000 mAh ve altı modeller sorunsuz taşınabilir."
  },
  {
    question: "Aynı anda kaç cihaz şarj edilebilir?",
    answer: "4 porta aynı anda bağlanabilir. Akıllı güç dağıtımı, bağlı cihazlara optimum güç paylaşımı yapar."
  },
  {
    question: "Kablosuz şarj desteği var mı?",
    answer: "Standart modellerde kablosuz şarj yoktur. Kablosuz şarj özelliği için PowerCore Wireless modelini tercih edebilirsiniz."
  }]

},
{
  id: "external-ssd-swift",
  name: "SwiftDrive Pro SSD",
  tagline: "Hız, güvenlik, taşınabilirlik.",
  price: 2299,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c28c1f60-1777043255262.png",
  colors: [
  { name: "Uzay Grisi", hex: "#86868B" },
  { name: "Gümüş", hex: "#C0C0C0" }],

  models: ["500GB SSD", "1TB SSD", "2TB SSD", "4TB HDD", "8TB HDD"],
  isNew: true,
  category: "Harici SSD/HDD",
  description:
  "SwiftDrive Pro SSD, 2000MB/s okuma hızıyla profesyonel video düzenleme ve büyük dosya transferleri için tasarlanmıştır. Alüminyum kasa, IP55 toz ve su direnci ve 2 metre düşme korumasıyla en zorlu koşullarda güvenilir depolama sağlar. HDD modelleri ise büyük arşivler için uygun fiyatlı çözüm sunar.",
  specs: [
  { label: "SSD Okuma Hızı", value: "2000 MB/s (NVMe)" },
  { label: "SSD Yazma Hızı", value: "1800 MB/s" },
  { label: "HDD Hızı", value: "140 MB/s" },
  { label: "Bağlantı", value: "USB 3.2 Gen 2x2 (USB-C)" },
  { label: "Koruma", value: "IP55, 2m Düşme Koruması" },
  { label: "Uyumluluk", value: "Windows, macOS, Linux, PS5, Xbox" }],

  faqs: [
  {
    question: "4K video düzenleme için yeterli hızda mı?",
    answer: "Evet, 2000MB/s okuma hızıyla 4K ProRes ve 8K RAW video düzenleme için yeterlidir. Premiere Pro, DaVinci Resolve ve Final Cut Pro ile sorunsuz çalışır."
  },
  {
    question: "PS5 ile uyumlu mu?",
    answer: "SSD modeller PS5 genişletilmiş depolama olarak kullanılabilir. Ancak PS5 dahili SSD hızlarına ulaşmak için M.2 NVMe yuvası önerilir. Harici SSD PS5 oyunlarını depolamak için uygundur."
  },
  {
    question: "Şifreleme özelliği var mı?",
    answer: "Evet, AES 256-bit donanım şifreleme desteği mevcuttur. SwiftDrive uygulaması üzerinden şifre koruması etkinleştirilebilir."
  },
  {
    question: "HDD modeli ne kadar hızlı?",
    answer: "HDD modeller 140MB/s okuma hızı sunar. Büyük dosya arşivleme ve yedekleme için idealdir. Oyun veya video düzenleme için SSD modeller önerilir."
  },
  {
    question: "Garanti süresi ne kadar?",
    answer: "SSD modeller 5 yıl, HDD modeller 2 yıl garanti kapsamındadır. Veri kurtarma servisi için LuminaTech Care+ planına dahil olabilirsiniz."
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
          open ? "rotate-45" : ""}`}>
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
        open ? "max-h-96 pb-5" : "max-h-0"}`}>
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
                  "hover:ring-2 hover:ring-[#d2d2d7] hover:ring-offset-1"}`}
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
                  "bg-white text-[#1d1d1f] border-[#d2d2d7] hover:border-[#1d1d1f]"}`}>
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
                "bg-[#0071e3] text-white hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/30"}`}>
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