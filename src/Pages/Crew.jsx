import React, { useState } from "react";

const Crew = () => {
  const crews = [
    {
      name: "Douglas Hurley",
      images: {
        png: "/src/assets/crew/image-douglas-hurley.png",
        webp: "/src/assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "/src/assets/crew/image-mark-shuttleworth.png",
        webp: "/src/assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "/src/assets/crew/image-victor-glover.png",
        webp: "/src/assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "/src/assets/crew/image-anousheh-ansari.png",
        webp: "/src/assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const [selectedCrew, setSelectedCrew] = useState(crews[0]);
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
            {selectedCrew?.role}
          </p>
          <h1 className=" tracking-wider text-4xl uppercase text-white">
            {selectedCrew?.name}
          </h1>
          <p className="mt-4 text-sm tracking-wider leading-6    text-white/80 text-wrap w-96   ">
            {" "}
            {selectedCrew?.bio}
          </p>
          <div className="flex gap-2 mt-3 pl-3 fixed bottom-16 left-60">
            {crews.map((crew) => (
              <button
                key={crew.name}
                onClick={() => {
                  setSelectedCrew(crew);
                }}
                className="bg-white w-3 h-3 rounded-full"
              ></button>
            ))}
          </div>
        </div>
        <div className="">
          <img
            src={selectedCrew?.images?.png}
            alt={selectedCrew?.name}
            className="w-96 h-96"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
