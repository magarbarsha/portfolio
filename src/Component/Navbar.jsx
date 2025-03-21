import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "react-feather"; // Icons for dark/light mode

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark"); // Toggle dark mode class
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
  };

  // Animation for hover effects on links
  const linkHoverVariants = {
    hover: { scale: 1.1, color: "#FF6B6B" }, // Coral color on hover
    tap: { scale: 0.9 },
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-80 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-lg`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo or Name */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-600 transition-all"
        >
          My Portfolio
        </Link>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {isDarkMode ? (
            <Sun className="text-yellow-400" size={24} />
          ) : (
            <Moon className="text-gray-900" size={24} />
          )}
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
            <motion.div
              key={link}
              whileHover="hover"
              whileTap="tap"
              variants={linkHoverVariants}
            >
              <Link
                to={`/${link.toLowerCase()}`}
                className="text-lg font-medium hover:text-purple-600 dark:hover:text-pink-600 transition-colors"
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Menu with Animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className={`lg:hidden ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } p-4 shadow-lg`}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2 transition-colors"
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;