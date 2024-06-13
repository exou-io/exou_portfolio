import React from "react";
import Image from "next/image";

import { EvervaultCard, Icon } from "@/components/ui/EvervaultCard";

function ProfilePhotoBox() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="" className="flex" />
      {/* <Image
        className="w-auto h-auto flex items-center justify-center m-auto z-50"
        // src="/EXOU_welcome_logo_design.jpg"
        src="/Zeeshan_Siddiqui-profile.jpeg"
        width={300}
        height={300}
        alt="Display picture of Zeeshan Haider Siddiqui"
        priority
        style={{
          width: "auto",
          height: "auto",
        }}
      /> */}
    </div>
  );
}

export default ProfilePhotoBox;
