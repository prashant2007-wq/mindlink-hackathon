import axios from "@/lib/axios";
import { LoginPayload, RegisterPayload } from "./types";

export const loginApi = async (data: LoginPayload) => {
  const response = await axios.post("/auth/login", data);
  return response.data;
};

export const registerApi = async (data: RegisterPayload) => {
  const response = await axios.post("/auth/register", data);
  return response.data;
};

export const logoutApi = async () => {
  const response = await axios.post("/auth/logout");
  return response.data;
};

export const getUserApi = async () => {
  const response = await axios.get("/auth/me");
  return response.data;
};
