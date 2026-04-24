import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import ProductShowcase from "./components/ProductShowcase";
import SpecialOffers from "./components/SpecialOffers";
import Accessories from "./components/Accessories";
import CampaignSection from "./components/CampaignSection";
import YouthCampaign from "./components/YouthCampaign";
import AIStyleQuiz from "./components/AIStyleQuiz";
import CTABanner from "./components/CTABanner";

export default function HomepagePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Apple-style Hero Sections */}
      <HeroSection />
      
      {/* Product Showcase */}
      <ProductShowcase />
      
      {/* Special Offers & Discounts */}
      <SpecialOffers />
      
      {/* Accessories */}
      <section id="accessories">
        <Accessories />
      </section>
      
      {/* Gençlere Özel Kampanya */}
      <section id="gencler">
        <YouthCampaign />
      </section>
      
      {/* Why LuminaTech - Features */}
      <CampaignSection />
      
      {/* AI Product Recommendation Quiz */}
      <AIStyleQuiz />
      
      {/* Support & Quick Links */}
      <CTABanner />
      
      <Footer />
    </main>
  );
}
