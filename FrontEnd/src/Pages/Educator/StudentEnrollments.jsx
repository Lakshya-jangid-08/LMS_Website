import React, { useEffect, useState } from 'react';

function StudentEnrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    // Fetch enrollments from the backend
    setEnrollments([
      { id: 1, student: 'John Doe', course: 'Course 1' },
      { id: 2, student: 'Jane Smith', course: 'Course 2' },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Student Enrollments</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b py-2">Student</th>
              <th className="border-b py-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id}>
                <td className="border-b py-2">{enrollment.student}</td>
                <td className="border-b py-2">{enrollment.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentEnrollments;