import React, { useEffect } from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from 'react';
import Home from './Section/Home/Home';
import Aboutus from './Section/Aboutus/Aboutus';
import OurFloot from './Section/OurFloot/OurFloot';

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


  return (
    <div ref={scrollRef}>
      <div className=' w-full '>
        <Home/>
        <Aboutus/>
        <OurFloot/>
    
      </div>
      
    </div>
  )
}

export default App
