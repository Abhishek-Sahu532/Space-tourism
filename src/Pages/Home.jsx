import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="tablet:bg-[url('/src/assets/home/background-home-tablet.jpg')] bg-[url('/src/assets/home/background-home-mobile.jpg')]  laptop:bg-[url('/src/assets/home/background-home-desktop.jpg')] bg-cover min-h-screen w-auto bg-no-repeat">
      <div className="flex flex-col tablet:items-center items-center tablet:flex-col laptop:flex-row content-between laptop:justify-around text-white ">
        <div className="w-96 desktop:pt-72 pt-36 ">
          <h6 className="laptop:text-xl tablet:text-xl   font-relaway uppercase spacing tracking-wider text-white/40 text-xs">
            So, you want to travel to
          </h6>
          <h1 className="mt-4 uppercase font-relaway laptop:text-8xl tablet:text-6xl text-5xl tracking-widest">
            Space
          </h1>
          <p className="text-sm text-wrap leading-6 mt-8 text-white/40">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link to="/destination">
            <div className="laptop:mt-80 mt-32 flex justify-center items-center laptop:w-56 laptop:h-56 tablet:mt-15 tablet:w-28 tablet:h-28  w-28 h-28 rounded-full bg-white uppercase">
              <p className="text-blue-gray-900 text-sm tracking-widest">
                Explore
              </p>
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
