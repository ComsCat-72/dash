import React from 'react';
import {
  FiHome,
  FiSearch,
  FiCalendar,
  FiSettings,
  FiBarChart2,
} from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';

function Dashboard() {
  return (
    <div className="w-full h-[900px] flex bg-white/10 rounded-[30px] backdrop-blur-3xl border border-white/20 overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">

      {/* Sidebar */}
      <aside className="w-[80px] bg-white/10 backdrop-blur-2xl border-r border-white/20 flex flex-col items-center py-6 space-y-6 shadow-inner">
        <FiHome className="text-[22px] text-white hover:scale-110 transition-transform" />
        <MdDashboard className="text-[22px] text-white hover:scale-110 transition-transform" />
        <FiCalendar className="text-[22px] text-white hover:scale-110 transition-transform" />
        <FiBarChart2 className="text-[22px] text-white hover:scale-110 transition-transform" />
        <FiSettings className="text-[22px] text-white mt-auto hover:scale-110 transition-transform" />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-white/90 to-white rounded-[25px] border border-white/10 p-6">

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center bg-white/70 rounded-xl px-4 py-2 w-[300px] shadow-inner border border-white/40">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-500"
            />
          </div>
          <div className="text-gray-600 text-sm font-medium">
            Welcome back, User 👋
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white/50 rounded-xl border border-white/10 p-6 shadow-inner overflow-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Dashboard Overview
          </h2>
          {/* Dashboard widgets or data components go here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
