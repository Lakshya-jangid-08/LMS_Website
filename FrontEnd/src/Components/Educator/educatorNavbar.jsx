import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { UserButton, useClerk, useUser } from '@clerk/clerk-react';
import { context } from '../../Context/AppContextProvider';

function EducatorNavbar() {
  const { navigate } = useContext(context);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="w-full items-center flex justify-between border-b-2 border-black 
      sm:px-10 md:px-14 lg:px-10 py-4 bg-gray-800 text-white">
      <img onClick={() => navigate('/educator')} src={assets.logo_dark} alt="LOGO" className="w-28 lg:w-32 cursor-pointer" />
      <div className="hidden md:flex items-center gap-5">
        {user && (
          <>
            <div>
              <Link className="text-white" to="/educator/my-course">My Courses</Link> |
              <Link className="text-white" to="/educator/add-course">Add Course</Link> |
              <Link className="text-white" to="/educator/student-enrolled">Student Enrollments</Link>
            </div>
          </>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-4 py-3 rounded-full"
          >
            Sign In
          </button>
        )}
      </div>
      <div className="md:hidden flex items-center gap-2 sm:gap-5">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <Link className="text-white" to="/educator/my-course">My Courses</Link> |
              <Link className="text-white" to="/educator/add-course">Add Course</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <img
            onClick={() => openSignIn()}
            src={assets.user_icon}
            className="px-4 cursor-pointer"
            alt="User Icon"
          />
        )}
      </div>
    </div>
  );
}

export default EducatorNavbar;