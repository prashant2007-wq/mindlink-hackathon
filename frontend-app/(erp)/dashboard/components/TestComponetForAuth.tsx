import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";

const TestComponetForAuth: React.FC = () => {
  // Example: Get auth info from Redux store
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <div className="p-4 bg-white rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Authentication Test Component</h2>

      {auth.isLoggedIn ? (
        <div>
          <p>
            <span className="font-semibold">Logged in as:</span> {auth.user?.name || "Unknown"}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {auth.user?.email || "N/A"}
          </p>
        </div>
      ) : (
        <p className="text-red-500 font-medium">User is not logged in.</p>
      )}
    </div>
  );
};

export default TestComponetForAuth;
