ximport React from "react";
import ERPLayout from "../../components/layout/ERPLayout";
import TestComponetForAuth from "../../components/layout/TestComponetForAuth";

const DashboardPage: React.FC = () => {
  return (
    <ERPLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">ERP Dashboard</h1>

        {/* Test Authentication Component */}
        <TestComponetForAuth />

        {/* Example stats section */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Total Students</h2>
            <p className="text-2xl mt-2">120</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Total Teachers</h2>
            <p className="text-2xl mt-2">15</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Clubs</h2>
            <p className="text-2xl mt-2">8</p>
          </div>
        </div>
      </div>
    </ERPLayout>
  );
};

export default DashboardPage;
