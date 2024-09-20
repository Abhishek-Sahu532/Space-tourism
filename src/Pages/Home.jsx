import React from "react";

export const Home = () => {
  return (
    <div className="bg-[url('/src/assets/home/background-home-desktop.jpg')] bg-cover min-h-screen w-auto bg-no-repeat">
      <div className="flex justify-around text-white ">
        <div className="w-96 pt-72">
          <h6 className="text-xl  font-relaway uppercase spacing tracking-wider text-white/40">
            So, you want to travel to
          </h6>
          <h1 className="mt-4 uppercase font-relaway text-8xl tracking-widest">
            Space
          </h1>
          <p className="text-sm leading-6 mt-8 text-white/40">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <div className="mt-80 flex justify-center items-center w-56 h-56 rounded-full bg-white uppercase">
            <p className="text-blue-gray-900 text-md tracking-widest">
              Explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
