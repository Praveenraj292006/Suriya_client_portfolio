import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Sections/Hero/Hero.jsx'
import About from './Sections/About/About.jsx'
import Skills from './Sections/Skills/Skills.jsx'


const App = () => {
  return (< >
  <div className='selection:bg-black selection:text-white bg-gray-50'>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
  
    
  </div>
    
  </>
  )
}

export default App;
