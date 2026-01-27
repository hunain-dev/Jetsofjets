import React, {  useLayoutEffect, useRef } from 'react'
import plane from "../../assets/Images/Plane.Webp"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const OurFloot = () => {
    const sectionRef = useRef(null);
    const planeRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          gsap.fromTo(
            planeRef.current,
            { y: "100%" },
            {
              y: "-120%",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                scrub: 27,
                pin: true,
              },
            }
          );
        }, sectionRef);
      
        return () => ctx.revert();
      }, []);

      const container = {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.8,
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
      
      

  return (
  <div 
   id="Ourfloot"
 ref={sectionRef}

 className="lg:h-screen w-full  overflow-hidden  md:h-full     relative">
    <div  className="back flex lg:items-end items-end lg:justify-end  justify-center h-full w-full ">
        <motion.div variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.8 }} className='lg:py-30 md:py20 py-30 lg:gap-0 gap-10 md:gap-20  lg:px-15     text-[#312726] w-full  grid lg:grid-cols-2'>
            <motion.div variants={leftVariant}  className='h-full Gt3 w-full flex lg:items-start items-center lg:gap-0 gap-6 justify-start flex-col '>
                <h1 className='lg:text-8xl text-7xl md:text-9xl lg:text-left text-center  tracking-tighter'>Fly in</h1>
                <h4 className='tracking-tighter lg:text-[1.6vw] md:text-3xl text-1xl lg:leading-6 md:leading-7 leading-4  lg:text-left text-center'>Luxury <br /> That Moves <br /> With you</h4>
            </motion.div>
            <motion.div   variants={rightVariant}
 className='h-full  Gt3 w-full  lg:gap-6 gap-5 flex lg:items-end items-center justify-start flex-col '>
                <h1 className='lg:text-8xl text-7xl md:text-8xl tracking-tighter'>Luxury</h1>
                <h4 className='tracking-tighter lg:px-0  lg:w-sm md:w-3xl lg:text-[1vw] text-[3vw] px-7 md:px-0  lg:leading-5 md:leading-7 lg:text-right text-center'>Featuring wings designed to minimize
anything that could disrupt its natural
aerodynamic balance, and powered by
high-thrust Rolls-Royce BR725 AI-12 engines,
the Gulfstream G650 is engineered for
exceptional range and top-end speed.</h4>
    </motion.div>  
    </motion.div>
    </div>
   <div
    ref={planeRef}
    className="absolute bottom-0 left-0 w-full   lg:h-svw  z-20 pointer-events-none"
    >
    <img
     loading="lazy"
      src={plane}
      className="w-full h-full lg:object-contain object-cover"
      alt="plane"
    />
  </div>
      
    </div>
  )
}

export default OurFloot
