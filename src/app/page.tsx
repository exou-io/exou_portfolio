import React from "react";
// import Hero from "@/components/Hero";
import Hero from "@/components/Hero1";
import ScaleBusinessWithUs from "@/components/ScaleBusiness";
import FeatureGrid3x3 from "@/components/FeatureGrid3x3";
import GridWithFlexVerticalLayout from "@/components/GridWithFlexVerticalLO";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 justify-center items-center px-5">
      <div className="w-full h-[85vh]">
        <Hero />
      </div>
      <div className="min-w-[90vw] lg:min-w-[80vw]">
        <ScaleBusinessWithUs />
      </div>
      <Footer />
    </main>
  );
}
