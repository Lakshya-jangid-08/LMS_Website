import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context, useData } from '../../Context/AppContextProvider'
import CourseCard from './CourseCard';
function CourseSection() {
  const { allCourses } = useData();
  const topCourses = allCourses.slice(0, 4);

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'> Learn from the best</h2>
      <p>
        Discover out top-rated courses across various categories.
        From coding and design to <br /> business and wellness, our courses
        are crafted to deliver results.
      </p>

      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {topCourses.map((course, index) =>
          <CourseCard key={index} course={course} />
        )}
        {/* <CourseCard/>    */}
      </div>

      <Link to={'/course-list'} onClick={() => scrollTo(0, 0)}
        className='text-gray-500 border border-gray-500/30 px-10 oy-3 rounded'>
        Show all courses
      </Link>
    </div>
  )
}

export default CourseSection