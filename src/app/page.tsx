import React from "react";
// import Hero from "@/components/Hero";
import Hero from "@/components/Hero1";
import ScaleBusinessWithUs from "@/components/ScaleBusiness";
import FeatureGrid3x3 from "@/components/FeatureGrid3x3";
import GridWithFlexVerticalLayout from "@/components/GridWithFlexVerticalLO";
import Footer from "@/components/Footer";
import ContactWithNewsletter from "@/components/ContactNewsletter";
import ScrollToTop from "@/components/ScrollToTop";

export default function LandingPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="w-full h-[85vh]">
          <Hero />
        </div>
        <div className="min-w-[90vw] lg:min-w-[80vw]">
          <ScaleBusinessWithUs />
        </div>
        <div className="w-full h-[100vh] relative">
          <ContactWithNewsletter />
        </div>
        <ScrollToTop />
      </div>
    </main>
  );
}
