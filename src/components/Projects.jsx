import React from 'react';
import noteSaver from "../assets/noteSaver.jpg.png";
import stone from "../assets/stone.jpg.png";
import passGen from "../assets/passGen.jpg.png";
import tictak from "../assets/tictak.jpg.png";
import { Code } from 'lucide-react';

const projs = [
  {
    id: 1,
    title: "Pastes",
    description: "Pastes lets you quickly create, view, and manage notes on any device.",
    image: noteSaver,
    tags: ["React", "TailwindCSS"],
    git: "https://github.com/Ankit-jha-27/NoteSaver_Jotify.git"
  },
  {
    id: 2,
    title: "PassBuddy",
    description: "PassBuddy is your friendly online tool to generate strong, secure passwords in seconds.",
    image: passGen,
    tags: ["React", "TailwindCSS"],
    git: "https://github.com/Ankit-jha-27/Password-Generator.git"
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    description: "Play classic Tic Tac Toe online.",
    image: tictak,
    tags: ["HTML", "CSS", "JS"],
    git: "https://github.com/Ankit-jha-27/Tic-Tac-Toe.git"
  },
  {
    id: 4,
    title: "Stone-Paper-Scissors",
    description: "Play Stone, Paper, Scissors online.",
    image: stone,
    tags: ["HTML", "CSS", "JS"],
    git: "https://github.com/Ankit-jha-27/Stone-Paper-Scissors-Game.git"
  },
];

const Projects = () => {
  return (
    <section id='projects' className='relative py-24 px-4'>
      <div className='container mx-auto max-w-5xl text-center'>
        <h2 className='glow text-2xl md:text-3xl font-bold mb-4'>Featured Projects</h2>

        <p className="text-gray-700 dark:text-gray-300 font-medium mb-8">
          Here are some of my recent projects crafted carefully with attention to detail and user experience.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          {projs.map((p) => (
            <div
              key={p.id}
              className="w-64 sm:w-72 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center gap-3 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={p.image}
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="font-semibold text-center">{p.title}</h4>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
              <div className="flex gap-2 flex-wrap justify-center mt-2">
                {p.tags.map(tag => (
                  <button  className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    {tag}
                  </button>
                ))}
              </div>
              <a
                href={p.git}
                className="mt-3 text-sm text-blue-500 hover:underline flex items-center gap-1 justify-center"
              >
                <button className='glow rounded'>GitHub</button>
                <Code className='glow size-4'/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
