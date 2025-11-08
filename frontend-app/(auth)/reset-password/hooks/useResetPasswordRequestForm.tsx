import { useState } from "react";

interface UseResetPasswordRequestFormProps {
  onSuccess?: (message: string) => void;
  onError?: (error: string) => void;
}

export const useResetPasswordRequestForm = ({
  onSuccess,
  onError,
}: UseResetPasswordRequestFormProps = {}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    if (!email) {
      setError("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return false;
    }

    setError(null);
    return true;
  };

  const handleChange = (value: string) => {
    setEmail(value);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Failed to request password reset");
      }

      const result = await response.json();
      if (onSuccess) onSuccess(result.message || "Reset link sent successfully");
    } catch (err: any) {
      if (onError) onError(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
};
