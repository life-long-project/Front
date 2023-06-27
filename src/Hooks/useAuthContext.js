import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
}
