import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link.js";

import Homepage from "./Components/Homepage.jsx"

export default function Home() {
  return (
    <>
    <div className="bg-black w-full py-[340px]">

    <Link href="/Components/Homepage">
    <div className="relative">
      <div className="bg-gradient-to-r from-purple-500 to to-blue-600 absolute inset-0 rounded-full w-[170px] ml-[45%] blur-lg ">

      </div >
        <button className="text-white bg-black font-bold border-2 border-cyan-500 p-5 rounded-full w-[170px] ml-[45%] relative">Click Me!!</button>
    </div>
      </Link>
    </div>
    
    </>
  );
}
