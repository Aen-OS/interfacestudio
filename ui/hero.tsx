import { TypingAnimation } from "../ui/magicui/typinganimation";
import { Highlighter } from "../ui/magicui/rough-notation";
import ScrollDown from "./scroll";

export default function Hero() {
  return (
    <div className="text-primary-content flex-1 grid grid-cols-1 grid-rows-8 gap-1 min-h-screen">
      <div className="row-start-2 row-span-3 flex items-center justify-center">
        <h1 className="text-3xl font-bold font-manrope">
          <span className="text-4xl">I'm Anas Nedjai👋,</span>
          <br></br>a freelance web dev 🖥️ <br></br>who helps{" "}
          <Highlighter action="highlight" padding={0}>
            individuals
          </Highlighter>{" "}
          🙋‍♂️🙋‍♀️ and
          <Highlighter action="highlight" delay={500} padding={0}>
            small businesses
          </Highlighter>{" "}
          📈 build their online presence without{" "}
          <Highlighter action="crossed-off" delay={1000}>
            breaking the bank
          </Highlighter>{" "}
          💰
        </h1>
      </div>
      <div className="row-start-6 flex items-center justify-start">
        <h2 className="text-base font-dm-sans">
          <Highlighter action="highlight" color="#87CEFA" delay={2000}>
            reach me on
          </Highlighter>
          <br></br>Email:
          <Highlighter action="underline" delay={2000}>
            <a href="mailto:anedjai0@gmail.com" className="link link-hover">
              anedjai0@gmail.com
            </a>
          </Highlighter>{" "}
          <br></br>Whatsapp:
          <Highlighter action="underline" delay={2000}>
            <a href="tel:+447988295902" className="link link-hover">
              +447988295902
            </a>
          </Highlighter>{" "}
          <br></br>free to chat:{" "}
          <Highlighter action="highlight" color="#87CEFA" delay={2500}>
            whenever
          </Highlighter>
        </h2>
      </div>
      <ScrollDown />
    </div>
  );
}
