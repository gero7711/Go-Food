import React from "react";
import fng from "../img/fng.png";
import fp from "../img/fp.png";
import gb from "../img/gb.png";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex flex-1  flex-col items-start justify-center gap-1">
        <p className="flex font-semibold ">
          YOU <span className="ml-2 font-bold text-orange-700"> CRAVE</span>,
          YOU <span className="ml-2 font-bold text-orange-700">GRAB</span>, WE
          <span className="ml-2 font-bold text-orange-700">DELIVER</span>
        </p>
        <div className="flex flex-rows w-12 h-12 gap-10 m-auto justify-between md: items-center ml-4">
          <img
            src={fng}
            className="w-full h-full object-container  bg-white rounded-lg"
            alt="delivery"
          />
          <img
            src={fp}
            className="w-full h-full object-container  bg-white rounded-lg"
            alt="delivery"
          />
          <img
            src={gb}
            className="w-full h-full object-container  bg-white rounded-lg"
            alt="delivery"
          />
  </div>
      
      <p className="relative text-[2.5rem] leading-normal font-semibold tracking-tight font-serif md: text-[3.5rem] md:leading-tight">
        It's about the{" "}
        <span className="font-bold text-orange-700">Memories</span> and
        <span className="ml-2 font-bold text-orange-700">Stories</span> behind
        each <span className="ml-1 font-bold text-orange-700">Dish...</span>
      </p>
      <p className="text-base text-textColor text-center md:text-left w-[80%]">
        Food is not just about satisfying hunger, but it is also about the
        memories and stories that come with it. Each dish has a unique history
        and cultural significance that has been passed down from generation to
        generation and can be tied to important traditions, celebrations, and
        experiences
      </p>
      <button
        type="button"
        className="bg-gradient-to-br from-orange-400 to orange-700 w-full 
        md:w-auto px-6 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Grab Now
      </button>
      </div>
      <div className="p-4 bg-blue-400 flex-1"></div>
    </div>
  );
};

export default MainContainer;
