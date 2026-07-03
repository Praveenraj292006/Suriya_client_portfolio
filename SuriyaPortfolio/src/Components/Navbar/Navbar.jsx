import React from 'react'
import CVbutton from '../CVbutton/CVbutton'

function Navbar() {
  return (
    <div className= 'w-full h-[10vh] flex items-center'>
        <div className=' w-[20vw] h-full mx-[1vw] flex justify-center items-center '>
            <h1 className='hidden md:block lg:text-[1.8rem] font-bold font-[Glonto]'>Suriya R</h1>
        </div>
        <div className=' w-full lg:p-8 h-full flex  lg:pl-[25vw] gap-2 lg:gap-5 items-center'>
            <h2 className='text-s lg:text-2xl font-[Glonto]'>Skills</h2>
            <h2 className='text-s lg:text-2xl font-[Glonto]'>About</h2>
            <h2 className='text-s lg:text-2xl font-[Glonto]'>Projects</h2>
            <h2 className='text-s lg:text-2xl font-[Glonto]'>Experience</h2>
        </div>
        <div className="hidden  cv md:flex items-center ">
          <CVbutton/>

        </div>
    </div>
  )
}

export default Navbar