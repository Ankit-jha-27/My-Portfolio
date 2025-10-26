import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // runs only on client side
    const storedTheme = localStorage.getItem("theme");
    setDark(storedTheme === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // wait for client mount
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  if (!mounted) return null; // prevent flicker

  return (
    <div>
      <button
        onClick={() => setDark(!isDark)}
        className="fixed top-7 right-4 p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-300 shadow-md z-50"
      >
        {isDark ? <Sun className='text-yellow-300'/> : <Moon className='text-blue-900'/>}
      </button>
    </div>
  );
};

export default ThemeToggle;
