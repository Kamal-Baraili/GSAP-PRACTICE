import { useEffect, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const box1 = useRef<HTMLDivElement | null>(null);
  const box2 = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const textSecondRef = useRef<HTMLDivElement | null>(null);
  const textThirdRef = useRef<HTMLDivElement | null>(null);
  const heading1 = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (
      box1.current &&
      box2.current &&
      container.current &&
      textRef.current &&
      textSecondRef.current &&
      textThirdRef.current
    ) {
      // Set initial states
      gsap.set([box1.current, box2.current], { x: "0%" });
      gsap.set(textRef.current, { y: "0%", opacity: 1 });
      gsap.set(textSecondRef.current, { y: "0%", opacity: 0 });
      gsap.set(textThirdRef.current, { y: "0%", opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=100%", // Extended duration for smooth scrolling
          scrub: 1, // Tie animation to scroll
          pin: true, // Pin the container
          toggleActions: "play none none none", // Only play on forward scroll, no reset
        },
      });

      // Animation sequence
      tl
        // Move the gates
        .to(box1.current, {
          x: "-100%",
          ease: "power2.inOut",
          duration: 1,
        })
        .to(
          box2.current,
          {
            x: "100%",
            ease: "power2.inOut",
            duration: 1,
          },
          "<" // Sync with box1
        )
        // Fade out first text
        .to(
          textRef.current,
          {
            y: "-10%",
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.5,
          },
          ">-0.5" // Start fading out slightly before gates finish
        )
        // Fade in second text and lock it
        .to(
          textSecondRef.current,
          {
            y: "-10%",
            opacity: 1,
            ease: "power2.inOut",
            duration: 1,
            onComplete: () => {
              // Ensure the second text stays visible after animation
              gsap.set(textSecondRef.current, { opacity: 0 });
            },
          },
          ">-0.2" // Start after first text fades out
        )

        .to(
          textThirdRef.current,
          {
            y: "-10%",
            opacity: 1,
            ease: "power2.inOut",
            duration: 0.8,
            onComplete: () => {
              // Ensure the second text stays visible after animation
              gsap.set(textThirdRef.current, { opacity: 1 });
            },
          },
          ">" // Start after first text fades out
        );

      // Cleanup to prevent repeat on scroll back
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <>
      <div
        ref={container}
        className="h-screen relative overflow-hidden bg-[#F7F4F4]"
      >
        <div className="flex justify-between absolute inset-0">
          <div ref={box1} className="h-full w-1/2 ">
            <img
              src="/gate1.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div ref={box2} className="h-full w-1/2 ">
            <img
              src="/gate2.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
        >
          <h2 ref={heading1} className="text-7xl font-bold text-[#F5C230]">
            Welcome Inside
          </h2>
        </div>

        <div
          ref={textSecondRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-5"
        >
          <h2 className="text-4xl font-bold text-[#F5C230]">
            The Gate has been opened
          </h2>
        </div>

        <div
          ref={textThirdRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-5"
        >
          <h2 className="text-4xl font-bold text-[#F5C230]">
            You've Entered inside the gate.
          </h2>
        </div>
      </div>
      <div className="h-[100vh] flex items-center justify-center pointer-events-none z-5">
        <h2 className="text-4xl font-bold text-[#F5C230]">Next Container</h2>
      </div>
    </>
  );
}

export default App;
