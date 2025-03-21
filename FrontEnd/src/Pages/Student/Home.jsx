import React from 'react'
import Hero from '../../Components/Student/Hero'
import Companies from '../../Components/Student/Companies'
import CourseSection from '../../Components/Student/CourseSection'
import TestimonialsSection from '../../Components/Student/TestimonialsSection'
import CallToAction from '../../Components/Student/CallToAction'
import Footer from '../../Components/Student/Footer'

function Home() {
  return (
    <div className='flex flex-col items-center text-center space-y-7'>
      < Hero />
      < Companies />
      <CourseSection />
      <TestimonialsSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home