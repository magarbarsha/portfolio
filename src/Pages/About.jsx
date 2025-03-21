import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMusic, FiCode, FiUser, FiGlobe, FiCamera } from "react-icons/fi";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16 px-6">
      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: Profile Image with Additional Details */}
        <div className="relative flex flex-col justify-center items-center h-full space-y-8">
          {/* Tagline or Quote Above the Image */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           
          </motion.div>

          {/* Profile Image */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden shadow-2xl border-4 border-blue-500 transform hover:scale-105 transition-transform duration-300">
            <img
              src="./src/assets/barsha.jpg" // Replace with your image path
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fun Fact or Additional Information Below the Image */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           
          </motion.div>
        </div>

        {/* Right Side: About Me */}
        <div className="text-left space-y-6 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-extrabold text-gray-900">About Me</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            I am a passionate developer focused on creating modern, responsive, and impactful web applications.
            With a strong foundation in web technologies, I strive to bring ideas to life through clean and efficient code.
          </p>
          
          {/* Contact Info */}
          <div className="mt-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-400 p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Contact Me</h3>
            <div className="space-y-3 text-gray-800">
              <div className="flex items-center space-x-3 text-base">
                <FiUser className="text-blue-600" size={20} />
                <p className="font-medium">Barsha Magar</p>
              </div>
              <div className="flex items-center space-x-3 text-base">
                <FiPhone className="text-blue-600" size={20} />
                <p className="font-medium">9703080249</p>
              </div>
              <div className="flex items-center space-x-3 text-base">
                <FiMail className="text-blue-600" size={20} />
                <p className="font-medium">magarbarsha333@gmail.com</p>
              </div>
            </div>
          </div>

          {/* My Interests */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">My Interests</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FiMusic size={24} />, label: "Music" },
                { icon: <FiCode size={24} />, label: "Coding" },
                { icon: <FiGlobe size={24} />, label: "Traveling" },
                { icon: <FiCamera size={24} />, label: "Photography" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white p-4 shadow-md transition-all transform hover:scale-105 hover:shadow-lg w-28"
                >
                  <div className="text-blue-600">{item.icon}</div>
                  <p className="font-medium text-sm mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;