import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import useAuthContext from "../../Hooks/useAuthContext";

export default function Layout() {
  const { user } = useAuthContext();

  return (
    <>
      <NavBar />
      <div className={`EmptyPage position-relative ${user && user.is_admin ? "pt-5" : ""}`}>
        <Outlet></Outlet>
        {/* <div className="support-chat">

        </div> */}
      </div>
      <Footer />
    </>
  );
}
