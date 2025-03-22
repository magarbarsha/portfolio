import React, { useState } from "react";

const Form = ({ onAddProject }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    liveLink: "",
    githubLink: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject(formData); // Pass the new project data to the parent component
    setFormData({
      title: "",
      description: "",
      image: "",
      liveLink: "",
      githubLink: "",
    }); // Reset the form
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Form Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Project</h2>

      {/* Project Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Project Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Project Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Project Image URL */}
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Project Image URL
        </label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Live Demo Link */}
      <div className="mb-4">
        <label htmlFor="liveLink" className="block text-sm font-medium text-gray-700">
          Live Demo Link
        </label>
        <input
          type="url"
          id="liveLink"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* GitHub Repository Link */}
      <div className="mb-6">
        <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">
          GitHub Repository Link
        </label>
        <input
          type="url"
          id="githubLink"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Add Project
      </button>
    </form>
  );
};

export default Form;