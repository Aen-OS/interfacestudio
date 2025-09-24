import CTA from "@/ui/cta";
import Hero from "../ui/hero";
import About from "../ui/about";
import Card from "../ui/card";
import Skills from "../ui/skills";

// hero -> about -> work -> testimonials -> cta -> footer
// blog + services pages later on

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="text-primary-content grid grid-cols-1 grid-rows-8 min-h-screen mt-10">
        <div className="row-span-1 row-start-1 flex items-center justify-center">
          <h1 className="text-7xl text-center font-manrope font-bold">
            My Work
          </h1>
        </div>
        <div className="row-start-2 flex items-center justify-center">
          <Card
            src=""
            company="bloom academy"
            link="bloom-academy-atd.pages.dev"
          />
        </div>
      </div>
      <CTA />
    </>
  );
}
