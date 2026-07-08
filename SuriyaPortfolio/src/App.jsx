import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Sections/Hero/Hero.jsx'
import About from './Sections/About/About.jsx'
import Skills from './Sections/Skills/Skills.jsx'
import Experience from './Components/Experience/Experience.jsx'
import HealthCampPortfolio from './Sections/Healthcamp portfolio/HealthCampPortfolio.jsx'
import Contact from './Sections/Contact/Contact.jsx'
import Footer from './Sections/Footer/Footer.jsx'


const App = () => {
  return (< >
  <div className='selection:bg-black selection:text-white bg-gray-200'>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <HealthCampPortfolio/>
    <Contact/>
    <Footer></Footer>
  
    
  </div>
    
  </>
  )
}

export default App;
