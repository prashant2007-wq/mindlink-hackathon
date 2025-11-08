import React from "react";
import ConfirmForm from "../../../components/reset-password/components/ConfirmForm";
import { useRouter } from "next/router";

const ConfirmPasswordPage: React.FC = () => {
  const router = useRouter();

  const handleConfirm = async (data: { code: string; newPassword: string }) => {
    try {
      console.log("Confirmation data:", data);

      // Example: call your API endpoint
      const response = await fetch("/api/auth/reset-password/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to confirm password reset");
      }

      // Redirect user to login page after successful reset
      router.push("/auth/login");
    } catch (error: any) {
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ConfirmForm onSubmit={handleConfirm} />
    </div>
  );
};

export default ConfirmPasswordPage;
