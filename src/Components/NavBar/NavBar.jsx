import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { Avatar, Image, MenuDivider, MenuGroup, Stack } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import useAuthContext from "../../Hooks/useAuthContext";
import useLogout from "../../Hooks/useLogout";

export default function NavBar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg navBarDark py-3">
        <div className="container">
          <Link className="navbar-brand pb-2 d-flex align-items-center" to="/">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                            name={user.username}
                          ></Avatar>
                        </Stack>
                      </MenuButton>
                      <MenuList>
                        <MenuGroup title="Profile">
                          <MenuItem onClick={
                            () => {
                              navigate(`/Profile/${user._id}`)
                            }
                          }>My Account</MenuItem>
                          <MenuItem onClick={
                            () => {
                              navigate("/create-job")
                            }
                          }>Add New Job</MenuItem>
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
    </>
  );
}
