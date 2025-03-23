import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { UserButton, useClerk, useUser } from '@clerk/clerk-react';
import { context } from '../../Context/AppContextProvider';
function Navbar() {

  const isCourseList = location.pathname.includes('/course-list');
  const { navigate, isEducator } = useContext(context);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className={`w-full items-center flex justify-between border-b-2 border-black sm:px-10 md:px-14 lg:px-10 py-4  ${isCourseList ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img onClick={() => navigate('/')} src={assets.logo} alt="LOGO" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        {user && <>
          <div className="">
            <button onClick={navigate('/educator')} className='text-black'>{isEducator ? 'Educator Dashboard ' : 'Become Educator'}</button> | <Link className='text-black' to='/my-enrollments'> My Enrollments</Link>
          </div>
        </>}
        {user ? <UserButton /> :
          <button onClick={() => {
            openSignIn()
            console.log("clicked");
          }} className='bg-cyan-400 text-white px-4 py-3 rounded-full'>
            Create Account
          </button>
        }
      </div>
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user && <>
            <button onClick={navigate('/educator')} className='text-black'>{isEducator ? 'Educator Dashboard ' : 'Become Educator'}</button> | <Link className='text-black' to='/my-enrollments'> My Enrollments</Link>
            <Link to='/my-enrollments'>My Enrollments</Link>
          </>
          }
        </div>
        {user ? <UserButton /> :
          <img onClick={() => {
            openSignIn()
            console.log("clicked");
          }}
            src={assets.user_icon} className='px-4 cursor-pointer' ></img>
        }
      </div>
    </div>
  )
}

export default Navbar