import React, { useState } from 'react'
import { IoIosClose, IoIosSend } from "react-icons/io";
import TextField from "@mui/material/TextField";
import { motion, AnimatePresence } from "framer-motion";

const Ourfligths = () => {
  const [Openpopup, setOpenpopup] = useState(false)
  const [name, setname] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Arriving, setArriving] = useState("")

  const buttonHandler = () => {
    setOpenpopup(true); 
  };

    const Close = () => {
    setOpenpopup(false);
  };


  const fromhanlder  = (e) =>{
    e.preventDefault();
    setname("")
    setEmail("")
    setPassword("")
    setArriving("")
    alert("did you have submit is ???")
    // console.log(`your name is ${name} your Email is ${Email} and your password is ${Password} and arrving is ${Arriving}`)

  }



  const popupVariants = {
    hidden: {
      opacity: 0,
      y: 90,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 80,
      scale: 0.95,
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
    },
  };

  
  return (
    <div className='h-full w-full xl:px-21 lg:px-14  lg:py-1 md:py-5   py-2 flex items-end justify-end fixed  z-50 inset-0  bottom-0 left-0  pointer-events-none  '>
      <div className='lg:min-h-[30vh] lg:py-4  min-h-[60vh] md:min-h-[20vh] flex items-end justify-end  w-full  relative '>
  
  {/* Our fight button */}

  <div className='pointer-events-auto h-full  w-full    flex items-end justify-center  ' >
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
      <h2 className='Gt2 xl:text-[1.1vw] lg:text-[1.7vw] md:text-2xl text-[3.3vw] mt-1 tracking-tighter '>Book the flight</h2>
      </div>
 
       <div className='p-2 rounded-full  bg-white text-black'>
       <IoIosSend className='cursor-pointer xl:text-[1.4vw] md:text-3xl lg:text-2xl' />
       </div>
    </button>
  </div>

  {/* our flight form */}



<AnimatePresence>
{
  Openpopup && (

    <motion.div    variants={popupVariants}
    initial="hidden"
    animate="visible"
    exit="exit" className='pointer-events-auto h-full w-full lg:py-0 py-3 opacity-100 lg:rounded-3xl flex items-center justify-start overflow-hidden lg:flex-row flex-col absolute top-0 left-0  bg-white  lg:px-2'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
          onClick={Close}  className='py-3 px-3 w-fit  absolute top-0 right-0'>
        <IoIosClose className='cursor-pointer text-4xl' />

        </motion.div>
    <motion.div   initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}  className='h-full flex items-center justify-center px-5  '>
      <h2 className='Gt3 text-3xl md:text-5xl  xl:text-4xl lg:text-3xl 2xl:text-6xl' >Contact</h2>
    </motion.div>
    <motion.div   initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }} className=' h-full w-full   px-3 pointer-events-auto '>
        <form onSubmit={fromhanlder}  className='h-full flex items-center justify-start lg:flex-row flex-col md:flex-row lg:gap-5 lg:md:flex-row  gap-5 w-full '> 
        <TextField
         id="filled-multiline-flexible"
         label="Name"
         type='name'
         maxRows={3}
         value={name}
         required
         placeholder='Email'
         onChange={(e)=>{
          setname(e.target.value)

         }}

    
       />

<TextField
         id="filled-multiline-flexible"
         label="Email"
         type='email'
         maxRows={3}
         value={Email}
         required
         placeholder='Email'
         onChange={(e)=>{
          setEmail(e.target.value)

         }}
       />
       <TextField
         id="filled-multiline-flexible"
         label="Password"
         type="password"
         maxRows={3}
         value={Password}
         required
         placeholder="password"
         onChange={(e)=>{
          setPassword(e.target.value)

         }}
       />

<TextField
         id="filled-multiline-flexible"
         label="Arivving"
         multiline
         maxRows={3}
         required
         placeholder="Arivving"
         value={Arriving}
         onChange={(e)=>{
          setArriving(e.target.value)

         }}
       
       />
<button
  type="submit"
  className='pointer-events-auto cursor-pointer p-2 rounded-full bg-black text-white'
>
  <IoIosSend className='text-2xl md:text-3xl xl:text-[2vw] lg:text-[2vw] ' />
</button>
        </form>
    </motion.div>
  </motion.div>
  )
 }
 

</AnimatePresence>



         
      </div>
      
    </div>
  )
}

export default Ourfligths
