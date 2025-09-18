import CTA from "@/ui/cta";
import Hero from "../ui/hero";
import Banner from "../ui/banner";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="text-primary-content grid grid-cols-1 grid-rows-8 min-h-screen mt-10">
        <div className="row-span-1 row-start-1 flex items-center justify-center">
          <h1 className="text-7xl text-center font-manrope font-bold">
            My Work
          </h1>
        </div>
        <div className="row-start-3 flex items-center justify-center">
          <p>display projects here</p>
        </div>
      </div>
      <CTA />
    </>
  );
}
