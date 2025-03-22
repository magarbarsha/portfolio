import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaReact, FaJs, FaCss3, FaNodeJs, FaGit, FaDatabase } from "react-icons/fa"; // Icons for skills

const Skills = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Skill data
  const skills = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
        { name: "CSS", icon: <FaCss3 />, level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 75 },
        { name: "Database", icon: <FaDatabase />, level: 70 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <FaGit />, level: 85 },
      ],
    },
  ];

  // Certifications
  const certifications = [
    "React Certification - Udemy",
    "JavaScript Certification - Coursera",
    "Node.js Certification - Udemy",
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-400 text-gray-800 py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-8"
          variants={fadeIn}
        >
          Skills
        </motion.h1>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-600">{skill.icon}</span>
                        <span className="text-lg font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-12 bg-white p-6 rounded-lg shadow-lg"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-2">
            {certifications.map((certification, index) => (
              <li key={index} className="text-lg text-gray-600">
                {certification}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;