import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './Pages/Student/Home'
import CourseLists from './Pages/Student/CourseLists'
import CourseDetails from './Pages/Student/CourseDetails'
import MyEnrollments from './Pages/Student/MyEnrollments'
import Player from './Pages/Student/Player'
import Loading from './Components/Student/Loading'
import Educator from './Pages/Educator/Educator'
import Dashboard from './Pages/Educator/Dashboard'
import AddCourse from './Pages/Educator/AddCourse'
import MyCourses from './Pages/Educator/MyCourses'
import StudentEnrollments from './Pages/Educator/StudentEnrollments'
import Navbar from './Components/Student/Navbar'
import EducatorNavbar from './Components/Educator/educatorNavbar'

function App() {
	const isEducator = useMatch('/educator/*') // Match educator routes

	return (
		<div className='bg-white min-h-screen w-full'>
			{!isEducator && <Navbar />} {/* Render Navbar only for non-educator pages */}
			{isEducator && <EducatorNavbar/>}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/course-list' element={<CourseLists />} />
				<Route path='/course-list/:input' element={<CourseLists />} />
				<Route path='/course/:id' element={<CourseDetails />} />
				<Route path='/my-enrollments' element={<MyEnrollments />} />
				<Route path='/player/:courseId' element={<Player />} />
				<Route path='/loading:path' element={<Loading />} />

				<Route path='/educator' element={<Educator />}>
					<Route index element={<Dashboard />} /> 
					<Route path='add-course' element={<AddCourse />} />
					<Route path='my-course' element={<MyCourses />} />
					<Route path='student-enrolled' element={<StudentEnrollments />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App