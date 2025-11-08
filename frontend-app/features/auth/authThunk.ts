import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, registerApi, getUserApi } from "./authApi";
import { LoginPayload, RegisterPayload } from "./types";
import { saveToken } from "./tokenStorage";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await loginApi(data);
      saveToken(response.token);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (data: RegisterPayload, { rejectWithValue }) => {
    try {
      const response = await registerApi(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Register failed");
    }
  }
);

export const getUserThunk = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserApi();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch user");
    }
  }
);
