import React from "react";
import Image from "next/image";

import { EvervaultCard, Icon } from "@/components/ui/EvervaultCard";

import ProfileHeroSection from "@/components/Profile/ProfileHero";
import ProfilePhotoBox from "@/components/Profile/ProfilePhotoBox";
import ContactWithNewsletter from "@/components/ContactNewsletter";

export function EvervaultCardDemo() {
  return (
    <section>
      <section>
        <ProfileHeroSection />
      </section>
      <div className="grid grid-cols-3">
        <div className="flex flex-col  bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 border-2 rounded-xl pt-2 pb-2 pl-2 justify-center h-32">
          <div>
            <h1 className="flex text-3xl text-white-800">Zeeshan Siddiqui</h1>
          </div>
          <div>
            <h1 className="flex text-sm text-black-100">
              Architect Data and AI platforms
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-gray-800 border-2 rounded-xl pt-2 pb-2 pl-2 justify-center h-32 col-span-2">
          <div>
            <h1 className="flex text-2xl text-white-100">More about me</h1>
          </div>
          <div>
            <h1 className="flex text-sm text-white-1000">
              Architect Data and AI platforms
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <h2>Coming Soon</h2>
        </div>
      </div>
      <ContactWithNewsletter />
    </div>
  );
}

export default Team;
