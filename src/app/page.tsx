import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center flex overflow-hidden mx-auto sm:px-10 px-5 w-[100vw] h-[100vh]">
      <div className="m-auto">
        <Hero />
      </div>
    </main>
  );
}
