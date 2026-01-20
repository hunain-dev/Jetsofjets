import React from 'react'
import { IoPaperPlane } from "react-icons/io5";

const Ourfligths = () => {
  return (
    <div className='py-9   flex items-start justify-center w-full  fixed bottom-0 z-9999'>
<div className="
overflow-hidden
p-1

  rounded-full
  bg-white/20
  backdrop-blur-md
   gap-1
   flex items-center justify-center
  border border-white/30
  shadow-lg
">
<div className='Gt2   py-1 px-4 flex items-center justify-center h-full  rounded-full bg-white'>
    <h2 className='text-[1.1vw]'>Book the flight</h2>
</div>
<div className='py-2 px-2 bg-white rounded-full'>
<IoPaperPlane className='text-1xl' />
</div>
</div>      
    </div>
  )
}

export default Ourfligths
