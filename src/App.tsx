import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ApartmentCards } from "./components/ApartmentCards";
import { QuickFormsSection } from "./components/QuickFormsSection";
import { Amenities } from "./components/Amenities";
import { FinancingSimulator } from "./components/FinancingSimulator";
import { LocationSection } from "./components/LocationSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { StickyBottomBar } from "./components/StickyBottomBar";
import { InterestModal } from "./components/InterestModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFormId, setSelectedFormId] = useState<string | undefined>(undefined);

  const handleOpenInterestModal = (formId?: string) => {
    setSelectedFormId(formId);
    setIsModalOpen(true);
  };

  const handleCloseInterestModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-amber-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenInterestModal={handleOpenInterestModal} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Launch Badges & Primary CTA */}
        <Hero onOpenInterestModal={handleOpenInterestModal} />

        {/* 2. Apartment Typologies & Direct "Tenho Interesse" Buttons for Each Unit */}
        <ApartmentCards onOpenInterestModal={handleOpenInterestModal} />

        {/* 3. Dedicated Section Highlighting the 3 Google Forms */}
        <QuickFormsSection />

        {/* 4. Condo Amenities & Leisure Facilities */}
        <Amenities onOpenInterestModal={() => handleOpenInterestModal()} />

        {/* 5. Interactive Financing & Payment Simulator */}
        <FinancingSimulator onOpenInterestModal={handleOpenInterestModal} />

        {/* 6. Neighborhood & Location Highlights */}
        <LocationSection onOpenInterestModal={() => handleOpenInterestModal()} />

        {/* 7. Frequently Asked Questions */}
        <FAQ onOpenInterestModal={() => handleOpenInterestModal()} />
      </main>

      {/* Footer with Links & Legal Disclaimers */}
      <Footer onOpenInterestModal={handleOpenInterestModal} />

      {/* Floating Bottom Sticky Bar for Continuous Lead Conversion */}
      <StickyBottomBar onOpenInterestModal={handleOpenInterestModal} />

      {/* "Tenho Interesse" Selector Modal with the 3 Google Forms */}
      <InterestModal
        isOpen={isModalOpen}
        onClose={handleCloseInterestModal}
        selectedFormId={selectedFormId}
      />
    </div>
  );
}
