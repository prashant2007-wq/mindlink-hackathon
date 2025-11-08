import React from "react";
import RequestForm from "../../../components/reset-password/components/RequestForm";

const RequestPasswordPage: React.FC = () => {
  const handleRequest = async (email: string) => {
    try {
      console.log("Password reset requested for:", email);

      // Example API call
      const response = await fetch("/api/auth/reset-password/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Failed to request password reset");
      }

      alert("Password reset link sent! Check your email.");
    } catch (error: any) {
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <RequestForm onSubmit={handleRequest} />
    </div>
  );
};

export default RequestPasswordPage;
