import React from "react";
import campaign1 from "../assets/campaign1.png";
import campaign2 from "../assets/campaign2.png";
import campaign3 from "../assets/campaign3.png";
import { FaEthereum } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ImportantCharity = () => {
  const campaignsData = [
    {
      id: 1,
      title: "Education for Underprivileged Children",
      requiredAmount: 50000,
      raisedAmount: 45000,
      category: "Education",
      image: campaign1,
    },
    {
      id: 2,
      title: "Medical Support for Cancer Patients",
      requiredAmount: 100000,
      raisedAmount: 60520,
      category: "Health",
      image: campaign2,
    },
    {
      id: 3,
      title: "Food and Shelter for Homeless People",
      requiredAmount: 30000,
      raisedAmount: 10000,
      category: "Humanitarian",
      image: campaign3,
    },
  ];
  return (
    <div className="flex justify-center mt-5">
      <div className=" w-10/12 flex justify-center items-center flex-col gap-3 ">
        <p className="text-primary font-semibold">OUR CASES</p>
        <p className="text-textbrown font-[Rowdies] font-medium mb-2 text-xl mx-5 md:text-3xl xl:text-4xl">
          Urgent/popular fundraising campaigns
        </p>
        <div className="flex flex-wrap gap-5">
          {campaignsData.map((data) => (
            <div
              key={data.id}
              className=" text-textbrown rounded-lg mx-auto bg-bluefive pb-3"
            >
              <img
                className="rounded-t-lg w-full h-48 object-cover aspect-video"
                src={data.image}
                loading="lazy"
              ></img>
              <div className="w-10/12 my-5 mx-auto flex flex-col justify-end gap-3 ">
                <p className="font-bold text-lg ">{data.title}</p>
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1 font-semibold">
                   <span className="font-extrabold  " >Ξ </span> {data.raisedAmount}
                  </p>
                  <p className="flex items-center gap-1 text-red-700 font-semibold">
                   <span className="font-extrabold  " >Ξ </span> {data.requiredAmount}
                  </p>
                </div>
                <div className="flex bg-white rounded-full h-[3px]">
                  <div
                    className={` bg-primary rounded-full h-full`}
                    style={{
                      width: `${
                        (data.raisedAmount / data.requiredAmount) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <NavLink to={`donate/${data.id}`}>
                  <button className="text-uppercase flex w-fit text-white font-bold px-5 py-2 rounded-full mt-2 bg-bluethree hover:bg-bluetwo">
                    Make A Donation
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <NavLink to="/donate">
          <button className="border-2 border-gray-200 text-primary hover:scale-105 transform duration-300 font-semibold px-6 mt-5 py-2 rounded-full ">
            See All
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ImportantCharity;
