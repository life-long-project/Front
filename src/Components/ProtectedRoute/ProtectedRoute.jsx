import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ userData, children }) {
  if (localStorage.getItem("token") == null) {
    return <Navigate to='/signin'/>
  }
  else{
    return children
  }
}
