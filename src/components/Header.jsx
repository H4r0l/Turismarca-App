import React from "react";
import Home from "../assets/home-app-logo.svg"
import Logo from "../assets/Logo.svg"
import {BsFillCartFill} from "react-icons/bs"


const Header = () => {
  return (
      <div className="sticky top-0 z-30">
        <div className="w-screen h-20 block relative rounded-b-2xl bg-teal-800 shadow-xl animate-fade-down animate-once animate-delay-250 animate-ease-in-out md:h-24 lg:h-26">
        <div className="flex flex-row items-center justify-between md:justify-evenly py-4 md:py-2 lg:py-3 absolute w-screen bg-black rounded-b-2xl shadow-sm animate-fade-down animate-once animate-delay-300 animate-ease-in-out">
          <img src={Logo} alt="" className="w-1/5 text-white mx-3 lg:w-1/12"/>
          <h1 className="text-3xl md:mr-20 text-white self-center font-Merriweather">Turismarca</h1>
          <div className="text-white text-3xl mx-6">
          <BsFillCartFill/>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Header;
