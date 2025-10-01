import { Highlighter } from "./magicui/rough-notation";

export default function CTA() {
  return (
    <section className="py-16 border-t sm:border-none border-black text-base-content">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 font-manrope">
          Ready to Build Something?
        </h2>
        <p className="text-lg">
          If you have a{" "}
          <Highlighter color="oklch(70% 0.2 230)" action="circle">
            project
          </Highlighter>{" "}
          you'd like to discuss, email me at{" "}
          <Highlighter color="oklch(70% 0.2 230)" action="underline">
            <a className="link link-hover" href="mailto:anedjai@outlook.com">
              anedjai@outlook.com
            </a>
          </Highlighter>{" "}
          or call me now so we can discuss your needs and next steps to building
          something great.
        </p>
      </div>
    </section>
  );
}
