"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  label: string;
  href: string;
}

interface AppSidebarProps {
  items?: SidebarItem[];
}

const defaultERPItems: SidebarItem[] = [
  { label: "Dashboard", href: "/erp/dashboard" },
  { label: "Attendance", href: "/erp/attendance" },
  { label: "Clubs", href: "/erp/clubs" },
];

const defaultLMSItems: SidebarItem[] = [
  { label: "Dashboard", href: "/lms/dashboard" },
  { label: "Calendar", href: "/lms/calendar" },
];

const AppSidebar: React.FC<AppSidebarProps> = ({ items }) => {
  const pathname = usePathname();
  const navItems = items || defaultERPItems;

  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="p-4 font-bold text-xl text-gray-900 dark:text-white">
        MindLink
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <a
              className={`block px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors ${
                pathname === item.href
                  ? "bg-blue-200 dark:bg-gray-700 font-semibold"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AppSidebar;
`
