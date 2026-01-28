// import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";

const Global = () => {

  
  return (
    <div id="Global" className=" h-screen w-full overflow-hidden  bg-gradient-to-b relative from-[#2D2423] to-[#020101]">
      <div className="h-full w-full relative ">
         <div className=" w-full ">
          <h2 className="Gt3 text-[25vw] leading-90 tracking-tighter text-[#2E2524]">Global</h2>
         </div>
         <div className="h-full w-full  absolute  top-0 left-0 ">
         <motion.img
          loading="lazy"
    src="/public/assets/images/Earth.png"
    alt="Earth"
    className='h-full w-full object-contain'
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 250,
      ease: "linear",
    }}
  />         </div>
      </div>
      <div className=" h-full w-full text-white py-7 px-20  flex items-end justify-end  absolute top-0 left-0 ">
        <div className="h-full pt-30  w-full   grid lg:grid-cols-2 md:grid-cols-1 ">
          <div className="h-full  grid grid-cols-1">
            <div className=" w-full ">
              <h3 className="Gt3 lg:text-2xl xl:text-4xl  lg:leading-8 xl:leading-10  lg:text-left md:text-center md:text-4xl md:leading-10 tracking-tighter leading-7">


Fly anywhere with <br />
total comfort and <br />
control

              </h3>
              </div> 
            <div className="Gt2 w-full flex lg:items-end md:items-center lg:flex-row md:flex-col lg:justify-start gap-4">
              <h2 className="xl:text-sm lg:text-[1.2vw] md:text-3xl md:text-center">©2026 jesko jets. All rights reserved
              </h2>
              <h4 className="xl:text-sm lg:text-[1.2vw]  md:text-3xl">Privacy policy</h4>
              
              </div> 
            </div>
            <div className="h-full  grid grid-cols-1">
            <div className=" w-full flex lg:items-end  md:justify-start md:items-center md:gap-2  lg:justify-start flex-col ">
              <h3 className="Gt3 text-1xl md:text-3xl xl:text-3xl lg:text-[2.5vw] tracking-tighter leading-7">Info@jeskojets.com</h3>
              <h3 className="Gt3 text-1xl l md:text-3xl  xl:text-3xl lg:text-[2.5vw] tracking-tighter ">+91 54 432 5050</h3>
              </div> 
            <div className="Gt2 w-full  flex lg:items-end lg:justify-end md:justify-start md:items-center md:flex-col gap-4 lg:flex-row">
              <h2 className="lg:text-sm md:text-3xl ">Made my
              </h2>
              <h4 className="lg:text-sm md:text-4xl ">The first the Last</h4>
              
              </div> 
            </div>
            </div>
      </div>
    </div>
    
  )
}

export default Global
