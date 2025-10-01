import React, { useState,useEffect } from 'react'
import { Sun,Moon } from 'lucide-react'
const ThemeToggle = () => {

const [isDark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div>
        <button 
            onClick={() => setDark(!isDark)}
            className="fixed top-2 right-2 p-2 rounded-full bg-slate-900 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 shadow-md z-50"
            >
            {isDark ? <Sun className='text-yellow-300'/> : <Moon className='text-blue-900'/>}
        </button>
    </div>
  )
}

export default ThemeToggle