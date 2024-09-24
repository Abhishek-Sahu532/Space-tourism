import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleMobileMenuVisibility = () => {
    console.log("abcd", mobileMenuVisible);
    setMobileMenuVisible(() => !mobileMenuVisible);
  };
  return (
    <div className="flex fixed top-8 items-center laptop:justify-between mt-6 gap-6 justify-between  bg-transparent  w-full z-50 ">
      <div>
        <img src={logo} alt="logo" className="pl-4 rounded-full "   />
      </div>

      {/* <div className="text-white"><hr className="w-96" / ></div> */}
      <div className="hidden laptop:flex tablet:flex text-white/70  flex-row gap-3 p-3 rounded uppercase  backdrop-blur-md backdrop-brightness-150  pr-20  ">
        <Link to="/" className="">
          <h5>00 Home</h5>
        </Link>
        <Link to="/destination">
          <h5>01 Destination</h5>
        </Link>
        <Link to="/crew">
          <h5>02 Crew</h5>
        </Link>
        <Link to="/technology">
          <h5>03 Technology</h5>
        </Link>
      </div>

      {/* mobile menu */}
      <div className="pr-6 laptop:hidden tablet:hidden" >
        <img
          src="/src/assets/shared/icon-hamburger.svg"
          alt="mobile_menu_open" 
          onClick={handleMobileMenuVisibility}
          className="cursor-pointer"
        />
      </div>
      <div
        id="mobile-menu"
        className={`block ${
          mobileMenuVisible ? "translate-x-0" : "translate-x-full"
        }  fixed top-0 right-0 z-50 backdrop-blur-md backdrop-brightness-150 w-screen h-screen bg-black/70 transition-transform duration-300 ease-in-out`}
      >
        <div>
          <img
            src="/src/assets/shared/icon-close.svg"
            alt="menu_close"
            onClick={handleMobileMenuVisibility}
            className="fixed right-5 top-7 p-5 cursor-pointer"
          />
        </div>
        <div className="font-relaway text-white/80 mt-16 p-6 flex flex-col gap-8">
          <Link to="/" className="text-3xl"   onClick={handleMobileMenuVisibility}>
            <h5>00 Home</h5>
          </Link>
          <Link to="/destination" className="text-3xl"   onClick={handleMobileMenuVisibility}>
            <h5>01 Destination</h5>
          </Link>
          <Link to="/crew" className="text-3xl"   onClick={handleMobileMenuVisibility}>
            <h5>02 Crew</h5>
          </Link>
          <Link to="/technology" className="text-3xl"   onClick={handleMobileMenuVisibility}>
            <h5>03 Technology</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
