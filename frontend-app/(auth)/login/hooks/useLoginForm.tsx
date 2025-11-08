"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoogleSignIn from "./GoogleSignIn"; // ← our previous component
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log("✅ User logged in:", user);

      localStorage.setItem("user", JSON.stringify(user));
      router.push("/(lms)/lms/dashboard"); // redirect to dashboard
    } catch (error: any) {
      console.error("❌ Login failed:", error.message);
      alert("Invalid email or password. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Welcome Back 👋
      </h2>

      {/* Email/Password Login Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center justify-center">
        <span className="border-t border-gray-200 w-1/4"></span>
        <span className="mx-2 text-gray-400 text-sm">or</span>
        <span className="border-t border-gray-200 w-1/4"></span>
      </div>

      {/* Google Sign-In */}
      <GoogleSignIn />

      <p className="text-center text-sm text-gray-500 mt-6">
        Forgot password?{" "}
        <a href="/(auth)/reset-password/request" className="text-blue-600 hover:underline">
          Reset here
        </a>
      </p>
    </div>
  );
}
