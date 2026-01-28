import React, { useState } from 'react'
import { IoIosClose, IoIosSend } from "react-icons/io";
import TextField from "@mui/material/TextField";

const Ourfligths = () => {
  const [Openpopup, setOpenpopup] = useState(false)

  const buttonHandler = () => {
    setOpenpopup(true); 
  };


    const Close = () => {
    setOpenpopup(false);
  };

  return (
    <div className='pointer-events-none h-screen w-full   xl:py-6  xl:px-13 lg:px-14  lg:py-6 md:py-5   py-2 flex items-end justify-end fixed z-999'>
      <div className='lg:min-h-[30vh] lg:py-4  min-h-[60vh] md:min-h-[20vh] flex items-end justify-end  w-full  relative '>
  
  {/* Our fight button */}

  <div className='h-full  w-full    flex items-end justify-center  ' >
    <button onClick={buttonHandler} className='xl:p-2 xl:py-2 xl:px-3 lg:p-2 lg:px-4 p-1 py-2  px-2 
    flex items-center justify-between gap-1
    rounded-full
    backdrop-blur-md
    bg-white/20
    border border-white/30
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    text-white
    transition-all duration-300 ease-out
    active:scale-[0.97]'>
      <div className='cursor-pointer   flex items-center  w-full xl:p-1  xl:px-4 md:px-5 md:py-2 px-4 py-1 lg:px-6 rounded-full  justify-center bg-white   text-black'>
      <h2 className='Gt2 xl:text-[1.1vw] lg:text-[1.7vw] md:text-2xl text-[3vw] mt-1 tracking-tighter '>Book the flight</h2>
      </div>
 
       <div className='p-2 rounded-full  bg-white text-black'>
       <IoIosSend className='cursor-pointer xl:text-[1.4vw] md:text-3xl lg:text-2xl' />
       </div>
    </button>
  </div>

  {/* our flight form */}


 {
  Openpopup && (
    <div className='h-full w-full lg:py-0 py-3 opacity-100 lg:rounded-3xl flex items-center justify-start overflow-hidden lg:flex-row flex-col absolute top-0 left-0 lg:bg-white bg-white'>
   
        <div onClick={Close}  className='py-3 px-3 w-fit  absolute top-0 right-0'>
        <IoIosClose className='cursor-pointer text-4xl' />

        </div>
    <div className='h-full flex items-center justify-center px-5  '>
      <h2 className='Gt3 text-3xl md:text-5xl  xl:text-4xl'>Contact</h2>
    </div>
    <div className=' h-full w-full   px-3'>
        <form action="" className='h-full flex items-center justify-start lg:flex-row flex-col md:flex-row lg:gap-12 gap-5 w-full '> 
        <TextField
         id="filled-multiline-flexible"
         label="Name"
         multiline
         className="Gt3"
         maxRows={3}
         required
    
       />

<TextField
         id="filled-multiline-flexible"
         label="Email"
         multiline
         maxRows={3}
        //  value={Email}
         required
        //  onChange={(e)=>{
        //   setEmail(e.target.value)

        //  }}
       />
       <TextField
         id="filled-multiline-flexible"
         label="Password"
         multiline
         maxRows={3}
        //  value={password}
         required
         placeholder="City,country"
        //  onChange={(e)=>{
        //   setpassword(e.target.value)

        //  }}
       />

<TextField
         id="filled-multiline-flexible"
         label="Arivving"
         multiline
         maxRows={3}
         required
     
       
       />
 <div className='p-2 rounded-full  bg-black text-white'>
       <IoIosSend className='text-2xl md:text-3xl xl:text-2xl ' />
       </div>
        </form>
    </div>
  </div>
  )
 }
 



         
      </div>
      
    </div>
  )
}

export default Ourfligths
