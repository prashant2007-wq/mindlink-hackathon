"use client";

import React from "react";
import ModeSwitcher from "./ModeSwitcher";
import MobileNav from "./MobileNav";

const AppHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      {/* App logo/title */}
      <div className="text-xl font-bold text-gray-900 dark:text-white">
        MindLink
      </div>

      {/* Right side controls */}
      <div className="flex items-center space-x-4">
        {/* Mode switcher */}
        <ModeSwitcher />

        {/* Mobile navigation toggle */}
        <MobileNav />
      </div>
    </header>
  );
};

export default AppHeader;
