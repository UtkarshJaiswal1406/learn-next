import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';


const Valli = () => {

    return(

        <div className="bg-[#fca5a5]">
             <h1 className="flex flex column justify-center  text-[red-400] font-Noto Color Emoji text-5xl  text-justify   " >Hi! I'm Sreevalli</h1>
             
             <h2 className="flex flex coloumn justify-center text-[#873e23] font-mono text-3xl italic hover:not-italic mt-10">These are my top tracks of the month </h2>
             <div className="flex flex-col "> 
                < img className="flex display-block  ml-auto mr-auto mt-10 mb-3 a;hover{text-decoration: underline} "src="/jennie.jpeg" alt="Jennie"  width={300} />
                < a className="ml-auto mr-auto mb-7 font-sans text-2xl font-semibold underline" href="https://www.youtube.com/watch?v=bB3-CUMERIU" target="_blank" > Mantra-Jennie </a>
                <img className="flex  display-block  ml-auto mr-auto mb-3 "src="/apt.jpeg" alt="rose" width={300}/>
                <a className="ml-auto mr-auto mb-7 font-sans text-2xl font-semibold underline" href=" https://www.youtube.com/watch?v=ekr2nIex040" target="_blank">APT- Rose & Bruno Mars</a>
                <img className="flex   display-block  ml-auto mr-auto mb-3" src="/lisaa.jpeg" alt="lisa" width={300}/>
                <a className="ml-auto mr-auto mb-7 font-sans text-2xl font-semibold underline" href="https://www.youtube.com/watch?v=hbcGx4MGUMg" target="_blank">"Rockstar- Lalisa</a>

                
             </div>

        </div>
   
    


    



    
    )
};
export default Valli;