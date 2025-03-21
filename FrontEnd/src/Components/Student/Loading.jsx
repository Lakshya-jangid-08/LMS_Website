import React from 'react'
import { assets } from '../../assets/assets';

export default function CourseSkeleton() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-100 to-white animate-pulse">
      {/* Course Title */}
      <div className="h-8 w-3/5 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-2/5 bg-gray-300 rounded mb-6"></div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          {/* Rating */}
          <div className="h-5 w-32 bg-gray-300 rounded"></div>

          {/* Instructor */}
          <div className="h-4 w-48 bg-gray-300 rounded"></div>

          {/* Course Structure */}
          <div className="h-6 w-40 bg-gray-300 rounded mt-6"></div>
          <div className="w-full h-12 bg-gray-300 rounded"></div>
          <div className="w-full h-12 bg-gray-300 rounded"></div>

          {/* Course Description */}
          <div className="h-6 w-48 bg-gray-300 rounded mt-6"></div>
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className="w-4/5 h-4 bg-gray-300 rounded"></div>
          <div className="w-3/5 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 space-y-4">
          {/* Course Image */}
          <div className="w-full h-48 bg-gray-300 rounded"></div>

          {/* Price and Discount */}
          <div className="h-5 w-36 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>

          {/* Enroll Button */}
          <div className="h-10 w-full bg-gray-300 rounded"></div>

          {/* Course Highlights */}
          <div className="h-6 w-48 bg-gray-300 rounded"></div>
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className="w-4/5 h-4 bg-gray-300 rounded"></div>
          <div className="w-3/5 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

