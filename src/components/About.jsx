import React from 'react';
import { Download,Hexagon,Monitor,Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold glow">About Me</h2>
      </div>

      <div className="container mt-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left section */}
        <div className="w-full md:w-1/2 p-6 rounded-2xl shadow-lg text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">
            Passionate Web Developer & Tech Problem Solver
          </h3>

          <p className="mb-3 text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            I thrive on learning new technologies and challenging myself with
            innovative projects. Whether it’s developing web applications or
            exploring backend systems, I enjoy turning ideas into functional,
            high-quality software.
          </p>

          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            Beyond coding, I am curious and driven, always looking for
            opportunities to grow both personally and professionally. I take
            pride in my problem-solving skills and my ability to work
            effectively in a team.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <button
              id="#contact"
              className="rounded-full font-bold px-5 py-2 bg-blue-500 text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_0_12px_#3b82f6]"
            >
              Reach Out
            </button>

            <button className="rounded-full font-bold px-5 py-2 inline-flex items-center gap-2 border border-blue-500 text-blue-600 hover:scale-105 hover:shadow-[0_0_12px_#3b82f6] transition-all duration-200">
              Resume
              <Download size={20} />
            </button>
          </div>
        </div>

        {/* Right section */}
<div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
  <div className="w-full  p-6 bg-gradient-to-r from-gray-800 via-purple-900 to-indigo-900 flex gap-4  hover:scale-105 hover:shadow-2xl">
    <div className="rounded-full p-3">
      <Monitor className="text-black" />
    </div>
    <div className="text-left font-semibold">
      <h4>Frontend Developer</h4>
      <p>Building responsive, user-friendly interfaces with modern frameworks.</p>
    </div>
  </div>

  <div className="w-full  p-6 bg-gradient-to-r from-gray-800 via-purple-900 to-indigo-900 flex gap-4  hover:scale-105 hover:shadow-2xl">
    <div className="rounded-full p-3">
      <Server className="text-black" />
    </div>
    <div className="text-left font-semibold">
      <h4>Backend Developer</h4>
      <p>Developing robust server-side logic, APIs, and database management for applications.</p>
    </div>
  </div>

  <div className="w-full  p-6 bg-gradient-to-r from-gray-800 via-purple-900 to-indigo-900 flex gap-4  hover:scale-105 hover:shadow-2xl">
    <div className="rounded-full p-3">
      <Hexagon className="text-black" />
    </div>
    <div className="text-left font-semibold">
      <h4>Blockchain Enthusiast</h4>
      <p>Designing decentralized, secure systems and smart contracts for modern applications.</p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
