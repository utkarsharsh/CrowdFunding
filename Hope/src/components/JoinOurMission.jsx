import React from "react";
import CircleLine from "../assets/CircleLine.png";
import { NavLink } from "react-router-dom";

const JoinOurMission = () => {
  return (
    <div className=" relative overflow-y-clip flex bg-primary justify-center items-center py-20 font-[rowdies] mb-10">
      <div className=" z-10 flex w-10/12 mx-auto items-center justify-around"
      >
        <p className="text-6xl font-semibold text-white">Join our mission</p>
        <div className="flex gap-10">
          <NavLink to="/donate">
            <button className="uppercase font-extrabold text-sm bg-white text-primary px-3 py-2 rounded-full">become volunteer❤️</button>
          </NavLink>
          <NavLink to="/donate">
            <button className="uppercase font-extrabold text-sm bg-white text-primary px-3 py-2 rounded-full">Donate Now❤️</button>
          </NavLink>
        </div>
      </div>
      <img className=" -z-0 absolute size-60 -bottom-20 left-[37%] aspect-square " src={CircleLine} />
    </div>
  );
};

export default JoinOurMission;
