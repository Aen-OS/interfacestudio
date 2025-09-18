import { Highlighter } from "@/ui/magicui/rough-notation";

export default function Contact() {
  return (
    <div className="text-primary-content grid grid-cols-1 grid-rows-4">
      <div className="row-start-2">
        <h1 className="text-4xl font-bold font-manrope mb-5">
          Interested in starting a project?
        </h1>
        <p className="text-base">
          If you have a project you'd like to discuss, you can email me at{" "}
          <Highlighter action="underline" delay={0}>
            <a className="link link-hover" href="mailto:anedjai@outlook.com">
              anedjai@outlook.com
            </a>
          </Highlighter>{" "}
          or call me on{" "}
          <Highlighter action="underline" delay={0}>
            <a className="link link-hover" href="tel:+447988295902">
              +447988295902
            </a>
          </Highlighter>{" "}
          so we can discuss the next steps to building something great.
        </p>
      </div>
    </div>
  );
}
