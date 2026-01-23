import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    // 🔹 Text fade + move up

    tl.from(textRef.current, {
        opacity: 1,
        y: -40,
        delay:0.3,
        duration: 1.2,
        ease: "power3.inOut",
      })
  
    tl.to(textRef.current, {
      opacity: 0,
      y: 40,
    delay:1.5,
      duration: 1,
      ease: "power3.inOut",
    })

      // 🔹 Loader slide LEFT and exit
      .to(loaderRef.current, {
        x: "-100%",
        duration: 3,
        scrub:4,
        ease: "power4.inOut",
        pointerEvents: "none",
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
        <h2 className="Gt uppercase text-lg">Jesko Jets</h2>
        <h1 className="text-center Gt3 text-[1.4vw] leading-6 tracking-tighter">
          Private Jets character <br /> World wide
        </h1>
      </div>
    </div>
  );
};

export default Loader;
