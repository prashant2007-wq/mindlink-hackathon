"use client";

import React, { ReactNode, useState } from "react";
import AppHeader from "./AppHeader";
import MobileNav from "./MobileNav";

interface ERPLayoutProps {
  children: ReactNode;
}

const ERPLayout: React.FC<ERPLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-col w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-4 font-bold text-xl text-gray-900 dark:text-white">
          ERP Menu
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="/erp/dashboard"
            className="text-gray-900 dark:text-white hover:text-blue-600"
          >
            Dashboard
          </a>
          <a
            href="/erp/attendance"
            className="text-gray-900 dark:text-white hover:text-blue-600"
          >
            Attendance
          </a>
          <a
            href="/erp/clubs"
            className="text-gray-900 dark:text-white hover:text-blue-600"
          >
            Clubs
          </a>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AppHeader />

        {/* Mobile navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default ERPLayout;
