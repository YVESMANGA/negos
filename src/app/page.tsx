import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Expertises from "@/components/Expertises";
import Hero from "@/components/Hero";
import Temoignages from "@/components/Temoignages";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Expertises />
      <About />
      <Catalog />
      <Temoignages />
    </div>
  );
}
