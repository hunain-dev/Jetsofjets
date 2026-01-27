import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const menuRef = useRef(null);

  // initial hide

  // OPEN
 

  return (
    <div className='pt-6  lg:opacity-100 md:opacity-0 opacity-100 cursor-pointer z-999  w-full text-white grid grid-cols-2 fixed'>
        <div className='Gt flex lg:opacity-100 opacity-0  items-center justify-start px-24 gap-9 h-full w-full'>
            <a href='#Aboutus'>About</a>
            <a href='#Ourfloot'>Our floot</a>
            <a href='#Advantages'>Advantages</a>
            <a href='#Global'>Global</a>
        </div>
 <div className='Gt flex  lg:opacity-100 opacity-0  items-center justify-end px-24 gap-9 h-full w-full '>
            <h2>+971 54 432 5050</h2>
<h2>info@jeskojets.com</h2>


        </div>  




{/* 
  <div className="lg:opacity-0 bg-black md:opacity-0 opacity-100 h-screen w-full absolute top-0 left-0  ">
    <div       onClick={openHandler} className="py-4 px-3 flex items-center justify-end w-full relative text-black"> 
      <IoIosMenu   
      
 className="text-4xl text-white"/>
    </div>
    {openMenu && (
        <div
          ref={menuRef}
          className="absolute top-0 left-0 h-screen w-full bg-blue-400 z-40"
        >
          <button
            onClick={closeHandler}
            className="absolute top-4 right-4 z-50 text-white"
          >
            <IoIosClose className="text-4xl" />
          </button>
        </div>
      )}
  </div> */}






    </div>
  )
}

export default Header
