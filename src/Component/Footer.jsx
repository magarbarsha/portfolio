import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa"; // Icons for social media and back to top

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-400 text-gray-900 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright Information */}
        <div className="text-center text-gray-700 mb-6">
          &copy; {new Date().getFullYear()} Barsha Magar. All rights reserved.
        </div>

        {/* Back to Top Button */}
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center mx-auto bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <FaArrowUp size={18} className="mr-2" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;