import React, { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";

const Menu = () => {
const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (menuOpen) {
      // menu slide in
      gsap.fromTo(
        menuRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.8, ease: "power4.out" }
      );

      // close icon
      gsap.fromTo(
        closeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, delay: 0.4 }
      );

      // menu items stagger
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.4,
          scrub:1,
          delay: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [menuOpen]);

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      x: "-100%",
      duration: 0.6,
      ease: "power4.in",
      onComplete: () => setMenuOpen(true),
    });
  };


  const menuLinks = [
    { label: "About", href: "/about" },
    { label: "Advantages", href: "/advantages" },
    { label: "Global", href: "/global" },
    { label: "+971 54 432 5050", href: "tel:+971544325050" },
    { label: "info@jeskojets.com", href: "mailto:info@jeskojets.com" },
  ];
  return (
    <div className="lg:hidden h-screen bg-black fixed inset-0  w-full  top-0 left-0 z-999 ">
      <div
        onClick={() => setMenuOpen(true)}
        className=" flex justify-end p-3 md:p-5"
      >
        <IoIosMenu className="text-4xl md:text-5xl text-white cursor-pointer" />
      </div>

      {/* menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="h-full w-full bg-white fixed top-0 left-0  z-999 "
        >
          <div
            ref={closeRef}
            onClick={closeMenu}
            className="flex justify-end p-3"
          >
            <IoCloseOutline className=" text-4xl md:text-5xl text-black cursor-pointer" />
          </div>

          <div className="Gt3 flex flex-col items-end gap-4 md:gap-7 p-5 text-2xl">
          {menuLinks.map((item, i) => (
  <a
    key={i}
    href={item.href}
    ref={(el) => (linksRef.current[i] = el)}
    className="opacity-0 cursor-pointer"
  >
    <h2 className="md:text-4xl">{item.label}</h2>
  </a>
))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
