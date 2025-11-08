"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/erp/dashboard">
              <a className="text-gray-900 dark:text-white font-medium">ERP Dashboard</a>
            </Link>
            <Link href="/erp/attendance">
              <a className="text-gray-900 dark:text-white font-medium">Attendance</a>
            </Link>
            <Link href="/erp/clubs">
              <a className="text-gray-900 dark:text-white font-medium">Clubs</a>
            </Link>
            <Link href="/lms/dashboard">
              <a className="text-gray-900 dark:text-white font-medium">LMS Dashboard</a>
            </Link>
            <Link href="/lms/calendar">
              <a className="text-gray-900 dark:text-white font-medium">Calendar</a>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
