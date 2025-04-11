import React, { useEffect, useState } from 'react';

function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend
    setCourses([
      {
        id: 1,
        title: 'Course 1',
        students: 10,
        price: 100,
        discount: 20,
        thumbnail: 'https://via.placeholder.com/300',
      },
      {
        id: 2,
        title: 'Course 2',
        students: 20,
        price: 200,
        discount: 15,
        thumbnail: 'https://via.placeholder.com/300',
      },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-custom-card rounded-lg overflow-hidden">
            <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
              <p className="text-gray-500 mt-2">{course.students} students enrolled</p>
              <div className="flex gap-3 items-center pt-2">
                <p className="text-gray-800 text-2xl font-semibold">
                  ${(course.price - (course.discount * course.price) / 100).toFixed(2)}
                </p>
                <p className="text-gray-500 line-through">${course.price}</p>
                <p className="text-gray-500">{course.discount}% off</p>
              </div>
              <button className="mt-4 w-full py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Manage Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;