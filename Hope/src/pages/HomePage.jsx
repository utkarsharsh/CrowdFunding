import React from "react";
import homeimage from "../assets/homeimage.png";
import pic from "../assets/pic.png";
import Oval from "../assets/Oval.png";
import Rectangle from "../assets/Rectangle.png";
import { FaArrowRightLong } from "react-icons/fa6";
import CardSection from "../components/CardSection";
import ImportantCharity from "../components/ImportantCharity";
import { NavLink } from "react-router-dom";
import AboutAndNumber from "../components/AboutAndNumber";
import GallerySection from "../components/GallerySection";
import JoinOurMission from "../components/JoinOurMission";
import CharitySection from "../components/CharitySection";

const HomePage = () => {
  const ourNumber = [
    {
      id: 1,
      number: "20M",
      title: "Number of Supporters",
    },
    {
      id: 2,
      number: "15K+",
      title: "Volunteers Worldwide",
    },
    {
      id: 3,
      number: "68K+",
      title: "We've Helped Raise",
    },
  ];
  return (
    <div className="overflow-x-clip">
      {/* section1 */}
      <div className="relative">
        <div className="relative animate-bgPulse  bg-bluefive flex flex-col md:flex-row  py-20 pb-28 gap-10 justify-around items-center">
          {/* left */}
          <div className="ml-5 z-20 w-10/12 text-center md:text-left md:max-w-[30rem] space-y-5">
            <h1 className="flex text-textbrown text-5xl font-[Rowdies]">
              Join us in creating a better world—because every action counts.
            </h1>
            <p className="text-blueone">
              Raise funds as an individual or NGO for causes that matter most.
              Empower donors to contribute with confidence, knowing their
              support is reaching genuine and impactful initiatives.
            </p>
            <NavLink to="/donate"><button className="bg-bluethree hover:bg-bluetwo text-white px-8 py-3 mt-5 rounded-full font-medium ">
              Make A Donation
            </button></NavLink>
            
          </div>
          {/* right */}
          <div className="relative inline-block md:flex ">
            <img
              className=" size-80 md:size-96 aspect-square z-20 top-7 right-7"
              src={pic}
            />
            <img
              className=" absolute top-7 md:top-10 xl:top-0  right-7 z-30 size-64 md:size-[18rem] xl:size-[22rem] aspect-square rounded-full"
              src={homeimage}
            ></img>
          </div>
          <img
            className="absolute block md:hidden xl:block size-80 -right-52 md:size-[40rem] md:-right-[25rem] -bottom-28 z-10"
            src={Rectangle}
          />
          <img
            className="absolute size-28 -left-16 top-5 hidden sm:block"
            src={Oval}
          ></img>
          <div className="absolute -z-0 inset-0">
            <div className="absolute bg-[#BFE9FF] w-32 h-32 rounded-md opacity-50 top-10 animate-moveRight"></div>
            <div
              className="absolute -z-0 bg-[#BFE9FF] w-28 h-28 rounded-md opacity-50 top-20 animate-moveRight"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -z-0 bg-[#BFE9FF] w-36 h-36 rounded-md opacity-50 top-40 animate-moveRight"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute -z-0 bg-[#BFE9FF] w-24 h-24 rounded-md opacity-50 top-60 animate-moveRight"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute -z-0 bg-[#BFE9FF] w-40 h-40 rounded-md opacity-50 top-80 animate-moveRight"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
          {/* Our Number */}
        </div>
        <div className="text-center z-50 ">
          <div className="xl:absolute -bottom-16 right-64 mx-auto xl:mx-24 mb-2 mt-5 border xl:border-none border-black w-fit z-50 flex flex-col md:flex-row justify-center items-center gap-0 md:gap-8 bg-white rounded-lg  shadow-xl">
            {ourNumber.map((data) => (
              <div key={data.id} className="text-center p-8 rounded-lg">
                <p className="text-primary text-4xl font-extrabold">
                  {data.number}
                </p>
                <div className="h-[1.5px] rounded-full w-10 mx-auto bg-gray-800 mb-2"></div>
                <p className="font-bold text-sm">{data.title}</p>
              </div>
            ))}
            <div className="hidden xl:block bg-bluefour text-white p-8 px-10 rounded-r-lg text-left">
              <div className="h-[2px] rounded-full w-10  bg-gray-800 mb-2"></div>
              <p className="font-bold">
                Our Goal is to <br /> Help Poor People
              </p>
              <p className="mt-2 text-bluefive text-sm">
                become a Volunteer{" "}
                <FaArrowRightLong className="inline-block ml-1 text-black" />
              </p>
            </div>
          </div>
          <div className="inline-block xl:hidden bg-red-500 text-white p-8 px-10 rounded-lg text-left">
            <div className="h-[2px] rounded-full w-10  bg-gray-800 mb-2"></div>
            <p className="font-bold">
              Our Goal is to <br /> Help Poor People
            </p>
            <p className="mt-2 text-white text-sm">
              become a Volunteer{" "}
              <FaArrowRightLong className="inline-block ml-1 text-black" />
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col w-full items-center xl:mt-20 gap-3 text-center">
        <p className="text-bluefour text-lg mt-5 font-semibold">OUR FEATURES</p>
        <p className="text-textbrown font-medium text-xl mx-5 md:text-3xl font-[Rowdies] xl:text-4xl">You can make a difference by supporting a <br/> charity that you care about. <br/></p>
        {/* caterogory Card */}
        <CardSection/>
      </div>
      {/* Section 3 */}
      <ImportantCharity/>
      {/* Section 4 */}
      <AboutAndNumber/>
     {/* Section 5 */}
     <GallerySection/>
     {/* Section6 */}
     <JoinOurMission/>
     {/* Section7 */}
     <CharitySection/>

    </div>
  );
};

export default HomePage;
