import React from 'react'
import { Navigate } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";


export default function useLogout() {
  const { setUser } = useAuthContext();

  async function logout() {
    localStorage.removeItem("token");
    setUser(null);
    <Navigate to="/login" />
  }
  return {logout};
}
