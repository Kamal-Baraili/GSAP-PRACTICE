import ServicesCard from "../../shared/card/servicesCard";
import { servicesCardData } from "../../../db/mockdata";

export function Services() {
  return (
    <div className="h-auto pt-20 pb-30 bg-white rounded-t-4xl">
      <div className="w-7/11 mx-auto flex flex-col items-center gap-5 mb-16">
        <h2 className="text-black text-6xl">What We Do?</h2>
        <div className="w-30 bg-primary h-1"></div>
      </div>
      <div className="w-9/11 mx-auto grid h-auto grid-cols-3 gap-8">
        {servicesCardData.map((k: any, i: number) => (
          <ServicesCard key={i} img={k.img} title={k.title} desc={k.desc} />
        ))}
      </div>
    </div>
  );
}
