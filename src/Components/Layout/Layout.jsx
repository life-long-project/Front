import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="EmptyPage">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
