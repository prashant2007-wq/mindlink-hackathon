"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { selectAuthToken } from "@/features/auth/authSelectors";

export default function AuthBootstrap() {
  const token = useAppSelector(selectAuthToken);
  const router = useRouter();

  useEffect(() => {
    if (token) router.push("/(lms)/lms/dashboard");
  }, [token, router]);

  return null;
}
