import React from "react";
// import Hero from "@/components/Hero";
import HeroTemp from "@/components/HeroTemp";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

export function TestHero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <a href="#">
        <MagicButton
          title="Website in development"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
        Software engineer driven by learning and challenges.
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground">
        I aim to create websites that are clean, well-organized, and provide an
        excellent user experience.
      </p>
      <div className="flex gap-4 py-4 md:pb-10 items-center">
        <a href="/about">
          <MagicButton
            title="Learn more"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <a href="/GitHub">
          <MagicButton
            title="GitHub"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
}

export function TestFeatureSection() {
  return (
    <section className="pb-6">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-white">
          <div className="mb-16 text-center">
            <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h4>
            <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 font-sans lg:text-[10vh] sm:text-3xl">
              Creative power that goes beyond templates
            </p>
          </div>
          <div className="flex flex-wrap my-12">
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
              <div className="flex items-center mb-6">
                <FaLocationArrow />
                <div className="ml-4 text-xl">Increase sales</div>
              </div>
              <p className="leading-loose text-gray-500">
                Consectetur pariatur irure exercitation sit amet id consectetur
                consecteturmagna et Lorem labore qui velit.
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
              <div className="flex items-center mb-6">
                <FaLocationArrow />
                <div className="ml-4 text-xl">Enterprise-ready</div>
              </div>
              <p className="leading-loose text-gray-500 ">
                Labore duis pariatur est exercitation laboris cupidatat amet
                cillum. Amet nisi ullamco.
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
              <div className="flex items-center mb-6">
                <FaLocationArrow />
                <div className="ml-4 text-xl">Unlimited growth</div>
              </div>
              <p className="leading-loose text-gray-500">
                Elit deserunt nisi esse duis cupidatat proident sit minim mollit
                officia pariatur incididunt in tempor.
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
              <div className="flex items-center mb-6">
                <FaLocationArrow />
                <div className="ml-4 text-xl">Recommended by experts</div>
              </div>
              <p className="leading-loose text-gray-500">
                Velit sit tempor pariatur quis pariatur incididunt culpa dolor
                voluptate officia incididunt velit dolore.
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
              <div className="flex items-center mb-6">
                <FaLocationArrow />
                <div className="ml-4 text-xl">Modern platform</div>
              </div>
              <p className="leading-loose text-gray-500">
                Laboris elit consectetur sint nisi eu mollit proident sit magna
                velit adipisicing consequat amet reprehenderit.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-8">
              <div className="flex items-center mb-6">
                <FaLocationArrow />
                <div className="ml-4 text-xl">Integrations</div>
              </div>
              <p className="leading-loose text-gray-500">
                Nostrud excepteur incididunt proident sit nulla ipsum sunt
                nostrud est esse adipisicing irure officia consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    // <main className="relative bg-black-100 justify-center items-center flex overflow-hidden mx-auto sm:px-10 px-5 w-[100vw] h-[30vh]">
    <main className="relative bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 justify-center items-center px-5">
      <div className="w-full">
        <HeroTemp />
      </div>
      <div className="h-32 bg-blue-300 w-[80vw] z-10 flex justify-center items-center">
        <h1 className="text-white-1000">ok fine</h1>
      </div>
      <div className="pt-24 flex flex-col items-center max-w-[80vw] z-10">
        <div className="bg-red-500 flex flex-col justify-center">
          <div>
            <p className="mt-2 mb-4 text-white-1000 font-sans font-semibold text-left tracking-tight text-[9vw] lg:text-[6vw] lg:text-center">
              Tooling that scales your business for good
            </p>
            <div className="flex items-center border-2 lg:justify-center">
              <p className="my-4 tracking-tight text-left lg:text-center w-[57vw] text-m font-normal lg:text-xl lg:max-w-[35vw]">
                You have option to choose from our wide variety of
                enterprise-grade tools --- or if you fancy a custom one, we can
                help you with that too.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40 z-10">
        <TestFeatureSection />
      </div>
    </main>
  );
}
