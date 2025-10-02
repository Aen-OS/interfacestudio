"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScrollBlurText() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (!textElement) return;

    // Create the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "bottom bottom", // When bottom of text hits bottom of viewport
        end: "bottom top", // When bottom of text hits top of viewport
        scrub: 1, // Smooth scrubbing, takes 1 second to "catch up"
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    // Animate blur, opacity, and y position
    tl.to(textElement, {
      filter: "none",
      opacity: 0,
      y: 0, // Move up slightly as it blurs
      duration: 1,
      ease: "power2.out",
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={textRef}
      className="row-start-7 row-span-2 md:row-start-8 md:row-span-1 flex flex-col items-center justify-center"
    >
      <p id="about" className="test text-sm font-dm-sans">
        Scroll down for more
      </p>
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
  );
}
