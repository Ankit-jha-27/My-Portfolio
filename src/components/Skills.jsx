import React, { useState } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiPython,
  SiSqlite,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaDatabase, FaJava} from 'react-icons/fa';

const Skills = () => {
  const [filter, setFilter] = useState('All');

  const skills = [
    { name: "HTML/CSS", logo: <SiHtml5 className="w-12 h-12 text-orange-500" />, category: "frontend" },
    { name: "JavaScript", logo: <SiJavascript className="w-12 h-12 text-yellow-400" />, category: "frontend" },
    { name: "React", logo: <SiReact className="w-12 h-12 text-blue-400" />, category: "frontend" },
    { name: "Tailwind CSS", logo: <SiTailwindcss className="w-12 h-12 text-teal-400" />, category: "frontend" },
    { name: "Next.js", logo: <SiNextdotjs className="w-12 h-12 text-gray-500" />, category: "frontend" },
    
    { name: "Node.js", logo: <SiNodedotjs className="w-12 h-12 text-green-500" />, category: "backend" },
    { name: "Express", logo: <SiExpress className="w-12 h-12 text-gray-700" />, category: "backend" },
    { name: "MongoDB", logo: <SiMongodb className="w-12 h-12 text-green-600" />, category: "backend" },
    { name: "MySQL", logo: <SiMysql className="w-12 h-12 text-blue-600" />, category: "backend" },
  
    { name: "Python", logo: <SiPython className="w-12 h-12 text-blue-500" />, category: "data analytics" },
    { name: "Java", logo: <FaJava className="w-12 h-12 text-red-500" />, category: "all" },

    { name: "NumPy", logo: <FaDatabase className="w-12 h-12 text-purple-500" />, category: "data analytics" },
    { name: "Pandas", logo: <FaDatabase className="w-12 h-12 text-indigo-500" />, category: "data analytics" },
    { name: "Scikit-learn", logo: <FaDatabase className="w-12 h-12 text-green-400" />, category: "data analytics" },
    { name: "SQL", logo: <FaDatabase className="w-12 h-12 text-blue-700" />, category: "backend" },
    { name: "SQLite3", logo: <SiSqlite className="w-12 h-12 text-blue-400" />, category: "backend" },
  
    { name: "Git/GitHub", logo: <SiGithub className="w-12 h-12 text-black" />, category: "tools" },
    { name: "VS Code", logo: <VscCode className="w-12 h-12 text-blue-500" />, category: "tools" },
  ];

  const categories = ['All', 'Frontend', 'Backend','Data Analytics', 'Tools'];
 
  const filteredSkills = filter === 'All' ? skills : skills.filter(skill => skill.category === filter.toLowerCase());

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="glow">My Skills</span>
        </h2>

        
        <div className="flex justify-center gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200
                ${filter === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="w-32 p-4 bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center gap-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              {skill.logo}
              <h4 className="font-semibold text-center mt-2">{skill.name}</h4>
            </div>
           
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
