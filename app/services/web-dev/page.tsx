import CTA from "@/ui/cta";

// web development
// html, css, and javascript
// seo
// accessibility
// performance
// open source
// bespoke

export default function WebDev() {
  return (
    <div className="text-primary-content grid grid-cols-1 grid-rows-4 min-h-screen">
      <div className="">
        <h1 className="text-7xl">Freelance Web Development</h1>
        <p>I design mobile-first responsive websites.</p>
        <p>
          Need a complex website, let's get to talking and figuring out what's
          best for you in terms of hosting, what you actually need from your
          website and how web development can help you achieve that.
        </p>
        <p>
          Complex could mean full-on e-commerce, it could mean a website that
          needs loads of user interactivity like an education website, or you
          just want a website that really pops.{" "}
        </p>
        <p>
          Need a simple website? let me know your needs and requirements and
          we'll get going with jamstack development.
        </p>
        <p>
          Simple could mean completely static, only proividing information to
          users, or a blog, or food review website, etc. We always start with
          simple and build on it, that way we don't overcomplicate things.
        </p>
      </div>
      <CTA />
    </div>
  );
}
