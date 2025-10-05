import React from 'react';
import pb from "../assets/pb.jpg";
import cl from "../assets/cl.jpg";
import aim from "../assets/aim.jpg";

const Education = () => {
  const items = [
    {
      title: "ICSE",
      desc: "Scored 91%",
      img: pb,
      link: "https://pbacademic.com/",
    },
    {
      title: "ISC",
      desc: "Scored 90%",
      img: pb,
      link: "https://pbacademic.com/",
    },
    {
      title: "College",
      desc: "Pursuing BTECH IT",
      img: cl,
      link: "https://www.heritageit.edu/",
    },
    {
      title: "Aim",
      desc: "Web Developer",
      img: aim,
    },
  ];

  return (
    <section id="education" className="py-24 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-16 glow">
        Education & Achievements
      </h2>

      {/* Timeline Container */}
      <div className="relative flex justify-center items-start">
        {/* Horizontal Line */}
        <div className="absolute top-24 w-[85%] h-[2px] bg-gray-500"></div>

        
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-6 relative"
          >
            
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded-full border-2 border-white mb-4 transition-transform hover:scale-110 z-10 bg-gray-800"
                />
              </a>
            ) : (
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 object-cover rounded-full border-2 border-white mb-4 z-10 bg-gray-800"
              />
            )}

            
            <div className="w-[2px] h-24 bg-gray-400"></div>

            
            <div className="mt-4 text-white font-semibold">{item.title}</div>
            <div className="text-gray-400 text-lg">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
