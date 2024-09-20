import React from "react";

const Crew = () => {
  return (
    <div className="bg-[url('/src/assets/crew/background-crew-desktop.jpg')] bg-cover min-h-screen w-auto bg-no-repeat">
      <div className="header" id="header-section">
        <p className="text-white/40 pt-28 pl-28 uppercase text-xl">
          02 Meet your crew
        </p>
      </div>

      <div className="flex justify-evenly mt-24 font-relaway">
        <div className=" p-20">
          <p className="uppercase text-white/80 text-2xl tracking-wider">
            Commander
          </p>
          <h1 className=" tracking-wider text-4xl uppercase text-white">
            Douglas Hurley
          </h1>
          <p className="mt-4 text-sm tracking-wider leading-6    text-white/80 text-wrap w-96   ">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="">
          <img
            src="/src/assets/crew/image-anousheh-ansari.png"
            alt="" className="w-96"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
