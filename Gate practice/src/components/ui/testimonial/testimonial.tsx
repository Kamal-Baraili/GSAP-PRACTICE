import TestimonialCard from "../../shared/card/testimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { reviewCardData } from "../../../db/mockdata";
import gsap from "gsap";

const Testimonial = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [ind, setInd] = useState(1);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: false,
  // };

  // const next = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext();
  //   }
  // };

  // const prev = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }
  // };

  // useEffect(() => {
  //   gsap.set(sliderRef.current, {
  //     x: 1000, // Set the initial X position to 0
  //     opacity: 0, // Set the initial Y position to 0
  //   });
  // }, []);

  const handleClick = () => {
    gsap.set(sliderRef.current, {
      x: 1000, // Set the initial X position to 0
      opacity: 0, // Set the initial Y position to 0
    });
    // GSAP animation to translate the div
    gsap.to(sliderRef.current, {
      x: 0, // Move the box 200px along the X-axis
      opacity: 100,
      duration: 0.5, // Duration of the animation in seconds
      ease: "power2.out", // Easing function for smooth transition
    });
  };

  return (
    <>
      <div className="pt-20 pb-30 rounded-t-4xl -mt-10 border-y border-y-zinc-800">
        <h2 className="text-primary text-6xl text-center">
          What Our Clients Say?
        </h2>
        <div className="w-9/11 mx-auto gap-8 relative">
          {/* <Slider {...settings} ref={sliderRef}> */}
          <div className="w-7/11 mx-auto mt-10 h-14 rounded-full flex justify-center transition-all duration-300 ease-in-out">
            {reviewCardData.map((key: any, index: any) => (
              <>
                <img
                  onClick={() => {
                    setInd(index);
                    handleClick();
                  }}
                  className={`rounded-full cursor-pointer ${
                    index === ind && "border-2 border-primary"
                  }`}
                  src={key.imgSrc}
                  alt="review-images"
                />
              </>
            ))}
          </div>

          <TestimonialCard
            imgSrc={reviewCardData[ind].imgSrc}
            reviewDesc={reviewCardData[ind].reviewDesc}
            reviewName={reviewCardData[ind].reviewName}
            reviewPost={reviewCardData[ind].reviewPost}
            sliderRef={sliderRef}
          />

          {/* </Slider> */}

          {/* <button
            className="w-10 absolute -left-20 top-1/2 text-2xl text-black bg-[white] p-2 rounded-full shadow-lg cursor-pointer"
            onClick={prev}
          >
            {"<"}
          </button> */}

          {/* Custom Right Arrow */}
          {/* <button
            className="w-10 absolute -right-20 top-1/2 text-2xl text-black bg-[white] p-2 rounded-full shadow-lg cursor-pointer"
            onClick={next}
          >
            {">"}
          </button> */}
        </div>
      </div>
      <div className="w-full py-30 px-20">
        <iframe className="w-full"
          width="1303"
          height="734"
          src="https://www.youtube.com/embed/U6ixCJWPmjA"
          title="Main Gate Design Nepal |First professional main gate in Nepal | Fabricators with unique designs"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="w-full">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5743891450707!2d85.32681167551036!3d27.73042437616937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd8d730e75a4d4b%3A0x8f20c03cb0976a!2sMain%20Gate%20Design%20Pvt.ltd!5e0!3m2!1sen!2snp!4v1742557038888!5m2!1sen!2snp"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Testimonial;
