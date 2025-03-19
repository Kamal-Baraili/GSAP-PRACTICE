// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register GSAP ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const VideoBackground: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null); // Reference to the container

//   useEffect(() => {
//     const video = videoRef.current;
//     const container = containerRef.current;
//     if (!video || !container) return;

//     const src = video.currentSrc || video.src;
//     console.log(video, src);

//     // iOS video activation
//     const onceFn = (e: Event) => {
//       video.play();
//       video.pause();
//       document.documentElement.removeEventListener("touchstart", onceFn);
//     };
//     document.documentElement.addEventListener("touchstart", onceFn);

//     // Scroll Control Timeline using GSAP
//     const tl = gsap.timeline({
//       defaults: { duration: 1 },
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//         pin: true, // Pinning the container during scroll
//         pinSpacing: false, // Ensure no extra space appears when pinning
//       },
//     });

//     // Wait for video metadata to load and set scroll-based timeline
//     const handleLoadedMetadata = () => {
//       tl.fromTo(
//         video,
//         {
//           currentTime: 0,
//         },
//         {
//           currentTime: video.duration || 1,
//         }
//       );
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);

//     // Fetching the video to avoid dropping segments (Blob method)
//     const fetchVideoBlob = () => {
//       if (typeof window.fetch === "function" && src) {
//         fetch(src)
//           .then((response) => response.blob())
//           .then((response) => {
//             const blobURL = URL.createObjectURL(response);
//             const t = video.currentTime;
//             document.documentElement.addEventListener("touchstart", () => {
//               video.play();
//               video.pause();
//             });
//             video.setAttribute("src", blobURL);
//             video.currentTime = t + 0.01;
//           })
//           .catch((error) => {
//             console.error("Failed to fetch video:", error);
//           });
//       } else {
//         console.error("Fetch API is not available in this environment.");
//       }
//     };

//     // Using setTimeout to delay fetching video
//     const timeoutId = setTimeout(fetchVideoBlob, 1000);

//     // Clean up event listeners and timeout when component unmounts
//     return () => {
//       document.documentElement.removeEventListener("touchstart", onceFn);
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         height: "200vh", // Make sure to have enough height to scroll
//         overflow: "hidden", // Prevent overflow issues
//         position: "relative",
//       }}
//     >
//       <video
//         ref={videoRef}
//         className="video-background"
//         muted
//         loop
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "contain", // Ensure video covers the full screen
//           zIndex: -1, // Put the video behind content if needed
//         }}
//       >
//         <source src="output.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoBackground;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images for your container
import image1 from "/gate1.jpg";
import image2 from "/gate2.jpg";
import image3 from "/gate3.jpg";
import image4 from "/gate4.jpg";

gsap.registerPlugin(ScrollTrigger);

const HorizontalImageSlider = () => {
  // Type the refs to point to specific HTML elements
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Type the ScrollTrigger instance reference
  const scrollTriggerInstance = useRef<ScrollTrigger | undefined>(undefined);

  useEffect(() => {
    // GSAP Timeline for scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000", // Adjust this based on the length you want
        scrub: true,
        pin: true, // Pins the container while scrolling
        anticipatePin: 1,
      },
    });

    // Store the ScrollTrigger instance
    scrollTriggerInstance.current = tl.scrollTrigger;

    tl.to(imageContainerRef.current, {
      xPercent: -100 * (4 - 3), // Total images - visible images
      ease: "none",
    });

    // Cleanup the ScrollTrigger instance when the component unmounts
    return () => {
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] overflow-clip"
    >
      <div ref={imageContainerRef} className="flex w-full h-full gap-70">
        <img src={image1} alt="Image 1" className="w-[10%] object-cover" />
        <img src={image2} alt="Image 2" className="w-[10%] object-cover" />
        <img src={image3} alt="Image 3" className="w-[10%] object-cover" />
        <img src={image4} alt="Image 4" className="w-[10%] object-cover" />
      </div>
    </div>
  );
};

export default HorizontalImageSlider;
