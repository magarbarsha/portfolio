import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons for GitHub and live demo

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: "./src/assets/portfolio.jpg", // Replace with your image path
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Web Apps",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "A full-stack e-commerce application built with React and Node.js.",
    image: "./src/assets/ecommerce.jpg", // Replace with your image path
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Web Apps",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerceapp.com",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A mobile task manager app built with React Native.",
    image: "./src/assets/taskmanager.jpg", // Replace with your image path
    technologies: ["React Native", "Firebase"],
    category: "Mobile Apps",
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://taskmanagerapp.com",
  },
  {
    id: 4,
    title: "Open Source Contribution",
    description: "Contributed to an open-source project on GitHub.",
    image: "./src/assets/opensource.jpg", // Replace with your image path
    technologies: ["Git", "GitHub"],
    category: "Open Source",
    github: "https://github.com/yourusername/opensource",
    demo: "https://opensourceproject.com",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen bg-white py-16 px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {["All", "Web Apps", "Mobile Apps", "Open Source"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links to GitHub and Live Demo */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub size={20} className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;