import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import {
  Avatar,
  Image,
  Img,
  MenuDivider,
  MenuGroup,
  Stack,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import useAuthContext from "../../Hooks/useAuthContext";
import useLogout from "../../Hooks/useLogout";
import { GoSignOut } from "react-icons/go";
import { TfiSettings } from "react-icons/tfi";
import { BiMessageDetail } from "react-icons/bi";
import { BsBell, BsSearch } from "react-icons/bs";

export default function NavBar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  return (
    <>
      {user?.is_admin ? (
        <header
          id="header"
          className="header fixed-top d-flex align-items-center"
        >
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/Dashboard" className="logo d-flex align-items-center">
              {/* <Img src="/images/Logo.png" alt="Snap Job" /> */}
              <span className="d-none d-lg-block">Snap Jobs</span>
            </Link>
          </div>
          {/* End Logo */}

          <div className="search-bar">
            <form className="search-form d-flex align-items-center">
              <input
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
              />
              <button type="submit" title="Search">
                <i className="bi bi-search">
                  <BsSearch className="d-inline" />
                </i>
              </button>
            </form>
          </div>
          {/* End Search Bar */}

          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item d-block d-lg-none">
                <Link className="nav-link nav-icon search-bar-toggle " to="">
                  <i className="bi bi-search">
                    <BsSearch className="d-inline" />
                  </i>
                </Link>
              </li>
              {/* End Search Icon*/}

              <li className="nav-item dropdown">
                <Link
                  className="nav-link nav-icon"
                  to=""
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-bell">
                    <BsBell className="d-inline" />
                  </i>
                  <span className="badge bg-primary badge-number">4</span>
                </Link>
                {/* End Notification Icon */}

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    You have 4 new notifications
                    <Link href="">
                      <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                      </span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning">
                      <BiMessageDetail className="d-inline" />
                    </i>
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-footer">
                    <Link to="">Show all notifications</Link>
                  </li>
                </ul>
                {/* End Notification Dropdown Items */}
              </li>
              {/* End Notification Nav */}

              <li className="nav-item dropdown pe-3">
                <Link
                  className="nav-link nav-profile d-flex align-items-center pe-2"
                  to=""
                  data-bs-toggle="dropdown"
                >
                  <Avatar
                    className="navBarAvatar"
                    name={user && user.username}
                  ></Avatar>
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    K. Anderson
                  </span>
                </Link>
                {/* End Profile Iamge Icon */}

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="users-profile.html"
                    >
                      <i className="bi bi-gear">
                        <TfiSettings className="d-inline" />
                      </i>
                      <span>Account Settings</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to={""}
                      onClick={() => {
                        logout();
                      }}
                    >
                      <i className="bi bi-box-arrow-right">
                        <GoSignOut className="d-inline" />
                      </i>
                      <span>Sign Out</span>
                    </Link>
                  </li>
                </ul>
                {/* End Profile Dropdown Items */}
              </li>
              {/* End Profile Nav */}
            </ul>
          </nav>
          {/* End Icons Navigation */}
        </header>
      ) : (
        <nav className={`navbar navbar-dark navbar-expand-lg navBarDark py-3 `}>
          <div className="container">
            <Link
              className="navbar-brand pb-2 d-flex align-items-center"
              to="/"
            >
              <input src="/images/Logo.png" type="image" alt="Logo Image" />
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/jobs">
                    Explore Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    About Us
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {!user && (
                  <>
                    <li className="nav-item d-flex align-items-center me-lg-2">
                      <Link
                        className="nav-link text-white active fst-italic"
                        to="/signin"
                      >
                        Log in
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link type="button" className="main-btn" to="/signup">
                        Sign up
                      </Link>
                    </li>
                  </>
                )}
                {user && (
                  <>
                    <li className="nav-item d-flex align-items-center">
                      <Menu className="px-3">
                        <MenuButton>
                          <span className="text-white navBarIcons">
                            <IoNotificationsSharp />
                          </span>
                        </MenuButton>

                        <MenuList>
                          <MenuItem minH="48px">
                            <Image
                              boxSize="2rem"
                              borderRadius="full"
                              src="https://placekitten.com/100/100"
                              alt="Fluffybuns the destroyer"
                              mr="12px"
                            />
                            <span>Fluffybuns the Destroyer</span>
                          </MenuItem>
                          <MenuItem minH="40px">
                            <Image
                              boxSize="2rem"
                              borderRadius="full"
                              src="https://placekitten.com/120/120"
                              alt="Simon the pensive"
                              mr="12px"
                            />
                            <span>Simon the pensive</span>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <span className="text-white navBarIcons px-3">
                        <RiMessage2Fill />
                      </span>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <Menu>
                        <MenuButton>
                          <Stack direction="row" spacing={4}>
                            <Avatar
                              className="navBarAvatar"
                              name={user && user.username}
                            ></Avatar>
                          </Stack>
                        </MenuButton>
                        <MenuList>
                          <MenuGroup title="Profile">
                            <MenuItem
                              onClick={() => {
                                navigate(`/Profile/${user._id}`);
                              }}
                            >
                              My Account
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                navigate("/create-job");
                              }}
                            >
                              Add New Job
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                logout();
                              }}
                            >
                              Logout{" "}
                            </MenuItem>
                          </MenuGroup>
                        </MenuList>
                      </Menu>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
