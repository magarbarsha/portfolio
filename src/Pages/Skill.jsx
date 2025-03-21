// import React from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { FaReact, FaNodeJs, FaCss3Alt, FaJs, FaGit, FaDatabase } from "react-icons/fa"; // Icons for skills
// import { DiMongodb } from "react-icons/di"; // Additional icons
// import { SiVisualstudiocode } from "react-icons/si";
// const Skills = () => {
//   const [scope, animate] = useAnimate();

//   // Animation variants for staggered text
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   // Animation for skill cards
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
//   };

//   // Staggered animation for text elements
//   React.useEffect(() => {
//     animate(
//       ".text-element",
//       { opacity: 1, y: 0 },
//       { delay: stagger(0.2), duration: 0.8 }
//     );
//   }, [animate]);

//   // Skill data
//   const skillsData = [
//     {
//       category: "Frontend",
//       skills: [
//         { name: "React", icon: <FaReact />, proficiency: 90 },
//         { name: "JavaScript", icon: <FaJs />, proficiency: 85 },
//         { name: "CSS", icon: <FaCss3Alt />, proficiency: 80 },
//       ],
//     },
//     {
//       category: "Backend",
//       skills: [
//         { name: "Node.js", icon: <FaNodeJs />, proficiency: 75 },
//         { name: "MongoDB", icon: <DiMongodb />, proficiency: 70 },
//         { name: "SQL", icon: <FaDatabase />, proficiency: 65 },
//       ],
//     },
//     {
//       category: "Tools",
//       skills: [
//         { name: "Git", icon: <FaGit />, proficiency: 85 },
//         { name: "VS Code", icon: <SiVisualstudiocode />, proficiency: 90 }, // Updated with VS Code icon
//       ],
//     },
//   ];

//   // Certifications or courses
//   const certifications = [
//     "React Certification - Udemy",
//     "JavaScript Algorithms and Data Structures - freeCodeCamp",
//     "Node.js Developer Certification - Coursera",
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-400 text-gray-800 py-16 px-6"
//       ref={scope}
//     >
//       <div className="container mx-auto">
//         {/* Section Heading */}
//         <motion.h2
//           className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-element"
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//         >
//           My Skills
//         </motion.h2>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillsData.map((category, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg text-element"
//               initial="hidden"
//               animate="visible"
//               variants={cardVariants}
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 {category.category}
//               </h3>
//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex}>
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center space-x-2">
//                         <span className="text-xl text-blue-600">{skill.icon}</span>
//                         <span className="text-lg font-medium text-gray-800">
//                           {skill.name}
//                         </span>
//                       </div>
//                       <span className="text-sm text-gray-600">
//                         {skill.proficiency}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div
//                         className="bg-blue-600 h-2.5 rounded-full"
//                         style={{ width: `${skill.proficiency}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Certifications Section */}
//         <motion.div
//           className="mt-16 bg-white p-6 rounded-lg shadow-lg text-element"
//           initial="hidden"
//           animate="visible"
//           variants={cardVariants}
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">
//             Certifications & Courses
//           </h3>
//           <ul className="space-y-2">
//             {certifications.map((certification, index) => (
//               <li key={index} className="text-gray-700">
//                 ✔️ {certification}
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;