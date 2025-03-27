import React, { useEffect, useState } from 'react'
import { useData } from '../../Context/AppContextProvider'
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import Footer from '../../Components/Student/Footer';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';

function Player() {
  const { Enrolled, calculateChapterTime } = useData();
  const { courseId } = useParams();
  const [courseData, setcourseData] = useState(null)
  const [OpenSection, setOpenSection] = useState({})
  const [PlayerData, setPlayerData] = useState(null)
  const lectureURL = 'https://youtu.be/SAcpESN_Fk4?si=Atod6pujcCigL1eq'

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const getCourseData = () => {
    const course = Enrolled.find(course => course._id === courseId)
    setcourseData(course)
  }

  useEffect(() => {
    getCourseData()
  }, [Enrolled])


  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
        {/* left column */}
        <div className='text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {courseData && courseData.courseContent.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-white rounded mb-2'>
                <div className='flex justify-between items-center px-4 py-3 cursor-pointer select-none' onClick={() => toggleSection(index)}>
                  <div className='flex items-center gap-2'>
                    <img className={`transform duration-500 transition-transform ${OpenSection[index] ? 'rotate-180' : ''}`} src={assets.down_arrow_icon} alt="arrow" />
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default' >{chapter.chapterContent.length} lecture -
                    {calculateChapterTime(chapter)}
                  </p>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${OpenSection[index] ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className='list-disc pl-4 md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className='flex items-start gap-2 py-1'>
                        <img className='w-4 h-4 mt-1' src={false ? assets.blue_tick_icon : assets.play_icon} alt="play" />
                        <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                          <p className='font-medium md:text-base text-sm'>{lecture.lectureTitle}</p>
                          <div className='flex  gap-2'>
                            {lecture.lectureUrl && <p className='text-blue-600  cursor-pointer' onClick={() => setPlayerData({
                              ...lecture, chapter: index + 1, lecture: i + 1
                            })}> Watch </p>}
                            <p className='text-sm md:text-default'>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })} min</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right column */}
        <div className='md:mt-10'>
          {PlayerData ? (
            <div>
              <YouTube 
                videoId={lectureURL.split('/').pop()} 
                iframeClassName='w-full aspect-video' 
              />
              <div className='flex justify-between items-center mt-1'>
                <p>{PlayerData.chapter}.{PlayerData.lecture} {PlayerData.lectureTitle}</p>
                <button className='text-blue-600'>{false ? 'Completed' : 'Mark Complete'}</button>
              </div>
            </div>
          ) : 
            <img src={courseData ? courseData.courseThumbnail : ''} alt="" />  
          }
        </div>
      </div>
      < Footer />
    </>

  )
}

export default Player