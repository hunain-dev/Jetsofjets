import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const Advantages = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const imageRef = useRef(null);
    const isFirstRender = useRef(true);
    const [time, setTime] = useState("");

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
        if (!imageRef.current) return;

        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
          }
        // 👇 start choti image se
        gsap.set(imageRef.current, {
          scale: 0.8,
          opacity: 0,
        });
      
        // 👇 smoothly badi ho
       gsap.fromTo(
    imageRef.current,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      clearProps: "opacity,transform",
    }
  );
      }, [activeIndex]);
      
      
      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

    //   localtime of dubai
      useEffect(() => {
        const updateTime = () => {
          const dubaiTime = new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Dubai",
            hour: "2-digit",
            minute: "2-digit",
          });
          setTime(dubaiTime);
        };
    
        updateTime(); // initial
        const interval = setInterval(updateTime, 1000);
    
        return () => clearInterval(interval);
      }, []);

    const faqs = [
        {
          question: "Pets",
          answer: "Traveling with pets on a private jet means comfort and peace of mind for both owners and their companions. Our dedicated team ensures seamless arrangements, from documentation and safety to onboard care, so that your pet enjoys the same level of attention and luxury as you do. Every detail is managed to create a stress-free and enjoyable journey for everyone on board.",
          image: "/assets/Images/Aeroplanegate.webp",

        },
        {
            question: "24/7 availability",
            answer: "Our team is available around the clock to handle any request, no matter the time zone or urgency. From last-minute flight arrangements to personalized services, we provide seamless support whenever you need it. With us, assistance is never more than a call away.",
            image: "/assets/Images/Mandrinking.webp",

          },
          {
            question: "Onboard services",
            answer: "Every flight is tailored with a range of personalized onboard services designed to elevate your journey. From fine dining and curated entertainment to attentive crew and seamless connectivity, every detail is arranged to ensure maximum comfort and enjoyment in the air.",
            image: "/assets/Images/PetsSeeing.webp",

          },
          {
            question: "Efficient",
            answer: "operate. From optimized routes and streamlined procedures to quick boarding and smooth ground handling, we make sure your time is always used wisely. The result is a seamless journey that gets you where you need to be, faster and without compromise.",
            image: "/assets/Images/Airport.webp",

          },
    
      ];
  
  return (
    <div id="Advantages"  
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className=' md:px-0   px-3 lg:py-20 md:py-10  w-full'>
        <div className='h-full w-full lg:mt-0 mt-20 grid lg:grid-cols-2'>
        <div className='h-full  '>


        <motion.div variants={leftVariant}  className='h-full  lg:px-12 '>
           <div className="lg:py-12  py-9  px-4">
      <div className="lg:space-y-1 space-y-10 md:space-y-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-400 lg:pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="figee flex justify-between items-center">
              <h3 className="Gt3 lg:text-[1.6vw]  text-[4.4vw] md:text-[4vw] text-[#222221FF] ">{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="Gt3 lg:text-[1vw] md:text-2xl ">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </motion.div>

        
        </div>
        <motion.div variants={rightVariant} className='h-fit md:px-3 w-full flex items-center justify-center overflow-hidden '>
            <img  
             loading="lazy"
                ref={imageRef}

    src={faqs[activeIndex]?.image}
 className=' rounded-2xl lg:h-130 lg:w-100 md:h-160 md:w-full object-cover   transition-all duration-500
             ' alt="" />
        </motion.div>
      
        </div>
      

      <motion.div variants={rightVariant} className=' mt-7 w-full lg:px-12 py-4 border-t-1 border-gray-500  grid lg:grid-cols-2'>
        <div className='h-full  '>
            <h2 className='Gt3 opacity-40 lg:text-[0.8vw] text-1xl'>
            Countries supported</h2>
            <h2 className='Gt3  lg:text-[1vw]'>
            174</h2>
        </div>
        <div className='h-full  flex items-start justify-between lg:flex-row flex-col' >
            <div>    <h2 className='Gt3 opacity-40 lg:text-[1.2vw]'>
            Based in
</h2>
            <h2 className='Gt3  lg:text-[0.7vw]'>
            Dubai, OAE
</h2></div>
<div className='flex items-center justify-center lg:gap-2 gap-3' >    <h2 className='Gt3 opacity-40 lg:text-[0.8vw]'>
            Local time
</h2>
<h2 className="Gt3 lg:text-2xl md:text-2xl text-right">{time}</h2>
</div>
      
        </div>
      </motion.div>
    </div>
  )
}

export default Advantages
