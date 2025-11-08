"use client";

import React, { useEffect, useState } from "react";
import SwitchButton from "./SwitchButton";

const ModeSwitcher: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, read from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDarkMode(true);
    else if (stored === "light") setDarkMode(false);
    else {
      // Default to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <SwitchButton
      enabled={darkMode}
      onToggle={() => setDarkMode(!darkMode)}
      label="Dark Mode"
    />
  );
};

export default ModeSwitcher;
