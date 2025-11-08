import { useState } from "react";
import { useRouter } from "next/router";

interface ConfirmFormData {
  code: string;
  newPassword: string;
}

interface UseResetPasswordConfirmFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useResetPasswordConfirmForm = ({
  onSuccess,
  onError,
}: UseResetPasswordConfirmFormProps = {}) => {
  const [data, setData] = useState<ConfirmFormData>({ code: "", newPassword: "" });
  const [errors, setErrors] = useState<{ code?: string; newPassword?: string }>({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!data.code) newErrors.code = "Confirmation code is required";
    if (!data.newPassword) newErrors.newPassword = "New password is required";
    else if (data.newPassword.length < 6)
      newErrors.newPassword = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ConfirmFormData, value: string) => {
    setData({ ...data, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/auth/reset-password/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Failed to reset password");
      }

      if (onSuccess) onSuccess();
      router.push("/auth/login");
    } catch (error: any) {
      if (onError) onError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
};
