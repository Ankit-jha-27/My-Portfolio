import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setDark] = useState(true); // always start in dark mode
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent flicker

  return (
    <div>
      <button
        onClick={() => {
          setDark(!isDark);
          if (!isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
          }
        }}
        className="fixed top-7 right-4 p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-300 shadow-md z-50"
      >
        {isDark ? <Sun className='text-yellow-300' /> : <Moon className='text-blue-900' />}
      </button>
    </div>
  );
};

export default ThemeToggle;
