import React, { useEffect } from "react";
import { useGetByAction } from "../../../Hooks/useGetByAction";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiUserX } from "react-icons/fi";
import { Tooltip } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function ReportedJobs() {
  const successToast = useToast();
  const errorToast = useToast();
  const {
    getData: getJobs,
    setData: setJobs,
    data,
    isPending: jobsLoading,
    error: jobsError,
  } = useGetByAction();

  useEffect(() => {
    getJobs(
      `https://back-ph2h.onrender.com/admin/?auth_token=${localStorage.getItem(
        "token"
      )}`
    );
  }, []);

  const handleDeleteJob = (id) => {
    try {
      axios.post(
        `https://back-ph2h.onrender.com/admin/job/delete/${id}/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
      successToast({
        title: "Deleted Job Successfuly.",
        description: "You Deleted Job Successfuly",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getJobs(
        `https://back-ph2h.onrender.com/admin/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
    } catch (error) {
      errorToast({
        title: "Deleted Job Failed.",
        description: "There Is Problem While Deleting Job, Try Aggain Later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const handleDeleteJobUser = (id) => {
    try {
      axios.post(
        `https://back-ph2h.onrender.com/admin/job/delete_both/${id}/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
      successToast({
        title: "Deleted Job Successfuly.",
        description: "You Deleted Job Successfuly",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      getJobs(
        `https://back-ph2h.onrender.com/admin/?auth_token=${localStorage.getItem(
          "token"
        )}`
      );
    } catch (error) {
      errorToast({
        title: "Deleted Job Failed.",
        description: "There Is Problem While Deleting Job, Try Aggain Later.",
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
              <h5 className="card-title">Reported Jobs Table</h5>

              {/* <!-- Table with stripped rows --> */}
              <table className="table datatable">
                <thead>
                  <tr>
                    <th scope="col">Job Title</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Job Type</th>
                    <th scope="col">Applied Status</th>
                    <th scope="col">Deleted ?</th>
                    <th scope="col">Reported ?</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                {jobsLoading && (
                  <>
                    <span className="me-2">Loading ...</span>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  </>
                )}

                <tbody className="tbodyspinner">
                  {!jobsLoading &&
                    data &&
                    data.reported_job_posts.map((job, key) => (
                      <tr key={key}>
                        <th scope="row">{job.job_name}</th>
                        <td>{job.salary}</td>
                        <td>{job.job_type}</td>
                        <td>
                          {job.is_finished ? (
                            <span className="badge bg-success px-2 py-2">
                              Finished
                            </span>
                          ) : (
                            <span className="badge bg-info px-2 py-2">
                              Pending
                            </span>
                          )}
                        </td>
                        <td>
                          {job.is_hidden ? (
                            <span className="badge bg-danger px-2 py-2">
                              Deleted
                            </span>
                          ) : (
                            <span className="badge bg-success px-2 py-2">
                              Available
                            </span>
                          )}
                        </td>
                        <td>
                          {job.is_reported ? (
                            <span className="badge bg-danger px-2 py-2">
                              Reported
                            </span>
                          ) : (
                            <span className="badge bg-success px-2 py-2">
                              Clear
                            </span>
                          )}
                        </td>
                        <td>
                          <Tooltip
                            hasArrow
                            label="Delete Job"
                            className="bg-danger"
                          >
                            <button
                              className={`mx-1 px-2 py-1 rounded  text-light ${
                                job.is_hidden ? "bg-secondary" : "bg-danger"
                              }`}
                              disabled={job.is_hidden ? true : false}
                              onClick={() => handleDeleteJob(job._id)}
                            >
                              <RiDeleteBin6Line className="d-inline" />
                            </button>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            label="Delete Job & Delete User"
                            className="bg-danger"
                          >
                            <button
                              className={`mx-1 px-2 py-1 rounded text-light ${
                                job.is_hidden ? "bg-secondary" : "bg-danger"
                              }`}
                              disabled={job.is_hidden ? true : false}
                              onClick={() => handleDeleteJobUser(job._id)}
                            >
                              <RiDeleteBin6Line className="d-inline mx-1" />
                              <FiUserX className="d-inline mx-1" />
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
