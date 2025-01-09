import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBullseye, faLightbulb, faTimes } from "@fortawesome/free-solid-svg-icons";  // Import the X icon
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation

const AboutMe = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClose = () => {
    navigate("/");  // Navigate to the landing page
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-40"
      style={{ backgroundColor: "#34495E" }} // Outer background color
    >
      <div
        className="bg-primary text-white rounded-lg shadow-lg p-10 max-w-4xl w-full relative"  // Added relative positioning here
        style={{
          backgroundColor: "#1E293B", // Inner container background color (primary)
        }}
      >
        {/* Close Button in Top-Right */}
        <button
          onClick={handleClose}
          className= "absolute top-4 right-4 text-white hover:text-teal-400 text-2xl"
        >
          <FontAwesomeIcon icon={faTimes} /> {/* X icon */}
        </button>

        <h1 className="text-4xl font-bold mb-10 text-center uppercase tracking-wider">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section: Contact Info */}
          <div className="flex-1 space-y-4">
            <p className="text-lg">
              <strong>Full Name:</strong> Joy Munee Maveke
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> +254 740 111 071
            </p>
            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:mavekejoy@gmail.com"
                className="text-teal-400 hover:underline"
              >
                mavekejoy@gmail.com
              </a>
            </p>
            <p className="text-lg">
              <strong>Address:</strong> Nairobi - Kasarani
            </p>
            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-700"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/MavekeJoy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-700"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
            {/* Resume Link */}
            <div className="mt-4">
              <a
                href="https://drive.google.com/file/d/15RDHtf6V4ALyFCjOGd2aGucaQC8t5g6X/view?usp=drive_link"  // Replace with your actual resume file path
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-700 text-lg"
              >
                View My Resume
              </a>
            </div>
          </div>
          {/* Right Section: Introduction */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold">Hello There!</h2>
            <p className="text-base leading-7">
              I am a results-driven software engineer with expertise in both
              frontend and backend development, specializing in HTML, CSS,
              React, Python, and Flask. I also bring strong proficiency in video
              editing, combining technical skills with creativity to deliver
              impactful solutions.
            </p>
            <h2 className="text-2xl font-bold">My Journey</h2>
            <p className="text-base leading-7">
              Technology has always fascinated me, sparking a deep curiosity
              from an early age. This passion led me to pursue a Diploma in
              Business Information Technology (DBIT) at university, where I
              built a strong foundation in tech. Eager to expand my skills, I
              joined Moringa School's intensive software engineering bootcamp,
              which transformed my interest into expertise. Along the way, I've
              grown into a versatile software engineer, driven by the desire to
              create impactful solutions and continuously innovate.
            </p>
          </div>
        </div>
        {/* Goals and Visions Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Goals Card */}
          <div className="bg-secondary shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:bg-teal-400">
            <FontAwesomeIcon
              icon={faBullseye}
              size="3x"
              className="text-teal-600 mb-4 "
            />
            <h3 className="text-xl font-bold mb-2">Goals</h3>
            <p className="text-base leading-7">
              My primary goal is to leverage technology to solve real-world
              problems, foster innovation, and contribute to impactful projects
              that make a difference.
            </p>
          </div>
          {/* Visions Card */}
          <div className="bg-secondary shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:bg-teal-400">
            <FontAwesomeIcon
              icon={faLightbulb}
              size="3x"
              className="text-teal-600 mb-4 "
            />
            <h3 className="text-xl font-bold mb-2">Visions</h3>
            <p className="text-base leading-7">
              My vision is to continuously grow as a software engineer, embrace
              lifelong learning, and inspire others through creativity and
              innovation in technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
