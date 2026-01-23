import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
  
    // 1️⃣ Text comes UP (bottom → center)
    tl.from(textRef.current, {
      y: 40,         // start below
      opacity: 0,    // start invisible
      duration: 1.2,
      ease: "power3.out",
    })
  
    // 2️⃣ Small hold (center pause)
    .to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6, // smooth hold
    })
  
    // 3️⃣ Text goes UP and fades out
    .to(textRef.current, {
      y: -40,        // goes up
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
    }, "+=0.6")     // hold for 0.6s before moving up
  
    // 4️⃣ Loader slides LEFT & disappears
    .to(loaderRef.current, {
      x: "-100%",    // left slide
      duration: 1.9,
      ease: "power4.inOut",
      pointerEvents: "none", // scroll unlock
    });
  }, []);
  
  
  
  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] bg-[#1E1A16] flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-white flex flex-col items-center gap-3"
      >
        <h1 className="text-center Gt3 text-[1.4vw] leading-6 tracking-tighter">
          Private Jets character <br /> World wide
        </h1>
      </div>
    </div>
  );
};

export default Loader;
