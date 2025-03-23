import React, { useContext, useEffect, useState } from 'react'
import { assets, dummyCourses } from '../../assets/assets'
import { context } from '../../Context/AppContextProvider'
import { Link, Links } from 'react-router-dom'

function CourseCard({ course }) {

  const { currency, calculateRating } = useContext(context);

  return (
    <Link to={'/course/' + course._id} onClick={() => scrollTo(0, 0)}
      className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    >
      <img className='w-full' src={course.courseThumbnail} alt="Thumbnail" />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>{course.educatorname}</p>
        <div className='flex items-center space-x-2'>
          <p>{calculateRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt='' />
            ))}
          </div>
        </div>
        <p className='text-gray-500'>{course.courseRatings.length}</p>
      </div>
      <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
    </Link>
  )
}

export default CourseCard