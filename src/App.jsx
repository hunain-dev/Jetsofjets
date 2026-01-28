import React, { useEffect } from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from 'react';
import Home from './Section/Home/Home';
import Aboutus from './Section/Aboutus/Aboutus';
import OurFloot from './Section/OurFloot/OurFloot';
import Advantages from './Section/Advantages/Advantages';
import Global from './Section/Global/Global';
import { motion } from "framer-motion";

const App = () => {
  const scrollRef = useRef(null);



{/* gulstream  anaimtion*/}

   const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
    },
  };
  
  const leftVariant = {
    hidden: { x: -160, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1], // luxury ease
      },
    },
  };
  
  const centerVariant = {
    hidden: { scale: 0.92, opacity: 0 },
    show: {
      scale: 1.2,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };
  
  const rightVariant = {
    hidden: { x: 160, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,        // smoothness (0.05 = more smooth)
      multiplier: 1,     // scroll speed
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  // our manufacture

  const planeranks = [
    {
      tittle:"Maximum operating range",
      desc:"11,263 km"
    },
    {
        tittle:"Passenger capacity",
      desc:"Up to 12 seats (+1 cabin server)"
    },
    {
        tittle:"Baggage capacity",
      desc:"5.52 m3"
    },
    {
        tittle:"Specification",
      desc:"Cabin length"
    }
  ]
  const planeranksmarket = [
    {
      tittle:"Speed",
      desc:"480 knots"
    },
    {
        tittle:"Endurance",
      desc:"14 hrs (Maximum for european based aircraft)"
    },
    {
        tittle:"Cruising altitude",
      desc:"15,544 m"
    },
    {
        tittle:"14.05 m2",
      desc:"2.49 m2"
    }
  ]


  return (
    <div ref={scrollRef}>
      <div className='h-full w-full z-99999 '>
        <Home/>
        <Aboutus/>
        <div className=' bg-gradient-to-b from-[#D6CEC5] to-[#FCF6EB]  w-full'>
        <OurFloot/>

        {/* gulstream */}


<motion.div  variants={container}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.25 }} className='h-full    l md:py-9 md:h-full md:px-6 lg:p-7 lg:px-5 xl:px-10 px-4  w-full  grid lg:grid-cols-3'>
            <motion.div     variants={leftVariant}
  className='h-full py-10  flex items-center justify-between flex-col w-full '>
             <div   className='Gt3  text-[#312726] w-full '>
              <h2 className='tracking-tighter lg:text-1xl md:text-3xl'> Gulfstream</h2>
              <h4  className='tracking-tighter mt-4 text-6xl md:text-8xl'>650ER</h4>
             </div>
             <div  className=' w-full  grid grid-cols-2 md:mt-12'>
             <div className='h-full w-full flex items-center gap-7 justify-start flex-col'>
              {
                planeranks.map((elem,index)=>{
                  return(
                  <div key={index}  className='Gt3   w-full' style={{backgroundColor:elem.bg}}>
                    <h3 className='tracking-tighter lg:text-[0.7vw] text-[3vw]'>{elem.tittle}</h3>
                    <h2 className='tracking-tighter lg:text-[0.7vw] text-[3vw]'>{elem.desc}</h2>
                  </div>
                     
                  )  
                })
              }
                </div>
            
                <div className='h-full w-full flex items-center gap-7 justify-start flex-col '>
              {
                planeranksmarket.map((elem,index)=>{
                  return(
                  <div key={index}  className='Gt3   w-full' style={{backgroundColor:elem.bg}}>
                    <h3 className='tracking-tighter lg:text-[0.7vw] text-[3vw]'>{elem.tittle}</h3>
                    <h2 className='tracking-tighter lg:text-[0.7vw] text-[3vw]'>{elem.desc}</h2>
                  </div>
                     
                  )  
                })
              }
                </div>     
                
                        </div>
            </motion.div>
            <motion.div     variants={centerVariant}
 className='h-full w-full '>
              <img src="/public/assets/images/FlatAeroplane.png" className='h-full  lg:p-5 md:p-20 p-10 w-full object-cover' alt="" />
            </motion.div>
            <motion.div         variants={rightVariant}

 className='h-full flex items-end md:mt-7 justify-center gap-6 flex-col w-full '>
             <div className='Gt3  text-[#312726] w-full lg:mt-0 mt-6'>
              <h2 className='tracking-tighter text-1xl md:text-3xl lg:text-right md:text-center'>Ultra-long-range <br /> Aircraft              </h2>
             </div>
             <div className=' w-full   grid grid-cols-1  '>
             <div className='h-full w-full flex lg:items-end lg:gap-7 lg:justify-end md:items-center md:justify-center flex-col'>
                  <div   className='Gt3 flex lg:items-end lg:justify-end md:items-center md:justify-center  flex-col lg:gap-6   w-full'>
                    <h3 className='tracking-tighter lg:text-[0.9vw] md:text-2xl  '>Direct Access to Private Travel                    </h3>
                    <h3 className='tracking-tighter lg:text-[1.2vw] md:text-[2.3vw] md:text-center  lg:text-right'>A true time-saving machine it brings Tokyo and New York an hour closer, and at 92% of the speed of sound, it can circle the globe with just a single stop.

</h3>
                  </div>
                     
               
                </div>
            
          
                
                        </div>
            </motion.div>
     </motion.div>
      <Advantages/>
        </div>
      <Global/>

      </div>
      
    </div>
  )
}

export default App
