// frontend-app/(auth)/login/components/LoginForm.tsx
"use client";
import { useLoginForm } from "../hooks/useLoginForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const { formData, handleChange, handleSubmit, loading, error } = useLoginForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}
