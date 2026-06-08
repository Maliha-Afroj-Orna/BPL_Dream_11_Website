import React from "react";
import bannerImg from "../../../assets/banner-main.png";
import bgShadow from "../../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div className="min-h-[70vh] relative rounded-2xl bg-[#131313] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14)_0%,_rgba(255,255,255,0)_55%)] container mx-auto">
      <img
        className="hidden md:block absolute top-0 left-0 md:z-10 max-h-[70vh] w-full rounded-2xl"
        src={bgShadow}
        alt="Bg Shadow"
      />

      <div className="space-y-4 text-center py-14">
        <img className="mx-auto" src={bannerImg} alt="banner" />
        <h2 className="text-4xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-2xl font-medium text-[#FFFFFF]/70">
          Beyond Boundaries Beyond Limits
        </p>
        <div></div>
        <button className="text-[#131313] bg-[#E7FE29] rounded-xl px-4 py-2 font-bold">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
