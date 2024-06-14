import React from "react";
// import Hero from "@/components/Hero";
import Hero from "@/components/Hero1";
import ScaleBusinessWithUs from "@/components/ScaleBusiness";
import ContactWithNewsletter from "@/components/ContactNewsletter";
import ScrollToTop from "@/components/ScrollToTop";

export default function LandingPage() {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 justify-center items-center px-5">
      <div className="w-full h-[85vh]">
        <Hero />
      </div>
      <div className="min-w-[90vw] lg:min-w-[90vw] flex justify-center">
        <ScaleBusinessWithUs />
      </div>
      <div className="w-full h-[100vh] relative">
        <ContactWithNewsletter />
      </div>
      <ScrollToTop />
    </main>
  );
}
