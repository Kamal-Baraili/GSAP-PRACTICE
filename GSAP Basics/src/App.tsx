import "./index.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register ScrollTrigger and MotionPathPlugin with GSAP
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ScrollDrivenSVGPathFollower = () => {
  const svgPathRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Select the path in the SVG
    const path = svgPathRef.current;
    const follower = followerRef.current;

    // GSAP ScrollTrigger animation with MotionPathPlugin
    gsap.to(follower, {
      scrollTrigger: {
        trigger: path,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      motionPath: {
        path: path,
        align: path,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);

  return (
    <div style={{ height: "150vh" }}>
      <svg
        width="600"
        height="400"
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", margin: "auto" }}
      >
        <path
          ref={svgPathRef}
          d="M50,300 C150,100 250,100 350,300 S550,500 600,300"
          fill="none"
          stroke="#3498db"
          strokeWidth="4"
        />
        <circle ref={followerRef} cx="50" cy="300" r="8" fill="#e74c3c" />
      </svg>
    </div>
  );
};

export default ScrollDrivenSVGPathFollower;
