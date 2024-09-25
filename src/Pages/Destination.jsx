import React, { useState } from "react";
import laptopBG from '../assets/technology/background-technology-desktop.jpg'


const Destination = () => {
  const destinations = [
    {
      name: "Moon",
      images: {
        png: "assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];

  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );
  return (
    <div className=  "laptop:bg-[url('assets/destination/background-destination-desktop.jpg')]  tablet:bg-[url('/src/assets/destination/background-destination-tablet.jpg)] bg-[url('/src/assets/destination/background-destination-mobile.jpg')] bg-cover min-h-screen w-full bg-no-repeat">
      
      
      
      <div className="header" id="header-section">
        <p className="text-white/40 laptop:pt-28 tablet:pt-28 pt-28 pl-28 uppercase text-xl">
          01 Pick your destination
        </p>
      </div>

      <div className="flex   laptop:mt-12 mt-16 items-center laptop:flex-row tablet:flex-col flex-col justify-evenly gap-3">
        <div className="laptop:pr-52">
          <img
            src={selectedDestination.images.png}
            alt={selectedDestination.name}
            className="laptop:w-full w-60"
          />
        </div>
        <div className="text-white/80 p-4">
          <div className="flex flex-row gap-4 mr-12 p-4">
            {destinations.map((dest) => (
              <button
                key={dest.name}
                className={`uppercase text-sm tracking-wider font-relaway ${
                  selectedDestination.name === dest.name ? "border-b-2 p-2" : ""
                }`}
                onClick={() => setSelectedDestination(dest)}
              >
                {dest.name}
              </button>
            ))}
          </div>

          <div className="w-80 text-wrap transition-opacity duration-500 ease-in-out opacity-100">
            <p className="text-center uppercase font-relaway text-7xl font-extralight">
              {selectedDestination.name}
            </p>
            <p className="text-justify mt-6 text-sm font-relaway leading-5">
              {selectedDestination.description}
            </p>
          </div>
          <div className="flex flex-grow justify-evenly mt-6">
            <div>
              <p className="uppercase text-xs">Avg. distance</p>
              <p className="text-center text-2xl mt-1 uppercase">
                {selectedDestination.distance}
              </p>
            </div>
            <div>
              <p className="uppercase text-xs">Est. travel time</p>
              <p className="text-center text-2xl mt-1">
                {selectedDestination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
