import React from 'react'
import ThemeToggle from './ThemeToggle'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Stars from './Stars'
import About from './About'


const Home = () => {
  return (
    <div className='min-h-screen'>
      
      <ThemeToggle />
      <Stars />
      <Navbar />

      <main>
        <HeroSection />
        <About />  
      </main>
      
    </div>
  )
}

export default Home