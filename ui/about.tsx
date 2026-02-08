import Skills from "./skills";
import { Highlighter } from "../ui/magicui/rough-notation";


export default function About() {
  return (
    <div className="flex grid grid-cols-1 min-h-screen text-base-content pt-8">
      <h1 className="text-7xl text-center font-manrope font-bold mb-10 md:mb-10z">
        About Me
      </h1>
      <div className="flex flex-col items-center justify-center text-base font-dm-sans text-center">
        <p className="">
          I'm 25 years old. Self-made. A freelance web designer and developer
          who grew up glued to a screen. Most of my childhood? Surfing the web,
          diving into research rabbits holes, getting lost in video content and
          browser games.<br/><br/>
        </p>
        <p className="">
          Websites have always been in my blood. But a few years ago, I decided
          to go deeper, transforming casual familiarity into professional
          expertise as a front-end engineer. Check out my tech cloud if you're
          curious about what I work with - I've built skills that turn ideas into polished,
          functional websites that actually work for your business.<br/><br/>
        </p>
        <p className="">
          So do you need an online presence? Want to build a professional brand?
          Whether your project is complex or beautifully simple, let's talk. <br/><br/>
          <Highlighter
            action="underline"
            padding={0}
            color="oklch(70% 0.2 230)"
          >
            <a href="/contact"><button className="btn btn-ghost rounded-xl">Get in touch</button></a> 
            </Highlighter>
            <br/><br/>We'll have an honest conversation about what you need,
          what's possible, and how we can work together to make it happen.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Skills />
      </div>
    </div>
  );
}
