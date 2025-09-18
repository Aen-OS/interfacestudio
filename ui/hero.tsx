import { TypingAnimation } from "../ui/magicui/typinganimation";
import { Highlighter } from "../ui/magicui/rough-notation";

export default function Hero() {
  return (
    <div className="text-primary-content flex-1 grid grid-cols-1 grid-rows-8 gap-1 min-h-screen mb-20">
      <div className="row-start-2 row-span-3 flex items-center justify-center">
        <h1 className="text-3xl font-bold font-manrope">
          <span className="text-4xl">I'm Anas Nedjai👋,</span>
          <br></br>a freelance web dev 🖥️ <br></br>who helps{" "}
          <Highlighter action="highlight" padding={0}>
            individuals
          </Highlighter>{" "}
          🙋‍♂️🙋‍♀️ and
          <Highlighter action="highlight" delay={1000} padding={0}>
            small businesses
          </Highlighter>{" "}
          📈 build their online presence without{" "}
          <Highlighter action="crossed-off" delay={1500}>
            breaking the bank
          </Highlighter>{" "}
          💰
        </h1>
      </div>
      <div className="row-start-6 flex items-center justify-start">
        <h2 className="text-base font-dm-sans">
          <Highlighter action="highlight" color="#87CEFA" delay={3000}>
            reach me on
          </Highlighter>
          <br></br>Email:
          <Highlighter action="underline" delay={3000}>
            <a href="mailto:anedjai0@gmail.com" className="link link-hover">
              anedjai0@gmail.com
            </a>
          </Highlighter>{" "}
          <br></br>Whatsapp:
          <Highlighter action="underline" delay={3000}>
            <a href="tel:+447988295902" className="link link-hover">
              +447988295902
            </a>
          </Highlighter>{" "}
          <br></br>free to chat{" "}
          <Highlighter action="highlight" color="#87CEFA" delay={3500}>
            Mon-Sun 09:30-17:00
          </Highlighter>
        </h2>
      </div>
      <div className="row-start-7 row-span-2 md:row-start-8 md:row-span-1 flex flex-col items-center justify-center">
        <p className="text-sm font-dm-sans">Scroll down for more</p>
        <div className="animate-bounce mt-2">
          <svg
            className="w-6 h-6 text-base=content"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
