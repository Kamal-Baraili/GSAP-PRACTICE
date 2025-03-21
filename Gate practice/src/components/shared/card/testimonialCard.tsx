interface Props {
  imgSrc: string;
  reviewDesc: string;
  reviewName: string;
  reviewPost: string;
  sliderRef: React.RefObject<HTMLDivElement | null>;
}

const TestimonialCard = ({
  imgSrc,
  reviewDesc,
  reviewName,
  reviewPost,
  sliderRef,
}: Props) => {
  return (
    <>
      <div ref={sliderRef} className="px-4 w-8/11 mx-auto">
        <div className="p-7 text-white mt-20 rounded-4xl flex border border-zinc-800">
          <div className="w-1/2 item-center flex justify-start">
            <div className="w-fit">
              <img
                className=" w-full rounded-4xl h-[40vh] "
                src={imgSrc}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <div className=" p-1 w-7 h-7 rounded-full bg-primary mb-10">
              <img className="h-5" src="/homepage/quote.svg" alt="" />
            </div>
            <p className="my-6">"{reviewDesc}"</p>
            <div className="">
              <h3 className="font-bold">{reviewName}</h3>
              <h4 className="mt-1">{reviewPost}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
