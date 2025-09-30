import CTA from "@/ui/cta";
import Hero from "../ui/hero";
import About from "../ui/about";
import ProjectCard from "../ui/project";
import Skills from "../ui/skills";

// hero -> about -> work -> testimonials -> cta -> footer
// blog + services pages later on

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="text-primary-content grid grid-cols-1 grid-rows-4 min-h-screen">
        <div className="row-span-1 row-start-1 flex items-center justify-center">
          <h1 className="text-7xl text-center font-manrope font-bold">
            My Work
          </h1>
          {/* future feature: only projects are shown at first but user can show templates and then filter projects/templates using filters: personal, e-commerce, docs, education, */}
        </div>
        <div className="row-start-2 flex items-center justify-center">
          <ProjectCard
            src={null}
            company="bloom academy"
            link="bloom-academy-atd.pages.dev"
          />
        </div>
      </div>
      <CTA />
    </>
  );
}
