import CTA from "@/ui/cta";
import Hero from "../ui/hero";
import About from "../ui/about";
import ProjectCard from "../ui/project";
import Skills from "../ui/skills";
import baLogo from "../public/BA-whitebg.png";

// hero -> about -> work -> testimonials -> cta -> footer
// blog + services pages later on

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="text-base-content flex grid grid-cols-1">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-6xl md:text-7xl text-center font-manrope font-bold">
            My Work
          </h1>
          <p className="text-base md:text-lg mt-5 text-center">
            I like to work with React & Next.JS but for most front end projects,
            I'll use Astro.
            <br />
            <br /> Take a look below at my front-end project!
          </p>
        </div>
        {/* future feature: only projects are shown at first but user can show templates and then filter projects/templates using filters: personal, e-commerce, docs, education, */}
        {/* two buttons: template & project */}
        {/* filter function: portfolio, e-commerce, education, business */}
        <div className="flex-1 flex-col items-center justify-center">
          <ProjectCard
            src={baLogo}
            company="Bloom Academy"
            link="https://bloomacademy.uk"
          />
        </div>
      </div>
      <CTA />
    </>
  );
}
