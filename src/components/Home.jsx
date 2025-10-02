import React from 'react'
import ThemeToggle from './ThemeToggle'
import Navbar from './Navbar'
import Stars from './Stars'


const Home = () => {
  return (
    <div className='min-h-screen'>
      
      <ThemeToggle />
      <Stars />
      <Navbar />
      
    </div>
  )
}

export default Home