import React, { useEffect } from "react";
import { useGetByAction } from "../../../Hooks/useGetByAction";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiUserX } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { Tooltip } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function ReportedUsers() {
  const successToast = useToast();
  const errorToast = useToast();
  const {
    getData: getUsers,
    setData: setUsers,
    data,
    isPending: usersLoading,
    error: usersError,
  } = useGetByAction();

  useEffect(() => {
    getUsers(
      `https://back-ph2h.onrender.com/admin/?auth_token=${localStorage.getItem(
        "token"
      )}`
    );
  }, []);

  const handleBlockUser = (id) => {
    try {
      axios.post(
        `https://back-ph2h.onrender.com/admin/user/block/${id}/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
      successToast({
        title: "Blocked User Successfuly.",
        description: "You Blocked User Successfuly",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getUsers(
        `https://back-ph2h.onrender.com/admin/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
    } catch (error) {
      errorToast({
        title: "Blocked User Failed.",
        description: "There Is Problem While Blocking User, Try Aggain Later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const handleUnblockUser = (id) => {
    try {
      axios.post(
        `https://back-ph2h.onrender.com/admin/user/unblock/${id}/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
      successToast({
        title: "Unblocked User Successfuly.",
        description: "You Unblocked User Successfuly",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      getUsers(
        `https://back-ph2h.onrender.com/admin/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
    } catch (error) {
      errorToast({
        title: "Unblocked User Failed.",
        description:
          "There Is Problem While Unblocking User, Try Aggain Later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const handleDeleteUser = (id) => {
    try {
      axios.post(
        `https://back-ph2h.onrender.com/admin/user/delete/${id}/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
      successToast({
        title: "Deleted User Successfuly.",
        description: "You Deleted User Successfuly",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getUsers(
        `https://back-ph2h.onrender.com/admin/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
    } catch (error) {
      errorToast({
        title: "Deleted User Failed.",
        description: "There Is Problem While Deleting User, Try Aggain Later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reported Users Table</h5>

              {/* <!-- Table with stripped rows --> */}
              <table className="table datatable">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No.</th>
                    <th scope="col">Deleted ?</th>
                    <th scope="col">Reported ?</th>
                    <th scope="col">Report Message</th>
                    <th scope="col">Blocked ?</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                {usersLoading && (
                  <>
                    <span className="me-2">Loading ...</span>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  </>
                )}

                <tbody className="tbodyspinner">
                  {!usersLoading &&
                    data &&
                    data.reported_users.map((user, key) => (
                      <tr key={key}>
                        <th scope="row">{user.full_name}</th>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          {user.is_hidden ? (
                            <span className="badge bg-danger px-2 py-2">
                              Deleted
                            </span>
                          ) : (
                            <span className="badge bg-success px-2 py-2">
                              Active
                            </span>
                          )}
                        </td>
                        <td>
                          {user.is_reported ? (
                            <span className="badge bg-danger px-2 py-2">
                              Reported
                            </span>
                          ) : (
                            <span className="badge bg-success px-2 py-2">
                              Good
                            </span>
                          )}
                        </td>
                        <td>
                          {user.report_messages}
                        </td>
                        <td>
                          {user.is_blocked ? (
                            <span className="badge bg-danger px-2 py-2">
                              Blocked
                            </span>
                          ) : (
                            <span className="badge bg-success px-2 py-2">
                              UnBlocked
                            </span>
                          )}
                        </td>
                        <td>
                          <Tooltip
                            hasArrow
                            label="Block User"
                            className="bg-danger"
                          >
                            <button
                              className={`mx-1 px-2 py-1 rounded  text-light ${
                                user.is_blocked ? "bg-secondary" : "bg-danger"
                              }`}
                              disabled={user.is_blocked ? true : false}
                              onClick={() => handleBlockUser(user._id)}
                            >
                              <FiUserX className="d-inline" />
                            </button>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            label="UnBlock User"
                            className="bg-primary"
                          >
                            <button
                              className={`mx-1 px-2 py-1 rounded text-light ${
                                user.is_blocked ? "bg-primary" : "bg-secondary"
                              }`}
                              disabled={user.is_blocked ? false : true}
                              onClick={() => handleUnblockUser(user._id)}
                            >
                              <FiUserCheck className="d-inline" />
                            </button>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            label="Delete User"
                            className="bg-danger"
                          >
                            <button
                              className={`mx-1 px-2 py-1 rounded ${
                                user.is_hidden
                                  ? "bg-secondary"
                                  : "bg-danger text-light"
                              }`}
                              disabled={user.is_hidden ? true : false}
                              onClick={() => handleDeleteUser(user._id)}
                            >
                              <RiDeleteBin6Line className="d-inline" />
                            </button>
                          </Tooltip>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* <!-- End Table with stripped rows --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
