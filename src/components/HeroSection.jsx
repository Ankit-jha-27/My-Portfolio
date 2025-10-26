import React, { useState, useEffect } from 'react';
import '../index.css';
import { ArrowDown, Download, Wrench } from 'lucide-react';

const HeroSection = () => {
    const [isScrolled,setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 100);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <div
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto space-y-6 text-center z-10">
        
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="fade-in fade-in-delay-1 inline-block mr-2">Hi, I'm</span>
          <span className="fade-in fade-in-delay-2 inline-block glow mr-2">Ankit</span>
          <span className="fade-in fade-in-delay-3 inline-block">Jha</span>
        </h1>

        
        <p className="text-lg md:text-xl leading-relaxed fade-in fade-in-delay-3">
          I specialize in building responsive, high-quality applications using Java, JavaScript, and React. 
          I am passionate about leveraging technology to create innovative and efficient solutions.
        </p>
        <a
            href="#projects"
            className="fade-in fade-in-delay-3 rounded-full font-bold px-4 py-2 bg-blue-500 text-white hover:scale-105 hover:shadow-[0_0_12px_#3b82f6] transition-colors duration-200 inline-flex items-center gap-2"
        >
            See My Work
            <Wrench size={20} />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 fade-in fade-in-delay-3">
            {!isScrolled ? (
                <>
                <span className="text-sm">scroll</span>
                <ArrowDown className="h-5 w-5 animate-bounce" />
                </>
            ) : null}
    </div>
    </div>
  );
};

export default HeroSection;
