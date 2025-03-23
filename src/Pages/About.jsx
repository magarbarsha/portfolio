import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiUser, FiMapPin } from "react-icons/fi";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import barsha from '../assets/barsha.jpg'


const About = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-16 px-6">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch bg-white p-8 rounded-xl shadow-2xl">
          {/* Left Side: Profile Image with Border and Hover Effect */}
          <div className="relative flex flex-col justify-center items-center h-full space-y-6">
            <div className="relative w-56 h-56 md:w-64 md:h-64 overflow-hidden shadow-lg border-4 border-blue-600 rounded-full transform hover:scale-105 transition-transform duration-300">
              <img
                src={barsha}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Barsha Magar</h2>
            <p className="text-blue-700 font-medium">Software Developer</p>
          </div>

          {/* Right Side: About Me */}
          <div className="text-left space-y-6 flex flex-col justify-center h-full">
            <h2 className="text-4xl font-extrabold text-gray-900">About Me</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              I am a passionate developer focused on creating modern, responsive, and impactful web applications.
              With a strong foundation in web technologies, I strive to bring ideas to life through clean and efficient code.
            </p>
            
            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "React", "Node.js", "PHP", "SQL"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-lg shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 bg-white p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Contact Information</h3>
              <div className="space-y-3 text-gray-800">
                <div className="flex items-center space-x-3 text-base">
                  <FiMail className="text-blue-600" size={20} />
                  <p className="font-medium">magarbarsha333@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3 text-base">
                  <FiPhone className="text-blue-600" size={20} />
                  <p className="font-medium">+977 9703080249</p>
                </div>
                <div className="flex items-center space-x-3 text-base">
                  <FiMapPin className="text-blue-600" size={20} />
                  <p className="font-medium">Madhumalla, Morang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default About;
