import React from "react";
// import Hero from "@/components/Hero";
import Hero from "@/components/Hero1";
import ScaleBusinessWithUs from "@/components/ScaleBusiness";
import FeatureGrid3x3 from "@/components/FeatureGrid3x3";
import GridWithFlexVerticalLayout from "@/components/GridWithFlexVerticalLO";
// import ContactUsMain from "@/components/ContactUs"; // removed due to error

export function LandingPage() {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 justify-center items-center px-5">
      <div className="w-full h-[85vh]">
        <Hero />
      </div>
      <div className="min-w-[90vw] lg:min-w-[80vw]">
        <ScaleBusinessWithUs />
      </div>
      <div className="pt-40 z-10">
        <FeatureGrid3x3 />
      </div>
      <div className="w-[80vw] pb-20 pt-36 z-10">
        <GridWithFlexVerticalLayout />
      </div>
      <div className="h-96 bg-white-500">ok</div>
    </main>
  );
}

function TestingLandingPage() {
  return <div>Internal Link only</div>;
}

export default TestingLandingPage;
