import React from 'react'

const Header = () => {
  return (
    <div className='pt-6  lg:opacity-100 md:opacity-0 opacity-0 cursor-pointer z-999  w-full text-white grid grid-cols-2 fixed'>
        <div className='Gt flex  items-center justify-start px-24 gap-9 h-full w-full'>
            <a href='#Aboutus'>About</a>
            <a href='#Ourfloot'>Our floot</a>
            <a href='#Advantages'>Advantages</a>
            <a href='#Global'>Global</a>
        </div>
 <div className='Gt flex  items-center justify-end px-24 gap-9 h-full w-full '>
            <h2>+971 54 432 5050</h2>
<h2>info@jeskojets.com</h2>

        </div>      
    </div>
  )
}

export default Header
