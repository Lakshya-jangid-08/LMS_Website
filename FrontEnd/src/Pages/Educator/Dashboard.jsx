import React, { useEffect, useState } from 'react';
import { useData } from '../../Context/AppContextProvider';

function Dashboard() {
  const { allCourses, Enrolled } = useData();
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() => {
    // Calculate total earnings dynamically
    const earnings = allCourses.reduce((sum, course) => {
      const discountedPrice = course.coursePrice - (course.discount * course.coursePrice) / 100;
      return sum + discountedPrice * course.enrolledStudents.length;
    }, 0);
    setTotalEarnings(earnings.toFixed(2));
  }, [allCourses]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Educator Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Earnings</h2>
          <p className="text-2xl font-bold text-blue-600 mt-4">${totalEarnings}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Courses</h2>
          <p className="text-2xl font-bold text-blue-600 mt-4">{allCourses.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Enrolled Students</h2>
          <p className="text-2xl font-bold text-blue-600 mt-4">{Enrolled.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;