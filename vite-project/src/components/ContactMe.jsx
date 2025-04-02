import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import phoneImage from "../assets/phone.png";

const ContactMe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_qc920f8", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setIsSubmitted(true);
          navigate("/"); // Redirect to the landing page
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background-dark">
      {/* Main container */}
      <div className="bg-themeCard bg-slate-700 rounded-lg shadow-lg flex flex-col md:flex-row w-11/12 md:w-3/4 lg:w-2/3">
        {/* Left section */}
        <div className="bg-themeAccent rounded-t-lg md:rounded-t-none md:rounded-l-lg w-full md:w-1/2 flex items-center justify-center p-8">
          <img src={phoneImage} alt="Phone" className="max-w-full h-auto" />
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-themePrimary mb-4">
              GET IN TOUCH
            </h2>
            {/* X Icon */}
            <button
              onClick={() => navigate("/")}
              className="text-white text-2xl font-bold hover:text-teal-400 transition"
              aria-label="Close"
            >
              X
            </button>
          </div>
          <p className="text-themeSecondary mb-6">Contact Me here!</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-themeSecondary mb-2"
              >
                Name and Surname
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-themeAccent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-themeSecondary mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-themeAccent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-themeSecondary mb-2"
              >
                Please enter the details of your request
              </label>
              <textarea
                id="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Enter your request"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-themeAccent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-secondary text-text-light px-6 py-2 rounded-lg shadow-md transition duration-300 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
