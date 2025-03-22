import React from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import Navbar from "../Component/Navbar";
import { FiGithub, FiLinkedin, FiFacebook, FiBriefcase, FiCheckCircle, FiSmile } from "react-icons/fi"; // Added FiSmile for new stat
import About from "./About";
import Footer from "../Component/Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skill";


const Home = () => {

  const [scope, animate] = useAnimate();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#2563EB" },
    tap: { scale: 0.95 },
  };

  React.useEffect(() => {
    animate(
      ".text-element",
      { opacity: 1, y: 0 },
      { delay: stagger(0.2), duration: 0.8 }
    );
  }, [animate]);

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-400 text-gray-800 pt-20"
        ref={scope}
      >
        <div className="container mt-10 mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <motion.h1
              className="text-2xl lg:text-6xl font-bold mb-4 text-element"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Hi, I'm <span className="text-blue-600">Barsha Magar</span>
            </motion.h1>
            <motion.h2
              className="text-2xl lg:text-3xl font-semibold mb-6 text-element"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Full-Stack Developer | React Enthusiast
            </motion.h2>
            <motion.p
              className="text-lg lg:text-xl mb-8 text-gray-700 text-element"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              I build scalable, user-friendly web applications that solve real-world problems. Let's create something amazing together!
            </motion.p>

            {/* Buttons: Download CV, Contact Me, Experience, Projects */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8 text-element"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <motion.a
                href="/path-to-your-cv.pdf"
                download
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                Contact Me
              </motion.a>
              
            </motion.div>

            {/* Social Links: LinkedIn, GitHub, Facebook */}
            <motion.div
              className="flex space-x-6 mb-8 text-element"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://github.com/magarbarsha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                <FiFacebook size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Professional Photo */}
          <motion.div
            className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 hover:border-purple-500 transition-all shadow-2xl">
              <img
                src="./src/assets/barsha.jpg" // Replace with your photo URL
                alt="Professional Photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg space-x-4 border-l-4 border-blue-500 hover:shadow-xl transition">
            <FiBriefcase className="text-blue-600" size={36} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">8 Years Job</h3>
              <p className="text-gray-600">Experience</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg space-x-4 border-l-4 border-blue-500 hover:shadow-xl transition">
            <FiCheckCircle className="text-blue-600" size={36} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">500+ Projects</h3>
              <p className="text-gray-600">Completed</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg space-x-4 border-l-4 border-blue-500 hover:shadow-xl transition">
            <FiSmile className="text-blue-600" size={36} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">200+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
      <About />
        <Projects  />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;