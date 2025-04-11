import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Components/Educator/SideBar';

function Educator() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">
        <div className="p-6">
          <Outlet /> {/* Render child routes */}
        </div>
      </div>
    </div>
  );
}

export default Educator;