import React from "react";
import dollarImg from "../../assets/Currency.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex justify-between items-center gap-8">
        <ul className="flex justify-between items-center gap-8">
            <li className="text-base text-[#131313]/70" ><a href="">Home</a></li>
            <li className="text-base text-[#131313]/70" ><a href="">Fixture</a></li>
            <li className="text-base text-[#131313]/70" ><a href="">Teams</a></li>
            <li className="text-base text-[#131313]/70" ><a href="">Schedules</a></li>
        </ul>
        <button className="btn flex justify-between items-center gap-2 font-semibold text-base">
          0 Coin
          <img src={dollarImg} alt="Currency" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
