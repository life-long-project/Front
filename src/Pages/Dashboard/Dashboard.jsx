import React, { useState } from "react";
import "./Dashboard.css";
import MainDashboard from "./Components/MainDashboard";
import { Img } from "@chakra-ui/react";
import { BsBell, BsSearch, BsToggles } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { TfiSettings } from "react-icons/tfi";
import { GoSignOut } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineExpandCircleDown } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import AllUsersTable from "./Components/AllUsersTable";
import { Link, Route, Routes } from "react-router-dom";
import AllJobs from "./Components/AllJobs";
import ReportedJobs from "./Components/ReportedJobs";
import ReportedUsers from "./Components/ReportedUsers";
import { useAxiosGet } from "../../Hooks/useAxiosGet";

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState("dashboard");

  return (
    <>


      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link
              className="nav-link "
              to=""
              onClick={() => setCurrentSection("dashboard")}
            >
              <i className="bi bi-grid">
                <RxDashboard className="d-inline" />
              </i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* End Dashboard Nav */}

          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#Jobs-nav"
              data-bs-toggle="collapse"
              to=""
            >
              <i className="bi bi-layout-text-window-reverse">
                <MdWorkOutline className="d-inline" />
              </i>
              <span>Jobs</span>
              <i className="bi bi-chevron-down ms-auto">
                <MdOutlineExpandCircleDown className="d-inline" />
              </i>
            </Link>
            <ul
              id="Jobs-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="" onClick={() => setCurrentSection("all-jobs")}>
                  <i className="bi bi-circle">
                    <BsCircle className="d-inline" />
                  </i>
                  <span>All Jobs</span>
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setCurrentSection("reported-jobs")}>
                  <i className="bi bi-circle">
                    <BsCircle className="d-inline" />
                  </i>
                  <span>Reported Jobs</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End USers Nav */}
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              to=""
            >
              <i className="bi bi-layout-text-window-reverse">
                <AiOutlineUser className="d-inline" />
              </i>
              <span>Users</span>
              <i className="bi bi-chevron-down ms-auto">
                <MdOutlineExpandCircleDown className="d-inline" />
              </i>
            </Link>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="" onClick={() => setCurrentSection("all-users")}>
                  <i className="bi bi-circle">
                    <BsCircle className="d-inline" />
                  </i>
                  <span>All Users</span>
                </Link>
              </li>
              <li>
                <Link to=""
                onClick={() => setCurrentSection("reported-users")}
                >
                  <i className="bi bi-circle">
                    <BsCircle className="d-inline" />
                  </i>
                  <span>Reported Users</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End USers Nav */}

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person">
                <FaRegUserCircle className="d-inline" />
              </i>
              <span>Profile</span>
            </a>
          </li>
          {/* End Profile Page Nav */}
        </ul>
      </aside>
      {/* End Sidebar*/}

      <main id="main" className="main mt-5 pt-5">
        <div className="pagetitle">
          <h1>Dashboard</h1>
        </div>
        {/* End Page Title */}

        <section className="section dashboard">
          {currentSection === "dashboard" && <MainDashboard />}
          {currentSection === "all-users" && <AllUsersTable />}
          {currentSection === "all-jobs" && <AllJobs />}
          {currentSection === "reported-jobs" && <ReportedJobs />}
          {currentSection === "reported-users" && <ReportedUsers />}
        </section>
      </main>
      {/* End #main */}
    </>
  );
}
