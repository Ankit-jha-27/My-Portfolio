import React, { useEffect, useState } from "react";

const Stars = () => {
  const [stars, setStars] = useState([]);

    useEffect(()=>{
        generateStars();

        // Handle window resize
        const handleResize = () => {
            generateStars();
          };
          window.addEventListener("resize", handleResize);

           // Cleanup listener on unmount
            return () => window.removeEventListener("resize", handleResize);
    },[])

    const generateStars = () => {
      const noOfStars = Math.floor(
        (window.innerHeight * window.innerWidth) / 2000
      );
      const starArray = [];

      for (let i = 0; i < noOfStars; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 3 + 1;
        const opacity = Math.random()*0.7 + 0.3;
        starArray.push({ x, y, size, opacity });
      }
      
      setStars(starArray);
    }

  

  return (
    <div className="fixed inset-0 w-full overflow-hidden pointer-events-none dark:block hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full twinkle"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
 
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;
