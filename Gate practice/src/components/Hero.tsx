import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const imageData: string[] = [
    "/gate1.png",
    "/gate2.png",
    "/gate3.png",
    "/gate2.png",
    "/gate3.png",
    "/gate3.png",
    "/gate2.png",
    "/gate3.png",
  ];

  const mainRef = useRef<HTMLDivElement | null>(null);
  const heroContainerRef = useRef<HTMLDivElement | null>(null);
  const redDivRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const heroContainer = heroContainerRef.current;
    const images = mainRef.current;
    const redDiv = redDivRef.current;
    const wrapper = wrapperRef.current;

    if (!heroContainer || !images || !redDiv || !wrapper) return;

    const totalWidth = images.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth + 400;

    wrapper.style.height = `${window.innerHeight + scrollDistance}px`;

    let lastScrollY = window.scrollY;
    let scrolledDistance = 0;
    let translateX = 0;

    // Track the position where Hero should be pinned
    let heroPinPosition = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // const scrollDelta = currentScrollY - lastScrollY;
      const wrapperRect = wrapper.getBoundingClientRect();

      // Calculate the point where pinning should start
      if (heroPinPosition === 0 && wrapperRect.top <= 0) {
        heroPinPosition = currentScrollY;
      }

      // Get the current position relative to the pin point
      const relativePosition = currentScrollY - heroPinPosition;

      // Reset when outside the range of our component
      if (wrapperRect.top > 0) {
        // Above the component - reset everything
        setIsPinned(false);
        scrolledDistance = 0;
        translateX = 0;
        gsap.set(images, { x: 0 });
        resetSpotlight();
        heroPinPosition = 0; // Reset the pin position
        lastScrollY = currentScrollY;
        return;
      }

      // When we're in the pinning range
      if (relativePosition >= 0 && relativePosition <= scrollDistance) {
        setIsPinned(true);

        // Calculate scroll progress directly from relative position
        scrolledDistance = relativePosition;

        // Calculate translation
        const progress = scrolledDistance / scrollDistance;
        translateX = -(progress * (totalWidth - window.innerWidth));
        gsap.set(images, { x: translateX });

        updateSpotlight();
      } else if (relativePosition < 0) {
        // Above the pinning point but still within the component
        setIsPinned(false);
        scrolledDistance = 0;
        translateX = 0;
        gsap.set(images, { x: 0 });
        resetSpotlight();
      } else if (relativePosition > scrollDistance) {
        // Beyond the scroll distance, unpin
        setIsPinned(false);
      }

      lastScrollY = currentScrollY;
    };

    const updateSpotlight = () => {
      if (!images || !redDiv) return;

      // Select the elements with the class "img" (your detection points)
      const imgDetectionPoints = Array.from(
        images.querySelectorAll(".img")
      ) as HTMLElement[];

      let redDivVisible = false;
      const redDivRect = redDiv.getBoundingClientRect();

      // Check if any of the img detection points overlap with redDiv
      imgDetectionPoints.forEach((imgPoint) => {
        const imgPointRect = imgPoint.getBoundingClientRect();

        const isOverlapping =
          imgPointRect.right >= redDivRect.left &&
          imgPointRect.left <= redDivRect.right &&
          imgPointRect.bottom >= redDivRect.top &&
          imgPointRect.top <= redDivRect.bottom;

        if (isOverlapping) {
          redDivVisible = true;

          // Find the parent container of this detection point
          const imgContainer = imgPoint.closest(
            ".flex-shrink-0"
          ) as HTMLElement;
          if (imgContainer) {
            gsap.to(imgContainer, { opacity: 1, scale: 1.2, duration: 0.1 });
          }
        }
      });

      // If any detection point is overlapping, show the redDiv
      gsap.to(redDiv, { opacity: redDivVisible ? 1 : 0, duration: 0.1 });

      // For any container not marked as visible, reset its opacity and scale
      const allContainers = Array.from(
        images.querySelectorAll(".flex-shrink-0")
      ) as HTMLElement[];

      if (!redDivVisible) {
        allContainers.forEach((container) => {
          gsap.to(container, { opacity: 0.6, scale: 1, duration: 0.1 });
        });
      }
    };

    const resetSpotlight = () => {
      if (!images || !redDiv) return;

      const imagesArray = Array.from(images.children).filter((child) =>
        child.querySelector(".img")
      ) as HTMLElement[];

      imagesArray.forEach((imgContainer) => {
        gsap.to(imgContainer, { opacity: 0.6, scale: 1, duration: 0.3 });
      });

      gsap.to(redDiv, { opacity: 0, duration: 0.3 });
    };

    // Run handleScroll once to initialize
    setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Reset on unmount
      gsap.set(images, { x: 0 });
      resetSpotlight();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <div
        ref={heroContainerRef}
        className="relative h-screen overflow-hidden"
        style={{
          position: isPinned ? "sticky" : "relative",
          top: isPinned ? 0 : "auto",
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <img
          className="w-50 h-30 absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
          src="/hanging-lamp.png"
          alt="Hanging Lamp"
        />
        <div
          ref={redDivRef}
          className="w-80 h-200 absolute top-30 left-1/2 transform -translate-x-1/2 z-10 opacity-0 transition-all duration-300"
        >
          <img
            className="w-full h-full opacity-95"
            src="/light-beam.png"
            alt=""
          />
        </div>
        <div
          ref={mainRef}
          className="flex pt-60 px-40 whitespace-nowrap will-change-transform"
        >
          <div className="inline-block flex-shrink-0">
            <div className="w-[405px] h-[450px] px-20 transition-all duration-300 transform mx-4"></div>
          </div>
          {imageData.map((src, index) => (
            <div key={index} className="inline-block flex-shrink-0">
              <div className="w-[450px] h-[450px] px-5 mr-80 transition-all duration-300 transform mx-4">
                <img
                  className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
                  src={src}
                  alt={`Slide ${index}`}
                />
                <div className="img w-[1px] h-5 absolute top-0 left-[50%]"></div>
                <h4 className="text-white text-7xl absolute top-[40%] left-[30%] z-50">
                  Gate
                </h4>
              </div>
            </div>
          ))}

          <div className="w-[450px] h-[450px] px-5 mr-80 transition-all duration-300 transform mx-4">
            <h2 className="text-4xl text-amber-300">Wanna See More?</h2>
            <div className="img w-[1px] h-5 absolute top-0 left-[50%]"></div>
          </div>
          <div className="inline-block flex-shrink-0">
            <div className="w-[360px] h-[450px] px-20 transition-all duration-300 transform mx-4"></div>
          </div>
          <div className="inline-block flex-shrink-0">
            <div className="w-[50px] h-[450px] px-20 transition-all duration-300 transform mx-4"></div>
          </div>
        </div>
        {isPinned && <div style={{ height: "100vh" }}></div>}
      </div>
    </div>
  );
};

export default Hero;
