import jetshome from "../../assets/images/Jets.webp"
import backclouds from "../../assets/images/Clouds.webp"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import cloudy from "../../assets/images/real.png"
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

  
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
      
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=100%",
              scrub: 3,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
      
          // IMAGE ZOOM
          tl.fromTo(
            imageRef.current,
            {
              scale: 1.2,
              transformOrigin: "center center",
            },
            {
              scale: 6.1,
              ease: "none",
            },
            0
          );
      
          // TEXT SCROLL / MOVE
          tl.fromTo(
            textRef.current,
            {
              opacity: 1,
              scale: 1.2,

            },
            {
                scale: 6.1,
              ease: "none",
            },
            0
          );
      
        }, containerRef);
      
        const img = imageRef.current;
        if (img.complete) {
          ScrollTrigger.refresh();
        } else {
          img.onload = () => ScrollTrigger.refresh();
        }
      
        return () => ctx.revert();
      }, []);
      
    
    

  return (
    <div  id="home"     ref={containerRef}
    className='h-screen w-full relative overflow-hidden '>
        <div className='h-full w-full  relative'>
            <img src={backclouds} alt="clouds image" className='h-full w-full object-cover' />


            <div className=" h-full  w-full overflow-hidden absolute top-0 left-0 items-center justify-center">

                <div className="flex w-max animate-clouds ">
    
    {/* first set */}
    <div className=" w-full grid grid-cols-4">
              <img src={cloudy} className="h-full w-full object-contain" alt="" />
              <img src={cloudy} className="h-full w-full object-contain" alt="" />
              <img src={cloudy} className="h-full w-full object-contain" alt="" />
              <img src={cloudy} className="h-full w-full object-contain" alt="" />

                </div>
      

    {/* second set (duplicate for infinite loop) */}
    <div className=" w-full grid grid-cols-4">
              <img src={cloudy} className="h-full w-full object-contain" alt="" />
              <img src={cloudy} className="h-full w-full object-contain" alt="" />
              <img src={cloudy} className="h-full w-full object-contain" alt="" />
              <img src={cloudy} className="h-full w-full object-contain" alt="" />

                </div>
      

  </div>

 
    </div>        </div>
        <div className='h-full w-full  absolute top-0 left-0 '>
            <img    ref={imageRef} 
 src={jetshome} className='h-full w-full object-cover object-center' alt="" />

<div
  ref={textRef}
  className="
    absolute inset-0
    grid grid-cols-2
    pointer-events-none
    z-[60]
    px-45
    gap-40
    
    ">
  <div className="flex flex-col items-center text-white justify-center gap-20 mt-8">
    <div className="Gt3  h-[23vh] leading-12  w-full  flex items-center justify-start">
      <h1 className="text-[4.3vw] tracking-tighter">We are<br />movement</h1>
    </div>
    <div className=" w-full flex items-start justify-start gap-10 flex-col  ">
        <h2 className="Gt3 tracking-tighter leading-4">Your <br />Freedom to <br />Enjoy life</h2>
        <div className="h-full w-full">
            <h3 className="text-[0.9vw] leading-3.5 w-3xs">Every flight is designed around your comfort, time, and ambitions — so you can focus on what truly matters, while we take care of everything else." </h3>

        </div>
    </div>
  </div>

  <div className="h-full w-full  flex   items-end py-30 justify-end  ">
    <div className="gap-16 flex items-center justify-between flex-col w-full text-white ">
        <h2 className="Gt3 leading-14 text-6xl tracking-tighter text-right">We are <br /> distinction</h2>
        <div className="Gt  uppercase flex items-center justify-between py-3 w-full  border-t-1 border-t-white">
            <a href="#Aboutus" className=" cursor-pointer text-[0.8vw]">Scroll down</a>
            <h2 className="text-[0.8vw]">Start the journey</h2>
        </div>
    </div>
  </div>
</div>

        </div>



    </div>
  )
}

export default Home
