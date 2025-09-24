import Skills from "./skills";

export default function About() {
  return (
    <div className="flex-1 grid grid-cols-1 grid-rows-4 gap-1 min-h-screen mb-20 text-primary-content">
      <h1 className="text-7xl row-start-1 row-span-1 flex items-center justify-center font-manrope font-bold">
        About Me
      </h1>
      <div className="mt-10 row-start-2 row-span-3 flex-col items-center justify-center text-base font-dm-sans">
        <p className="">
          I'm a self-made 25 year old freelance web designer and developer.
          Growing up I'd spend most of my time surfing the web, learning and
          researching something, or entertaining myself with video content and
          browser games (rip Adobe Flash, what a good companion it was).
        </p>
        <p className="">
          So I've always been familiar with websites, and for the past few
          years, I've taken it up a notch turning myself into a front-end
          engineer (check out my tech cloud!).
        </p>
        <p className="">
          If you're interested in establishing your online presence or creating
          a professional brand, whether you think you need something complex or
          have a simple project in mind, feel free to get in touch and we can
          have an honest conversation.
        </p>
      </div>
      <Skills />
    </div>
  );
}
