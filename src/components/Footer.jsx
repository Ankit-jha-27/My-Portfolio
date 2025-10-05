import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-500 dark:bg-[#0a0a0a] dark:border-gray-800 shadow-inner">
      <div className="flex flex-col items-center space-y-3">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/ankit-jha-27"
            className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-transform transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/ankit-jha-27"
            className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/"
            className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-transform transform hover:scale-110"
          >
            <FaTwitter size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base glow">
          © {new Date().getFullYear()} <span className="font-semibold">Ankit Jha</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
