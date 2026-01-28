import React, { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // GSAP animation for menu
  useEffect(() => {
    if (menuOpen) {
      // slide in menu
      gsap.fromTo(
        menuRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.8, ease: "power4.out" }
      );

      // stagger links
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.2, delay: 0.4, ease: "power3.out" }
      );
    }
  }, [menuOpen]);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const menuLinks = [
    { label: "About", href: "/about" },
    { label: "Advantages", href: "/advantages" },
    { label: "Global", href: "/global" },
    { label: "+971 54 432 5050", href: "tel:+971544325050" },
    { label: "info@jeskojets.com", href: "mailto:info@jeskojets.com" },
  ];

  return (
    <div className="lg:hidden fixed inset-0 z-[999]">
      {/* Menu Icon */}
      {!menuOpen && (
        <div
          onClick={openMenu}
          className="flex justify-end p-3 md:p-5 cursor-pointer z-[1000] relative"
        >
          <IoIosMenu className="text-4xl md:text-5xl text-white" />
        </div>
      )}

      {/* Menu Overlay */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[999] bg-white flex flex-col"
        >
          {/* Close Icon */}
          <div
            onClick={closeMenu}
            className="flex justify-end p-3 cursor-pointer"
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
