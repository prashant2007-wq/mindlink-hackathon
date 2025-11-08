import React from "react";

const LMSLoading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="loader border-4 border-green-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading LMS content...</p>
      </div>

      <style jsx>{`
        .loader {
          border-top-color: transparent;
          border-right-color: green;
        }
      `}</style>
    </div>
  );
};

export default LMSLoading;
