import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container my-5 min-vh-100">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
