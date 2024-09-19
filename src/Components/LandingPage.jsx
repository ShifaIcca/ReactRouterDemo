import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
const LandingPage = () => {
  return (
    <div id="bgLandingz`" className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center gap-3">
      <h1 className="text-white font-medium text-3xl">React Router</h1>
      <h4 className="text-white ">
        Choose Well Path,To Get Your Well Destination
      </h4>
      <Tilt tiltReverse={true} tiltMaxAngleY={20} tiltMaxAngleX={20} gyroscope={true}>
        <div style={{boxShadow: "0px 0px 34px white"}} className="h-72 w-96 bg-slate-50 rounded-xl backdrop:filter backdrop-blur-sm bg-opacity-15">
          <div id="top" className="h-36 flex justify-center items-center ">
            <Link to="/Home" className="text-white ">
              <i className="ri-home-line text-4xl text-center w-full inline-block text-white"></i>
              <br />
              Home
            </Link>
          </div>
          <div
            id="bottom"
            className=" h-36  flex justify-between items-center px-4"
          >
            <Link to="/Setup" className="text-white ">
              <i className="ri-download-cloud-2-line text-4xl flex justify-center text-white"></i>
              Setup
            </Link>
            <Link to="/ReactPage" className="animate-[spin_4s_linear_infinite]">
              <i
                style={{ textShadow: "0px 0px 14px cyan" }}
                className="ri-reactjs-fill text-[80px] text-[cyan]"
              ></i>{" "}
              <br />
            </Link>
            <Link to="/About" className="text-white ">
              <i class="ri-user-3-line text-4xl flex justify-center text-white"></i>
              About
            </Link>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default LandingPage;
