import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import CampaignSection from "./components/CampaignSection";
import ProductShowcase from "./components/ProductShowcase";
import AIStyleQuiz from "./components/AIStyleQuiz";
import CTABanner from "./components/CTABanner";

// DÜZELTİLMİŞ İTHALAT (IMPORT):
// @/ işareti src klasörünü temsil eder. Dosyan src/components içindeyse yol budur:
import EnergyTester from "@/components/EnergyTester"; 

// NOT: Eğer dosya hala src/components/ui içindeyse yukarıdaki satırı şu şekilde değiştir:
// import EnergyTester from "@/components/ui/EnergyTester";

export default function HomepagePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <HeroSection />
      
      <CampaignSection />
      
      <ProductShowcase />
      
      {/* YAPAY ZEKA OYUNLAŞTIRMA BÖLÜMÜ */}
      <section className="py-16">
        <EnergyTester />
      </section>
      
      <AIStyleQuiz />
      
      <CTABanner />
      
      <Footer />
    </main>
  );
}