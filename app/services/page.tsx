import ServiceCard from "@/ui/service";

// services include web design, seo, development & jamstack, social media, branding
// website from scratch, redesign, consulting

export default function Services() {
  return (
    <div className="text-primary-content grid grid-cols-1 grid-rows-4 min-h-screen">
      <div className="row-start-2">
        <h1 className="text-4xl font-bold font-manrope mb-5">
          What I Can Do For <span>You</span>
        </h1>
        {/* graphics on web dev, web design, seo,  */}
        <h2 className="text-xl font-dm-sans">
          I offer a range of services to help you establish a strong online
        </h2>
        {/* three cards in the middle of the page, for ipad and smaller make them stack in column -> make card hoverable and clickable for users to click on and learn more about the services */}
        <div className="grid grid-cols-1 gap-4">
          <ServiceCard title="Freelance Web Design" icon={null}>
            I design mobile-first responsive websites.
          </ServiceCard>
          <ServiceCard title="Freelance Web Development" icon={null}>
            I develop fast and secure websites using modern technologies. Need
            something simpler? I've got you covered with Jamstack solutions.
          </ServiceCard>
          <ServiceCard title="Branding" icon={null}>
            We collaborate and I help you develop your brand identity, .
          </ServiceCard>
        </div>
      </div>
    </div>
  );
}
