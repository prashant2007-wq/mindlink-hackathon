"use client";

import React, { ReactNode, useState } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import MobileNav from "./MobileNav";

interface AppShellProps {
  children: ReactNode;
  sidebarItems?: { label: string; href: string }[];
}

const AppShell: React.FC<AppShellProps> = ({ children, sidebarItems }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900">
      {/* Sidebar for larger screens */}
      <AppSidebar items={sidebarItems} />

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

export default AppShell;
