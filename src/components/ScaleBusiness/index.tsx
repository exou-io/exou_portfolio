"use client";
import React from "react";
import SystemsOverview from "@/components/SystemsOverview";
import BusinessScalingToolsHeader from "./ScalingToolsHeader";

export default function ScaleBusinessWithUs() {
  return (
    <section>
      <div className="pt-24 flex flex-col items-center min-w-full z-10">
        <div className="flex flex-col justify-center">
          <div className="h-[95vh]">
            <BusinessScalingToolsHeader />
          </div>
        </div>
      </div>

      <div className="pt-5 z-10 flex justify-center h-[100vh] min-w-full">
        <SystemsOverview />
      </div>
    </section>
  );
}
