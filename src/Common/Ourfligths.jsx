import { IoPaperPlane } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";


const Ourfligths = () => {

  const [Openpopup, setOpenpopup] = useState(false)

  const buttonHandler = () => {
    setOpenpopup(true); 
  };


    const Close = () => {
    setOpenpopup(false);
  };
  return (
<div className=' opacity-0    h-1/4   md:h-1/3 lg:h-2/5 xl:h-1/2
 pointer-events-none overflow-hidden lg:p-5 md:p-10 cursor-pointer lg:px-15 flex items-end justify-center w-full fixed bottom-0 z-50'>
<div className="back h-full cursor-pointer pointer-events-auto  overflow-hidden w-full flex items-end justify-center relative  ">
      <div onClick={buttonHandler}  className="

overflow-hidden
p-1

  rounded-full
  bg-white/20
  backdrop-blur-md
   gap-1
   flex items-center justify-center
  border border-white/30
  shadow-lg
  md:p-3

">
<div className='Gt2   lg:py-1 lg:px-4 md:py-3 md:px-9 flex items-center justify-center h-full  rounded-full bg-white'>
    <h2 className='lg:text-[1.1vw] md:text-3xl text-3xl'>Book the flight</h2>
</div>
<div     
className='lg:py-2 lg:px-2 md:px-4 md:py-4 bg-white rounded-full'>
<IoPaperPlane className='lg:text-[2vw] md:text-4xl' />
</div>
</div>  

{
  Openpopup && (
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 50, opacity: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}


className="w-full   py-13 overflow-hidden   flex items-center justify-evenly  absolute bottom-0 left-0 bg-white rounded-3xl">
  <motion.div   initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 50, opacity: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
 className="absolute flex items -center justify-end text-black top-1  right-2  ">
  <IoIosClose className="text-4xl"  onClick={Close} />

  </motion.div>
  <div className="Gt3  h-full flex items-center justify-start">
    <h2 className="text-black text-3xl">Contact</h2>
  </div>
  <div className="h-full  flex items-center justify-center ">
    <div className=" flex items-center justify-center gap-10 w-full ">
    <TextField
          id="filled-multiline-flexible"
          label="Name"
          multiline
          className="Gt3"
          maxRows={3}
        />

<TextField
          id="filled-multiline-flexible"
          label="Email"
          multiline
          maxRows={3}
        />
        <TextField
          id="filled-multiline-flexible"
          label="Password"
          multiline
          maxRows={3}
        />

<TextField
          id="filled-multiline-flexible"
          label="Arivving"
          multiline
          maxRows={3}
        />  
    </div>
  </div>
  <div className="h-full w-fit px-5 flex items-center justify-center ">
  <div className='py-2 px-2 bg-black text-white rounded-full'>
<IoPaperPlane className='text-1xl' />
</div>
  </div>

</motion.div>
  )
}


      </div>
 

    </div>
  )
}

export default Ourfligths
