// import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import Eearth from "../../assets/images/Earth.png"
const Global = () => {

  
  return (
    <div className=" h-screen w-full overflow-hidden  bg-gradient-to-b relative from-[#2D2423] to-[#020101]">
      <div className="h-full w-full relative ">
         <div className=" w-full ">
          <h2 className="Gt3 text-[25vw] leading-90 tracking-tighter text-[#2E2524]">Global</h2>
         </div>
         <div className="h-full w-full  absolute  top-0 left-0 ">
         <motion.img
    src={Eearth}
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
        <div className=" h-[70vh] w-full  grid grid-cols-2">
          <div className="h-full  grid grid-cols-1">
            <div className=" w-full ">
              <h3 className="Gt3 text-2xl tracking-tighter leading-7">


Fly anywhere with <br />
total comfort and <br />
control

              </h3>
              </div> 
            <div className="Gt2 w-full  flex items-end justify-start gap-4">
              <h2 className="text-sm">©2026 jesko jets. All rights reserved
              </h2>
              <h4 className="text-sm">Privacy policy</h4>
              
              </div> 
            </div>
            <div className="h-full  grid grid-cols-1">
            <div className=" w-full flex items-end  justify-start flex-col ">
              <h3 className="Gt3 text-1xl tracking-tighter leading-7">Info@jeskojets.com</h3>
              <h3 className="Gt3 text-1xl tracking-tighter ">+91 54 432 5050</h3>
              </div> 
            <div className="Gt2 w-full  flex items-end justify-end gap-4">
              <h2 className="text-sm">Made my
              </h2>
              <h4 className="text-sm">The first the Last</h4>
              
              </div> 
            </div>
            </div>
      </div>
    </div>
    
  )
}

export default Global
