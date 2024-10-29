import React from "react";
import Image from "next/image";
import i1 from "../../public/i1.png";
import i2 from "../../public/i2.png";
import i3 from "../../public/i3.png";
import i4 from "../../public/i4.png";
import i5 from "../../public/i5.png";
import i7 from "../../public/i7.png";

const Home = () => {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="bg-black p-3 text-white font-semibold flex items-center justify-center gap-3 sm:gap-5 md:gap-10">
          <div className="border-2 rounded-full py-2 px-3 md:py-3 md:px-6 border-purple-400 flex items-center justify-center gap-3 md:gap-5 lg:gap-10">
            <a href="#" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-purple-400 duration-500">
              HOME
            </a>
            <a href="#" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-purple-400 duration-500">
              ABOUT US
            </a>
            <a href="#" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-purple-400 duration-500">
              API KEY
            </a>
            <a href="#" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-purple-400 duration-500">
              CONTACT US
            </a>
            <a href="#" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-purple-400 duration-500">
              REVIEWS
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="bg-black relative overflow-hidden px-4 sm:px-8">
          {/* Conditionally displayed images */}
          <div className="hidden lg:block">
            <Image src={i1} className="w-32 mt-[50px] ml-[50px] absolute" />
            <Image src={i2} className="w-32 mt-[250px] ml-[150px] absolute" />
            <Image src={i3} className="w-32 mt-[250px] ml-[1200px] absolute" />
            <Image src={i4} className="w-32 mt-[50px] ml-[1350px] absolute" />
            <Image src={i5} className="w-32 mt-[450px] ml-[100px] absolute" />
            <Image src={i7} className="w-32 mt-[450px] ml-[1350px] absolute" />
          </div>

          {/* Text Section */}
          <div className="text-center pt-20 md:pt-[200px] px-4">
            <span className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
              Introducing{" "}
              <span className="bg-gradient-to-t from-blue-600 to-purple-500 bg-clip-text text-transparent">
                AURORA AI
              </span>
            </span>
          </div>

          {/* Chat Input */}
          <div className="flex justify-center items-center mt-10">
            <input
              type="text"
              placeholder="Type to chat..."
              className="bg-slate-100 rounded-full p-3 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px]"
            />
          </div>

          {/* Descriptive Text */}
          <div className="text-center mt-6 md:mt-10">
            <p className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
              Make your everyday life easier and fun with{" "}
              <span className="bg-gradient-to-t from-blue-600 to-purple-500 bg-clip-text text-transparent">
                AURORA
              </span>
            </p>
            <p className="text-white font-semibold text-md sm:text-lg md:text-xl mt-3 md:mt-5 pb-10 md:pb-40 lg:pb-44">
              Simplifying <span className="text-[#ff9999]">Problems</span> with
              Intelligent <span className="text-[#b4ff89]">Answers</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
