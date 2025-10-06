import CTA from "@/ui/cta";

// web design

export default function WebDesign() {
  return (
    <div className="text-primary-content grid grid-cols-1 grid-rows-4 min-h-screen">
      <div className="">
        <h1 className="text-7xl">Freelance Web Design</h1>
        <p>I design mobile-first responsive websites.</p>
      </div>
      <CTA />
    </div>
  );
}
