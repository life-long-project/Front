import { useState } from "react";
import axios from "axios";
import useAuthContext from "../Hooks/useAuthContext";
import jwt_decode from "jwt-decode";

export default function useLogin(userData) {
  const { setUser } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const logIn = async (userData) => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.post(
        "https://back-ph2h.onrender.com/login",
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res.data);
      setLoading(false);
      let decoded = jwt_decode(res.data.auth_token);
      setUser(decoded.user);
      localStorage.setItem("token", res.data.auth_token);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  };

  return {logIn, loading, error}
}
