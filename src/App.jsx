import React, { useEffect } from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from 'react';
import Home from './Section/Home/Home';
import Aboutus from './Section/Aboutus/Aboutus';
import OurFloot from './Section/OurFloot/OurFloot';
import FlatAeroplane from "../src/assets/Images/FlatAeroplane.png"
import Advantages from './Section/Advantages/Advantages';
const App = () => {
  const scrollRef = useRef(null);


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
      <div className=' w-full '>
        <Home/>
        <Aboutus/>
        <div className=' bg-gradient-to-b from-[#D6CEC5] to-[#FCF6EB] h-full w-full'>
        <OurFloot/>

        {/* our manufacture */}
           
           <div className='h-screen  px-20 w-full  grid grid-cols-3'>
            <div className='h-full py-10 flex items-center justify-between flex-col w-full '>
             <div className='Gt3  text-[#312726] w-full '>
              <h2 className='tracking-tighter text-1xl'> Gulfstream</h2>
              <h4  className='tracking-tighter mt-4 text-7xl'>650ER</h4>
             </div>
             <div className=' w-full  grid grid-cols-2'>
             <div className='h-full w-full flex items-center gap-7 justify-start flex-col'>
              {
                planeranks.map((elem,index)=>{
                  return(
                  <div key={index}  className='Gt3   w-full' style={{backgroundColor:elem.bg}}>
                    <h3 className='tracking-tighter text-[0.7vw]'>{elem.tittle}</h3>
                    <h2 className='tracking-tighter text-[0.7vw]'>{elem.desc}</h2>
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
                    <h3 className='tracking-tighter text-[0.7vw]'>{elem.tittle}</h3>
                    <h2 className='tracking-tighter text-[0.7vw]'>{elem.desc}</h2>
                  </div>
                     
                  )  
                })
              }
                </div>     
                
                        </div>
            </div>
            <div className='h-full w-full '>
              <img src={FlatAeroplane} className='h-full p-5 w-full object-cover' alt="" />
            </div>
            <div className='h-full flex items-center justify-center gap-6 flex-col w-full '>
             <div className='Gt3  text-[#312726] w-full '>
              <h2 className='tracking-tighter text-1xl'>Ultra-long-range <br /> Aircraft              </h2>
             </div>
             <div className=' w-full  grid grid-cols-1'>
             <div className='h-full w-full flex items-center gap-7 justify-start flex-col'>
                  <div   className='Gt3 flex items-start justify-start flex-col gap-6   w-full'>
                    <h3 className='tracking-tighter text-[0.7vw]'>Direct Access to Private Travel                    </h3>
                    <h3 className='tracking-tighter text-[0.7vw]'>A true time-saving machine it brings Tokyo and New York an hour closer, and at 92% of the speed of sound, it can circle the globe with just a single stop.

</h3>
                  </div>
                     
               
                </div>
            
          
                
                        </div>
            </div>
           </div>

        </div>


        <Advantages/>
    
      </div>
      
    </div>
  )
}

export default App
