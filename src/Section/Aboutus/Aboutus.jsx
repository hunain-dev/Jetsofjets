import React, { useEffect } from 'react'
import SplitType from "split-type";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);

const Aboutus = () => {
  const textRef = useRef([]);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    textRef.current.forEach((element) => {
      const text = new SplitType(element, { types: "chars" });

      const scrollConfig = {
        trigger: element,
        start: "top 80%",
        end: "top 60%",
        scrub: 7,
      };

      // Opacity reveal
      gsap.fromTo(
        text.chars,
        { opacity: 0.4 },
        {
          opacity: 1,
          stagger: 4,
          duration:7,
          scrollTrigger: scrollConfig,
        }
      );

      // Color reveal for span text
      gsap.fromTo(
        element.querySelectorAll("span .char"),
        { color: "white" },
        {
          color: "#ff0000",
          stagger: 3,
          scrollTrigger: scrollConfig,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

    const obj = [
        {
            tittle:<>
            Direct Access to <br/>  Private Travel
            </>,
            desc:"Fly beyond boundaries with Jesko Jets. Our global operations ensure seamless, personalized travel experiences — from the first call to landing. Every journey is tailored to your comfort, privacy, and schedule."
        },
        {
            tittle:<>
         Your Freedom to <br/>   Enjoy  Life
         
            </>,
            desc:"We value your time above all. Jesko Jets gives you the freedom to live, work, and relax wherever life takes you — without compromise."
        },
        {
            tittle:<>
           Precision and <br/>  Excellence
           
            </>,
            desc:"Each detail of your flight — from route planning to in-flight service — reflects our dedication to perfection. Our crew and fleet meet the highest global standards, ensuring reliability in every mission."
        },
        {
            tittle:<>
           Global Reach,
           <br/>
           
            Personal Touch
            </>,
            desc:"With access to destinations in over 150 countries, Jesko Jets brings the world closer to you. Our experts manage every aspect of your flight, guaranteeing a smooth and effortless journey."
        },
        
    ]
  return (
<div id="Aboutus"   className="lg:h-[200vh]     lg:py-0 py-6 w-full bg-[#2875B7] relative">
<div className='back h-full w-full'>
        <img   loading="lazy"src="/assets/Images/Aboutclouds.png" className='h-full w-full object-cover' alt="" />
        </div>
        <div className='front  lg:pt-20 pt-10 lg:px-20 2xl:px-23 px-5    h-full w-full  absolute top-0 left-0'>
            <div className='w-full '>
                <h2  ref={(el) => (textRef.current[0] = el)} className='text-white  Gt3 tracking-tighter xl:leading-14 leading-9  xl:text-[3.4vw] lg:text-4xl md:text-6xl text-2xl 2xl:text-[3.6vw] 2xl:leading-16'>Jesko Jets® is a private aviation operator with over 5,000 missions completed across 150+ countries. From international executives to global industries, our clients trust us to deliver on time, every time.
                </h2>
            </div>

            <div className=' text-white lg:mt-15 2xl:mt-30 md:mt-30 mt-10 w-full  grid lg:grid-cols-2'>
                <div className='h-full w-full flex lg:items-start items-center lg:justify-start justify-between gap-5 '>
                    <div className=' flex items-center   gap-3 justify-start  '>
                    <svg className='w-9 md:w-13' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 0V0.00390625C24.8495 0.177953 31.7308 7.00538 31.9915 15.5H32V16.5H31.9915C31.7308 24.9946 24.8495 31.8211 16.3333 31.9951V32H15.6667V31.9951C7.15049 31.8211 0.269246 24.9946 0.00846354 16.5H0V15.5H0.00846354C0.269245 7.00538 7.15048 0.177952 15.6667 0.00390625V0H16.3333ZM9.60677 23.332C9.95168 24.5831 10.38 25.7213 10.8763 26.7139C12.152 29.2652 13.8414 30.8145 15.6667 30.9834V23.9941C13.5156 23.9722 11.469 23.7383 9.60677 23.332ZM22.3926 23.332C20.5305 23.7382 18.4842 23.9722 16.3333 23.9941V30.9834C18.1586 30.8145 19.848 29.2652 21.1237 26.7139C21.6199 25.7214 22.0477 24.5829 22.3926 23.332ZM0.912109 18.667C1.46093 21.6247 2.91108 24.3365 5.05599 26.4814C7.12089 28.5463 9.79417 30.0412 12.8034 30.6699C11.0841 29.1691 9.68108 26.495 8.8444 23.1533C5.16676 22.2325 2.29797 20.6261 0.912109 18.667ZM31.0872 18.667C29.7012 20.626 26.8326 22.2326 23.1549 23.1533C22.3182 26.4952 20.9154 29.1693 19.196 30.6699C22.2054 30.0413 24.879 28.5465 26.944 26.4814C29.0889 24.3365 30.5384 21.6246 31.0872 18.667ZM8.67318 16.5C8.70627 18.5578 8.94196 20.5029 9.33919 22.2607C11.26 22.7094 13.4009 22.9707 15.6667 22.9941V16.5H8.67318ZM16.3333 22.9941C18.5989 22.9707 20.7395 22.7093 22.6602 22.2607C23.0574 20.5028 23.2937 18.5579 23.3268 16.5H16.3333V22.9941ZM0.716146 16.5C0.822879 17.0508 1.1121 17.6677 1.66992 18.3271C2.39607 19.1855 3.48825 20.0026 4.89714 20.707C5.97874 21.2478 7.22562 21.71 8.59896 22.0762C8.24395 20.3482 8.03478 18.4693 8.00456 16.5H0.716146ZM23.9954 16.5C23.9652 18.4694 23.7554 20.3481 23.4004 22.0762C24.774 21.7099 26.0211 21.2479 27.1029 20.707C28.5118 20.0026 29.6039 19.1855 30.3301 18.3271C30.8879 17.6677 31.1771 17.0508 31.2839 16.5H23.9954ZM8.59896 9.9209C7.22558 10.2871 5.97877 10.7502 4.89714 11.291C3.48825 11.9955 2.39607 12.8125 1.66992 13.6709C1.11201 14.3305 0.822838 14.9486 0.716146 15.5H8.00456C8.0348 13.5297 8.24362 11.6496 8.59896 9.9209ZM15.6667 9.00293C13.4012 9.0264 11.2605 9.28777 9.33984 9.73633C8.94222 11.495 8.70629 13.4411 8.67318 15.5H15.6667V9.00293ZM16.3333 15.5H23.3268C23.2937 13.441 23.0572 11.4951 22.6595 9.73633C20.7391 9.28786 18.5986 9.0264 16.3333 9.00293V15.5ZM23.4004 9.9209C23.7558 11.6497 23.9652 13.5296 23.9954 15.5H31.2839C31.1772 14.9486 30.888 14.3305 30.3301 13.6709C29.6039 12.8125 28.5118 11.9955 27.1029 11.291C26.0211 10.7501 24.774 10.2871 23.4004 9.9209ZM12.8034 1.3291C9.79414 1.95782 7.12091 3.45363 5.05599 5.51855C2.91152 7.66308 1.46118 10.374 0.912109 13.3311C2.29829 11.3719 5.16754 9.76483 8.84505 8.84375C9.68187 5.50322 11.0844 2.8294 12.8034 1.3291ZM19.196 1.3291C20.9151 2.82927 22.3174 5.50306 23.1543 8.84375C26.8318 9.76472 29.7009 11.372 31.0872 13.3311C30.5381 10.3741 29.0884 7.66301 26.944 5.51855C24.8789 3.45349 22.2055 1.95774 19.196 1.3291ZM15.6667 1.01562C13.8414 1.18451 12.152 2.73478 10.8763 5.28613C10.3804 6.27791 9.9522 7.41512 9.60742 8.66504C11.4694 8.25873 13.5159 8.02491 15.6667 8.00293V1.01562ZM16.3333 8.00293C18.4839 8.02491 20.5301 8.25881 22.3919 8.66504C22.0472 7.41525 21.6195 6.27782 21.1237 5.28613C19.848 2.73478 18.1586 1.18451 16.3333 1.01562V8.00293Z" fill="currentColor"></path>
</svg>
<svg className='w-13 md:w-20' viewBox="0 0 88 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.869273 16.5748H6.5322C6.38838 17.2939 6.31647 17.977 6.31647 18.6242C6.35243 21.1411 7.4131 23.2624 9.4985 24.9883C11.6198 26.6782 14.712 27.5231 18.7749 27.5231C28.303 27.5231 33.7502 23.7838 35.1165 16.3051L38.521 -0.000246535H44.13L40.7255 16.3051C39.8626 21.231 37.5794 25.0781 33.8761 27.8467C30.1727 30.6152 24.8693 31.9995 17.9659 31.9995C11.6738 31.9995 7.19737 30.795 4.53669 28.386C1.91197 25.977 0.599609 23.0467 0.599609 19.595C0.599609 18.6602 0.689497 17.6534 0.869273 16.5748Z" fill="currentColor"></path>
<path d="M87.1303 15.4238H81.4674C81.6112 14.7047 81.6831 14.0215 81.6831 13.3743C81.6472 10.8575 80.5865 8.73612 78.5011 7.01027C76.3798 5.32038 73.2876 4.47544 69.2247 4.47544C59.6966 4.47544 54.2494 8.21477 52.8831 15.6934L49.4786 31.9988H43.8696L47.2741 15.6934C48.137 10.7676 50.4202 6.92038 54.1236 4.15184C57.8269 1.38329 63.1303 -0.000976562 70.0337 -0.000976562C76.3258 -0.000976562 80.8022 1.20352 83.4629 3.61251C86.0876 6.0215 87.4 8.95185 87.4 12.4035C87.4 13.3384 87.3101 14.3451 87.1303 15.4238Z" fill="currentColor"></path>
</svg>
                    </div>
                    <div className='h-full'>
                        <h2 className='Gt3 lg:text-[0.7vw] md:text-[2.5vw] text-[2vw]'>by Evgeny Demidenko <br />2013</h2>
                    </div>

     
                </div>
                <div className="h-fit lg:mt-3 md:mt-20 mt-10 gap-6  lg:gap-19 w-full grid grid-cols-2 ">
  {obj.map((elem, index) => {
    return (
      <div key={index} className=" h-full w-full ">
        <div className="flex flex-col lg:gap-6 md:gap-10 gap-5">
          <h2 className="Gt3 lg:leading-5 lg:text-[1.5vw] md:text-[3.3vw] text-[3vw] 2xl:leading-7   2xl:text-2xl ">{elem.tittle}</h2>
          <h4 className="lg:leading-4 Gt2 lg:text-[0.9vw]  md:text-[2.3vw] text-[2vw] 2xl:text-[1.2vw] 2xl:leading-6">
            {elem.desc}
          </h4>
        </div>
      </div>
    );
  })}
</div>

            </div>
        </div>

      
    </div>
  )
}

export default Aboutus
