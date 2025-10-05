import React from 'react'
import ThemeToggle from './ThemeToggle'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Stars from './Stars'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'



const Home = () => {
  return (
    <div className='min-h-screen'>
      
      <ThemeToggle />
      <Stars />
      <Navbar />

      <main>
        <HeroSection />
        <About /> 
        <Skills /> 
        <Contact />
      </main>
      
    </div>
  )
}

export default Home