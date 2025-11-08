import React, { useState } from "react";

interface ConfirmFormProps {
  onSubmit: (data: { code: string; newPassword: string }) => void;
}

const ConfirmForm: React.FC<ConfirmFormProps> = ({ onSubmit }) => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!code || !newPassword) {
      setError("Both fields are required.");
      return;
    }

    // Optional: Add password validation
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    onSubmit({ code, newPassword });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Confirm Reset Password</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="mb-4">
        <label className="block mb-1 font-medium">Confirmation Code</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter confirmation code"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter new password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Confirm
      </button>
    </form>
  );
};

export default ConfirmForm;
