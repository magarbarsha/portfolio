import React from "react";
import { motion } from "framer-motion"; // For animations

const Resume = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-400 text-gray-800 py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-8"
          variants={fadeIn}
        >
          Resume
        </motion.h1>

        {/* Download Button */}
        <motion.div className="text-center mb-12" variants={fadeIn}>
          <a
            href="/resume.pdf" // Replace with the actual path to your resume PDF
            download="resume.pdf"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Simplified Resume Embed */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6">Simplified Resume</h2>
          <div className="space-y-4">
            {/* Name */}
            <div>
              <h3 className="text-xl font-semibold">Name</h3>
              <p className="text-lg text-gray-600">Barsha Magar</p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-lg text-gray-600">magarbarsha333@gmail.com</p>
              <p className="text-lg text-gray-600">9703080249</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold">Skills</h3>
              <ul className="list-disc list-inside text-lg text-gray-600">
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Git</li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="text-lg text-gray-600">
                <p>
                  <strong>Lincoln University</strong> - Bachelor's Degree (2022 - Present)
                </p>
                <p>Currently pursuing a Bachelor's degree in Computer Science.</p>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-xl font-semibold">Courses</h3>
              <div className="text-lg text-gray-600">
                <p>
                  <strong>React Course</strong> - Ongoing
                </p>
                <p>Currently learning React to build modern, scalable web applications.</p>
              </div>
            </div>

            {/* Hackathon Participation */}
            <div>
              <h3 className="text-xl font-semibold">Hackathon Participation</h3>
              <div className="text-lg text-gray-600">
                <p>
                  <strong>Hackathon Name</strong> - Participant (2023)
                </p>
                <p>
                  Participated in a hackathon to collaborate with peers and build innovative
                  solutions using React and other technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;