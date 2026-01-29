import React, { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // GSAP animation for menu
  useEffect(() => {
    if (menuOpen) {
      // 🔥 OPEN ANIMATION
      const tl = gsap.timeline();
  
      // menu slide in
      tl.fromTo(
        menuRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.8, ease: "power4.out" }
      );
  
      // links stagger in
      tl.fromTo(
        linksRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      );
    } else if (menuRef.current) {
      // 🔥 CLOSE ANIMATION
      const tl = gsap.timeline();
  
      // 1️⃣ links out first
      tl.to(linksRef.current, {
        opacity: 0,
        x: -40,
        stagger: 0.5,
        duration: 0.5,
        ease: "power3.in",
      });
  
      // 2️⃣ menu slide out
      tl.to(
        menuRef.current,
        {
          x: "-100%",
          duration: 0.6,
          ease: "power4.in",
        },
        "-=0.15"
      );
    }
  }, [menuOpen]);
  


  const menuLinks = [
    { label: "About", href: "#Aboutus" },
    { label: "Our floot", href: "#Ourfloot" },
    { label: "Advantages", href: "#Advantages" },
    { label: "Global", href: "#Global" },
    { label: "+971 54 432 5050", href: "tel:+971544325050" },
    { label: "info@jeskojets.com", href: "mailto:info@jeskojets.com" },
  ];

  return (
<div className="lg:hidden pointer-events-auto z-[1000] fixed top-0 right-0">
{/* Menu Icon */}
        <div
          onClick={openMenu}
          className="flex justify-end p-3 md:p-5 cursor-pointer z-[1000] relative"
        >
          <IoIosMenu className="text-4xl md:text-5xl text-white" />
        </div>

      {/* Menu Overlay */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[1000] bg-white flex flex-col pointer-events-auto"
          >
          {/* Close Icon */}
          <div
  onClick={closeMenu}
  className="flex justify-end p-3 md:p-5 cursor-pointer relative z-[1001] pointer-events-auto"
>
  <IoCloseOutline className="text-4xl md:text-5xl text-black" />
</div>

          {/* Menu Links */}
          <div className="flex flex-col items-end gap-4 md:gap-7 p-5 text-2xl Gt3">
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
