import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

function SideBar() {
  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-course', icon: assets.my_course_icon },
    { name: 'Student Enrollments', path: '/educator/student-enrolled', icon: assets.person_tick_icon },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Educator Panel</h2>
      </div>
      <ul className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-3 text-lg font-medium hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6" />
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="p-6 text-center text-sm text-gray-400">
        © 2025 LMS Platform
      </div>
    </div>
  );
}

export default SideBar;