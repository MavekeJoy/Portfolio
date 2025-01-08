import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/landing.jpeg";
import logo from "../assets/logo.png";

const LandPage = () => {
  return (
    <div className="bg-background-dark text-text-light min-h-screen">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center p-6 shadow-md bg-background-dark/90 backdrop-blur-lg fixed top-0 z-10">
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <div className="flex space-x-8">
            {["Home", "Service", "Projects", "Blog"].map((item) => (
              <motion.a
                href="/"
                key={item}
                whileHover={{ scale: 1.1, color: "#14B8A6" }}
                className="text-text-light hover:text-accent transition duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Get in Touch Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#14B8A6" }}
          className="bg-accent hover:bg-secondary text-text-light px-6 py-2 rounded-lg shadow-md transition duration-300"
        >
          Get in Touch
        </motion.button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row min-h-screen items-center justify-center mt-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-text-light w-full md:w-1/2 h-full flex flex-col items-center justify-center p-10 space-y-6"
        >
          {/* Logo Background */}
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] p-6 rounded-full shadow-lg mix-blend-overlay">
            <motion.img
              src={logo}
              alt="Logo"
              className="h-48 w-48 md:h-64 md:w-64 object-contain mix-blend-lighten"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>

          <p className="text-lg md:text-xl text-center mt-4">
            Hello , Nice to meet you! Welcome to my personal portfolio.<br />
            Software Developer || Web Developer || UI/UX Designer || Video Editor
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#14B8A6" }}
            className= "bg-accent hover:bg-secondary text-text-light px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            About Me
          </motion.button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${profileImage})`,
          }}
        />
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-background-dark/90">
        <p className="text-gray-400">
          © 2025 Joy Maveke. Built with React, TailwindCSS, and Framer Motion.
        </p>
      </footer>
    </div>
  );
};

export default LandPage;
