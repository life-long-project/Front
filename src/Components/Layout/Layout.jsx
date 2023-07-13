import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import useAuthContext from "../../Hooks/useAuthContext";
import SupportChat from "../SupportChat/SupportChat";

export default function Layout() {
  const { user } = useAuthContext();

  return (
    <>
      <NavBar />
      <div className="supported-chat">
        <SupportChat />
      </div>

      <div
        className={`EmptyPage position-relative ${
          user && user.is_admin ? "pt-5" : ""
        }`}
      >
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
