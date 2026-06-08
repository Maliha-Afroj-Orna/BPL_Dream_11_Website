import React from "react";
import dollarImg from "../../assets/Currency.png";
import logoImg from "../../assets/logo.png";

const Navbar = ({coin}) => {
  return (
    <div className="navbar flex justify-between items-center my-4 container mx-auto">
      <div className="flex">
        <img src={logoImg} alt="Logo" />
      </div>
      <div className="flex justify-between items-center gap-8">
        <ul className="flex justify-between items-center gap-8">
            <li className="text-base text-[#131313]/70" ><a href="">Home</a></li>
            <li className="text-base text-[#131313]/70" ><a href="">Fixture</a></li>
            <li className="text-base text-[#131313]/70" ><a href="">Teams</a></li>
            <li className="text-base text-[#131313]/70" ><a href="">Schedules</a></li>
        </ul>
        <button className="btn flex justify-between items-center gap-2 font-semibold text-base rounded-lg">
          {coin} Coin
          <img src={dollarImg} alt="Currency" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
