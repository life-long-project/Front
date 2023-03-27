import React from "react";
import { Outlet } from "react-router-dom";
import Subscribe from "../Main Layout/Subscribe/Subscribe";
import Footer from "../Main Layout/Footer/Footer";
import ScrollTop from "../Main Layout/ScrollTop/ScrollTop";
import Navbar from "../Main Layout/Navbar/Navbar";
export default function Layout() {
  return (
    <>
      <Navbar />
        <Outlet></Outlet>
      <Subscribe />
      <ScrollTop />
      <Footer />
    </>
  );
}
