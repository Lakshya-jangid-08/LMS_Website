import React, { createContext, useContext, useEffect, useState } from 'react'
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';
export const context = createContext();

function AppContextProvider({children}) {

  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setallCourses] = useState([]);
  const [isEducator, setisEducator] = useState(true);
  const [Enrolled, setEnrolled] = useState([]);

  const fetchUserEnrollCourses = async() => {
    setEnrolled(dummyCourses);
  }

  const calculateRating = (course) => {
    if(course.courseRatings.length === 0) return 0;
    let totalRatings = 0;
    course.courseRatings.forEach(element => {
      totalRatings += element.rating;
    });
    return totalRatings / course.courseRatings.length;
  }
  
  const FetchCourses = async() => {
    setallCourses(dummyCourses)
  }

  const calculateChapterTime = (chapter) => {
    let time = 0
    chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, {units: ['h', 'm'], round: true})
  }

  const calculateCourseTime = (course) => {
    let time = 0
    course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) =>
       time += lecture.lectureDuration))
    return humanizeDuration(time * 60 * 1000, {units: ['h', 'm'], round: true})
  }

  const numberOfLectures = (course) => {
    let lectures = 0
    course.courseContent.map((chapter) =>{
      if(Array.isArray(chapter.chapterContent)) 
        lectures += chapter.chapterContent.length
    })
    return lectures
  }

  useEffect(() => {
    FetchCourses()
    fetchUserEnrollCourses()
  }, [])
  

  const Data = {
    currency , allCourses ,navigate, calculateRating
    ,isEducator , setisEducator, calculateChapterTime, 
    calculateCourseTime, numberOfLectures, fetchUserEnrollCourses, Enrolled
  }

  return (
        <context.Provider value = {Data}>
            {children}
        </context.Provider>
  )
}
export default AppContextProvider
export const useData = ()=> useContext(context)