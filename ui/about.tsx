import Skills from "./skills";

export default function About() {
  return (
    <div className="flex-1 grid grid-cols-1 grid-rows-5 gap-1 min-h-screen text-primary-content">
      <h1 className="text-7xl row-start-1 row-span-1 flex items-center justify-center font-manrope font-bold">
        About Me
      </h1>
      <div className="mt-10 row-start-2 row-span-2 flex-col items-center justify-center text-base font-dm-sans">
        <p className="">
          I'm 25 years old. Self-made. A freelance web designer and developer
          who grew up glued to a screen. Most of my childhood? Surfing the web,
          diving into research rabbits holes, getting lost in video content and
          browser games. Adobe Flash was my companion—a good one at that. Rest
          in peace, old friend.
        </p>
        <p className="">
          Websites have always been in my blood. But a few years ago, I decided
          to go deeper, transforming casual familiarity into professional
          expertise as a front-end engineer. Check out my tech cloud if you're
          curious about what I work with—it's evolved quite a bit from those
          Flash game days, and I've built skills that turn ideas into polished,
          functional websites that actually work for your business.
        </p>
        <p className="">
          Need an online presence? Want to build a professional brand? Whether
          your project is complex or beautifully simple, let's talk. Get in
          touch. We'll have an honest conversation about what you need, what's
          possible, and how we can work together to make it happen.
        </p>
      </div>
      <div className="row-start-4 row-span-2 flex items-center justify-center">
        <Skills />
      </div>
    </div>
  );
}
