import { navMenus } from "../../db/mockdata";
import { Link } from "react-router-dom";
import Button from "../shared/button/button";
import { Key } from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className="w-[99%] mx-auto pt-3 sticky inset-0 z-60 flex">
        <div className="w-[43%] p-4 bg-black rounded-2xl flex gap-16 justify-start">
          <div className="flex items-center gap-24 bg-transparent">
            <a href="/">
              <img
                className="w-40 h-12 object-contain"
                src="/main-gate-design-logo.png"
                alt="main-gate-design-logo"
              />
            </a>
          </div>
          <div className="flex justify-center gap-12 capitalize items-center">
            {navMenus.map((k, ind) => (
              <div key={ind}>
                <a className="hover:text-amber-100" href={`/${k}`}>
                  {k}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[60%] flex justify-end items-center">
          <div className="flex items-center gap-6">
            <Button
              text="Contact Us"
              color="text-black"
              bgColor="bg-amber-300"
              src="/homepage/gate-icon.svg"
              secondSrc="/btn-handle.png"
            />

            <Button
              text="Our Work"
              color="text-white"
              bgColor="bg-transparent"
              border="border-zinc-50"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
