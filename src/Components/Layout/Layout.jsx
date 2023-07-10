import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="EmptyPage position-relative">
        <Outlet></Outlet>
        {/* <div className="support-chat">

        </div> */}
      </div>
      <Footer />
    </>
  );
}
