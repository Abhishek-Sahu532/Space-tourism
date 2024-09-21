import React from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex fixed items-center justify-between gap-6 mt-6  bg-transparent w-full pr-0 p-3">
      <img src={logo} alt="logo" className="bg-black pl-4 rounded-full" />

      {/* <div className="text-white"><hr className="w-96" / ></div> */}
      <div className="flex text-white/70  flex-row gap-3 p-3 rounded uppercase  backdrop-blur-md backdrop-brightness-150  pr-20  ">
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
    </div>
  );
};

export default Navbar;
