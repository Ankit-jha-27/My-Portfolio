import React, { useEffect, useState } from 'react';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-24 flex items-center justify-between transition-all duration-300 px-20 z-30
        ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : ""}`}
    >

      {/* Logo */}
<div>
  <a href="/" className="text-xl flex gap-2 px-4">
    
    <span className="font-semibold text-2xl text-blue-400 glow">
      Ankit
    </span>

    
    <span className="font-semibold text-2xl text-gray-800 glow">
      Portfolio
    </span>
  </a>
</div>

      {/* Desktop */}
      <div className="hidden md:flex gap-6 px-20">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-blue-400 text-xl transition-colors duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <button
        className="md:hidden text-emerald-900 dark:text-emerald-500"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 right-6 bg-slate-700 rounded-lg shadow-lg flex flex-col gap-4 p-6 md:hidden z-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-blue-400 transition-colors duration-200 z-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

    </div>
  );
};

export default Navbar;
