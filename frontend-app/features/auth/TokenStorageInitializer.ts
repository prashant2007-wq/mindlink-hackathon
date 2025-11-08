"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";
import { getToken } from "./tokenStorage";

export function TokenStorageInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return null;
}

