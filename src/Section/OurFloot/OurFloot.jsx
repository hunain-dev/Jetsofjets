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

 className="h-screen w-full overflow-hidden     relative">
    <div  className="back flex items-end justify-end h-full w-full ">
        <motion.div variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.8 }} className='py-30  px-15  text-[#312726] w-full  grid grid-cols-2'>
            <motion.div variants={leftVariant}  className='h-full Gt3 w-full '>
                <h1 className='text-8xl tracking-tighter'>Fly in</h1>
                <h4 className='tracking-tighter'>Luxury <br /> That Moves <br /> With you</h4>
            </motion.div>
            <motion.div     variants={rightVariant}
 className='h-full Gt3 w-full gap-12 flex items-end justify-start flex-col '>
                <h1 className='text-8xl tracking-tighter'>Luxury</h1>
                <h4 className='tracking-tighter w-sm text-[1vw] leading-5 text-right'>Featuring wings designed to minimize
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
    className="absolute bottom-0 left-0 w-full h-svw z-20 pointer-events-none"
    >
    <img
      src={plane}
      className="w-full h-full object-contain"
      alt="plane"
    />
  </div>
      
    </div>
  )
}

export default OurFloot
