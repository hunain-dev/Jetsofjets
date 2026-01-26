import { IoPaperPlane } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";


const Ourfligths = () => {
  
const [name, setname] = useState("")
const [Email, setEmail] = useState("")
const [password, setpassword] = useState("")
const [Arrvining, setArrvining] = useState("")

const formhandler = (e) =>{
  e.preventDefault();
  // console.log(`your name ${name}, your email ${Email} your password ${password} Arrvining ${Arrvining} `)

  setname("")
  setEmail("")
  setpassword("")
  setArrvining("")
  if (Email && password && name && Arrvining) {
    alert("your data hass been submited")
    
  }else{
    alert("your logic not submitted")
  }

}


  const [Openpopup, setOpenpopup] = useState(false)

  const buttonHandler = () => {
    setOpenpopup(true); 
  };


    const Close = () => {
    setOpenpopup(false);
  };
  return (
<div className='    h-4/6   md:h-1/3 lg:h-2/5 xl:h-1/2
 pointer-events-none overflow-hidden lg:p-5 md:p-10 cursor-pointer lg:px-15 flex items-end justify-center w-full fixed bottom-0 z-50'>
<div className="back h-full cursor-pointer pointer-events-auto  overflow-hidden w-full flex items-end justify-center relative">
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
  lg:p-2
  

">
<div className='Gt2   lg:py-2 py-1 px-4 lg:px-4 md:py-3 md:px-9 flex items-center justify-center h-full  rounded-full bg-white'>
    <h2 className='lg:text-[1.1vw] md:text-3xl text-1xl'>Book the flight</h2>
</div>
<div     
className='lg:py-2 lg:px-2 md:px-4 md:py-4 p-2 bg-white rounded-full'>
<IoPaperPlane className='lg:text-[1.2vw] text-1xl md:text-4xl' />
</div>
</div>  

{
  Openpopup && (
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 50, opacity: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}


className="lg:w-fit w-full   lg:py-13  lg:px-6    flex items-center justify-evenly lg:flex-row md:flex-col flex-col xl:flex-row   absolute bottom-0 left-0 bg-white lg:rounded-3xl">
  <motion.div   initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 50, opacity: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
 className="absolute flex items -center justify-end text-black top-1  right-2  ">
  <IoIosClose className="text-4xl"  onClick={Close} />

  </motion.div>
  <div className="Gt3 lg:p-0 lg:px-0 px-0 p-5  h-full flex items-center justify-start">
    <h2 className="text-black text-3xl">Contact</h2>
  </div>
  <div className="h-full w-full  lg:px-13 px-5 flex items-center justify-center gap-10   ">
    <form action="" onSubmit={formhandler} className="flex items-end justify-end h-full w-full">
    <div className="  flex items-center justify-center lg:flex-row  gap-6 flex-col lg:gap-5   w-full ">
   
   <TextField
         id="filled-multiline-flexible"
         label="Name"
         multiline
         className="Gt3"
         maxRows={3}
         value={name}
         required
         onChange={(e)=>{
          setname(e.target.value)

         }}
       />

<TextField
         id="filled-multiline-flexible"
         label="Email"
         multiline
         maxRows={3}
         value={Email}
         required
         onChange={(e)=>{
          setEmail(e.target.value)

         }}
       />
       <TextField
         id="filled-multiline-flexible"
         label="Password"
         multiline
         maxRows={3}
         value={password}
         required
         placeholder="City,country"
         onChange={(e)=>{
          setpassword(e.target.value)

         }}
       />

<TextField
         id="filled-multiline-flexible"
         label="Arivving"
         multiline
         maxRows={3}
         value={Arrvining}
         required
         onChange={(e)=>{
          setArrvining(e.target.value)

         }}
       
       />

         <div className="h-full lg:w-fit w-full px-5 flex items-center justify-center ">
  <button className='lg:py-2  lg:px-2 py-3  px-14  bg-black text-white rounded-full'>
<IoPaperPlane className='lg:text-1xl text-2xl' />
</button>
  </div>  
   </div>

    </form>
  
  </div>


</motion.div>
  )
}


      </div>
 

    </div>
  )
}

export default Ourfligths
