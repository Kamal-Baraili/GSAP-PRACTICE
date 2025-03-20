import TestimonialCard from "../../shared/card/testimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const Testimonial = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <div className="bg-amber-100 pt-20 pb-30 rounded-t-4xl -mt-10">
        <h2 className="text-primary text-6xl text-center">
          What Our Clients Say?
        </h2>
        <div className="w-9/11 mx-auto gap-8 relative">
          <Slider {...settings} ref={sliderRef}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Slider>

          <button
            className="w-10 absolute -left-20 top-1/2 text-2xl text-black bg-[white] p-2 rounded-full shadow-lg cursor-pointer"
            onClick={prev}
          >
            {"<"}
          </button>

          {/* Custom Right Arrow */}
          <button
            className="w-10 absolute -right-20 top-1/2 text-2xl text-black bg-[white] p-2 rounded-full shadow-lg cursor-pointer"
            onClick={next}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
