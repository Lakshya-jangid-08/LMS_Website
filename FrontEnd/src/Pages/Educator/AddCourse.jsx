import React, { useState } from 'react';

function AddCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    price: '',
    discount: '',
    thumbnail: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleFileChange = (e) => {
    setCourseData({ ...courseData, thumbnail: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send courseData to the backend
    console.log(courseData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Course</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Course Title</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course title"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course description"
            rows="4"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
            <input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course price"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={courseData.discount}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter discount percentage"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Thumbnail</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;