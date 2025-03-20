const TestimonialCard = () => {
  return (
    <>
      <div className="px-4">
        <div className="p-7 bg-amber-50 text-black mt-20 rounded-xl">
          <div className="item-center flex justify-center">
            <div className="w-fit relative">
              <img
                className="rounded-full w-20 h-20"
                src="/homepage/review_img1.svg"
                alt=""
              />
              <div className="absolute top-0 right-0 z-10 p-1 w-7 h-7 rounded-full bg-primary">
                <img className="h-5" src="/homepage/quote.svg" alt="" />
              </div>
            </div>
          </div>
          <p className="text-center my-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae quis, provident accusantium exercitationem ad deserunt
            distinctio.
          </p>
          <div className="flex flex-col items-center">
            <h3 className="font-bold">Ram Shah</h3>
            <h4 className="mt-1">UI/UX Designer</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
