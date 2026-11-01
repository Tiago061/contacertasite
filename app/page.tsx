import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Privacy } from "@/components/sections/Privacy";
import { Download } from "@/components/sections/Download";
import { Faq } from "@/components/sections/Faq";
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <Privacy />
      <Download />
      <Faq />
    </>
  );
}
