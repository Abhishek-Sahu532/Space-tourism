import React, { useState } from "react";

const Technology = () => {
  const technology = [
    {
      name: "Launch vehicle",
      images: {
        portrait: "/src/assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "/src/assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "/src/assets/technology/image-spaceport-portrait.jpg",
        landscape: "/src/assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "/src/assets/technology/image-space-capsule-portrait.jpg",
        landscape: "/src/assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const [currentTechnology, setCurrentTechnology] = useState(technology[0]);

  return (
    <div className="bg-[url('/src/assets/technology/background-technology-desktop.jpg')] bg-cover min-h-screen w-auto bg-no-repeat">
      <div className="header" id="header-section">
        <p className="text-white/40 pt-28 pl-28 uppercase text-xl">
          03 space launch 101
        </p>
      </div>

      <div className="flex flex-grow justify-around font-relaway">
        <div className="w-2/6  text-white flex mt-8 gap-20">
          <div className="flex flex-col gap-8 mt-5">
            <button
              className={`border p-3 px-5 ${
                currentTechnology?.name == "Launch vehicle"
                  ? "bg-white/90 text-black/90"
                  : "text-white/90 bg-transparent"
              }   rounded-full text-md font-medium`}
              onClick={() => {
                setCurrentTechnology(technology[0]);
              }}
            >
              1
            </button>
            <button
              className={`border p-3 px-5 ${
                currentTechnology?.name == "Spaceport"
                  ? "bg-white/90 text-black/90"
                  : "text-white/90 bg-transparent"
              }   rounded-full text-md font-medium`}
              onClick={() => {
                setCurrentTechnology(technology[1]);
              }}
            >
              2
            </button>
            <button
              className={`border p-3 px-5 ${
                currentTechnology?.name == "Space capsule"
                  ? "bg-white/90 text-black/90"
                  : "text-white/90 bg-transparent"
              }   rounded-full text-md font-medium`}
              onClick={() => {
                setCurrentTechnology(technology[2]);
              }}
            >
              3
            </button>
          </div>
          <div className="mt-2 ">
            <p className="font-relaway font-thin text-md text-md uppercase">
              The terminology...
            </p>
            <p className="mt-3 text-3xl uppercase font-relaway font-thin tracking-widest">
              {currentTechnology?.name}
            </p>
            <p className="mt-5 font-relaway tracking-widest text-xs text-balance leading-5">
              {currentTechnology?.description}
            </p>
          </div>
        </div>

        <div>
          <img
            src={currentTechnology?.images?.portrait}
            alt={currentTechnology?.name}
            className="w-96 h-96 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
