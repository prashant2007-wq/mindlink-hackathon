import React from "react";

interface SwitchButtonProps {
  enabled: boolean;
  onToggle: () => void;
  label?: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ enabled, onToggle, label }) => {
  return (
    <div className="flex items-center space-x-2">
      {label && <span className="font-medium">{label}</span>}
      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
          enabled ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default SwitchButton;
