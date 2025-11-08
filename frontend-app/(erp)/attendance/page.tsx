import React, { useEffect, useState } from "react";
import ERPLayout from "../../components/layout/ERPLayout";

interface AttendanceRecord {
  id: number;
  name: string;
  date: string;
  status: "Present" | "Absent" | "Late";
}

const AttendancePage: React.FC = () => {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchAttendance = async () => {
      setLoading(true);
      try {
        // Replace with real API call
        const data: AttendanceRecord[] = [
          { id: 1, name: "Alice Johnson", date: "2025-11-08", status: "Present" },
          { id: 2, name: "Bob Smith", date: "2025-11-08", status: "Absent" },
          { id: 3, name: "Charlie Brown", date: "2025-11-08", status: "Late" },
        ];
        setAttendance(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <ERPLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Attendance</h1>

        {loading ? (
          <p>Loading attendance records...</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((record) => (
                <tr key={record.id} className="text-center">
                  <td className="border border-gray-300 p-2">{record.id}</td>
                  <td className="border border-gray-300 p-2">{record.name}</td>
                  <td className="border border-gray-300 p-2">{record.date}</td>
                  <td
                    className={`border border-gray-300 p-2 font-semibold ${
                      record.status === "Present"
                        ? "text-green-600"
                        : record.status === "Absent"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {record.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </ERPLayout>
  );
};

export default AttendancePage;
