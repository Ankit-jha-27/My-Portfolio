import React from 'react'
import ThemeToggle from './ThemeToggle'
import Navbar from './Navbar'


const Home = () => {
  return (
    <div className='min-h-screen'>
      
      <ThemeToggle />
      <Navbar />
    </div>
  )
}

export default Home