import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaHtml5, FaCss3Alt, FaPython, FaServer, FaGithub, FaTimes } from "react-icons/fa";

const services = [
  { icon: <FaCode size={30} />, title: "Full-Stack Development", description: "Building modern web applications using JavaScript, React, and Python (Flask)." },
  { icon: <FaReact size={30} />, title: "React Development", description: "Creating interactive and dynamic user interfaces with React and Tailwind CSS." },
  { icon: <FaHtml5 size={30} />, title: "HTML & CSS Design", description: "Crafting responsive and visually appealing web pages using HTML, CSS, and Tailwind." },
  { icon: <FaPython size={30} />, title: "Backend Development", description: "Developing RESTful APIs and backend systems with Flask and FastAPI." },
  { icon: <FaServer size={30} />, title: "Database & API Integration", description: "Handling databases, API connections, and server-side logic efficiently." },
  { icon: <FaGithub size={30} />, title: "Version Control (GitHub)", description: "Managing projects with GitHub, ensuring smooth collaboration and deployment." },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleExitClick = () => {
    window.location.href = "/"; // Redirect to the landing page (use the correct path if needed)
  };

  return (
    <div className="bg-background-dark text-text-light min-h-screen px-6 md:px-20 flex flex-col justify-center relative">
      {/* Exit Icon */}
      <button 
        onClick={handleExitClick} 
        className="absolute top-6 right-6 text-2xl text-white"
      >
        <FaTimes />
      </button>

      {/* Separator */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-accent rounded-full"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Can I Do</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-full h-48 md:h-52"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="absolute w-full h-full rounded-lg shadow-lg bg-[#1C1C1C] flex flex-col items-center justify-center text-center p-6"
              animate={{ rotateY: hoveredIndex === index ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="text-secondary">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
            </motion.div>

            <motion.div
              className="absolute w-full h-full rounded-lg shadow-lg bg-[#292929] flex flex-col items-center justify-center text-center p-6"
              animate={{ rotateY: hoveredIndex === index ? 0 : -180 }}
              transition={{ duration: 0.6 }}
              style={{ backfaceVisibility: "hidden" }}
            >
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
