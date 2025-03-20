import { navMenusRight, navMenusLeft } from "../../db/mockdata";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="sticky inset-0">
        <div className="w-full h-18 relative bg-[#262626] inset-0"></div>
        <nav className="absolute inset-0 z-60 h-18 w-full p-8 flex justify-between">
          <div className="flex items-center gap-24 bg-transparent">
            <img
              className="w-50 h-12"
              src="/main-gate-design-logo.png"
              alt="main-gate-design-logo"
            />
            <div>
              <div className="flex gap-24">
                {navMenusLeft.map((key, index) => (
                  <>
                    <div
                      className="capitalize text-md hover:text-amber-300 cursor-pointer"
                      key={index}
                    >
                      {key}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-24">
            {navMenusRight.map((key, index) => (
              <>
                <div
                  className="capitalize text-md hover:text-amber-300 cursor-pointer"
                  key={index}
                >
                  {key}
                </div>
              </>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
