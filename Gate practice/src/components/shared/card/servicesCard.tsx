import { useState } from "react";
import { TextureCardStyled } from "../../ui/texture-card";
interface Props {
  img: string;
  title: string;
  desc: string;
}

const ServicesCard = ({ img, title, desc }: Props) => {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <TextureCardStyled className="h-full">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`p-6 gap-8 items-center rounded-3xl h-[50vh] ${
            isHover ? "bg-amber-50" : ""
          }`}
        >
          <div
            className={`w-20 h-20 mx-auto flex justify-center items-center ${
              isHover ? "bg-primary" : "bg-[#dcecf2]"
            } rounded-full transition-all duration-600 ease-in-out`}
          >
            <img className="w-10 h-10" src={img} alt="" />
          </div>
          <h3 className="text-2xl text-black my-8">{title}</h3>
          <p className="">{desc}</p>
        </div>
      </TextureCardStyled>
    </>
  );
};

export default ServicesCard;
