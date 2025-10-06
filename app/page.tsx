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
      <div className="text-base-content flex grid grid-cols-1">
        <div className="flex items-center justify-center py-20">
          <h1 className="text-7xl text-center font-manrope font-bold">
            My Work
          </h1>
        </div>
        {/* future feature: only projects are shown at first but user can show templates and then filter projects/templates using filters: personal, e-commerce, docs, education, */}
        {/* two buttons: template & project */}
        {/* filter function: portfolio, e-commerce, education, business */}
        <div className="flex-1 flex-col items-center justify-center">
          <ProjectCard src={null} company="wheel good bike shop" link={null} />
        </div>
      </div>
      <CTA />
    </>
  );
}
