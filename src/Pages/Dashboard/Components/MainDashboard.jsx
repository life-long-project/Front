import React, { useEffect } from "react";
import { Img } from "@chakra-ui/react";
import { useAxiosGet } from "../../../Hooks/useAxiosGet";
import { Link } from "react-router-dom";
import { MdOutlineReportProblem, MdWorkOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useGetByAction } from "../../../Hooks/useGetByAction";
import moment from "moment/moment";
import { TbCircleDotFilled } from "react-icons/tb";

export default function MainDashboard() {
  const {
    data: allUsers,
    isPending,
    error,
  } = useAxiosGet("https://back-ph2h.onrender.com/profile/");

  const {
    data: allJobs,
    isPending: isPendingJobs,
    error: errorJobs,
  } = useAxiosGet("https://back-ph2h.onrender.com/jobs/");

  const {
    getData: getActivity,
    setData: setActivity,
    data,
    isPending: activityLoading,
    error: activityError,
  } = useGetByAction();

  useEffect(() => {
    getActivity(
      `https://back-ph2h.onrender.com/admin/?auth_token=${localStorage.getItem(
        "token"
      )}`
    );
  }, []);

  return (
    <>
      <div className="row">
        {/* Left side columns */}
        <div className="col-lg-8">
          <div className="row">
            {/* Sales Card */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Jobs <span>| All Days</span>
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart">
                        <MdWorkOutline />
                      </i>
                    </div>
                    <div className="ps-3">
                      <h6>{data && data.job_posts.length}</h6>
                      <span className="text-success small pt-1 fw-bold">
                        12%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        increase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sales Card */}

            {/* Revenue Card */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">
                <div className="card-body">
                  <h5 className="card-title">
                    User <span>| All Days</span>
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar">
                        <AiOutlineUser />
                      </i>
                    </div>
                    <div className="ps-3">
                      <h6>{data && data.users.length}</h6>
                      <span className="text-success small pt-1 fw-bold">
                        8%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        increase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Revenue Card */}

            {/* Customers Card */}
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Reported
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people">
                        <MdOutlineReportProblem />
                      </i>
                    </div>
                    <div className="ps-3">
                      <h6>{data && data.reported_users.length + data.reported_job_posts.length}</h6>
                      <span className="text-danger small pt-1 fw-bold">
                        12%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        decrease
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Customers Card */}

            {/* Recent Sales */}
            <div className="col-12">
              <div className="card recent-sales overflow-auto">
                <div className="card-body">
                  <h5 className="card-title">
                    Recent Users <span>| Today</span>
                  </h5>

                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.users.slice(0, 10).map((user, key) => (
                          <tr key={key}>
                            <td>{user.full_name}</td>
                            <td>
                              <a
                                href={`mailto:${user.email}`}
                                target="_blank"
                                className="text-primary"
                              >
                                {user.email}
                              </a>
                            </td>
                            <td>{user.phone}</td>
                            <td>
                              {user.is_verified ? (
                                <span className="badge bg-success px-2 py-2">
                                  Approved
                                </span>
                              ) : (
                                <span className="badge bg-danger px-2 py-2">
                                  Not Approved
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End Recent Sales */}

            {/* Top Selling */}
            <div className="col-12">
              <div className="card top-selling overflow-auto">
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Recent Jobs <span>| Today</span>
                  </h5>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Job Title</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Location</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Applied Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.job_posts.slice(0, 10).map((job, key) => (
                          <tr key={key}>
                            <td>
                              <Link
                                to={`/job-details/${job._id}`}
                                className="text-primary fw-bold"
                              >
                                {job.job_name}
                              </Link>
                            </td>
                            <td>{job.salary} E£</td>
                            <td className="text-capitalize">
                              {job.job_location}
                            </td>
                            <td>{job.user.full_name}</td>
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
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End Top Selling */}
          </div>
        </div>
        {/* End Left side columns */}

        {/* Right side columns */}
        <div className="col-lg-4">
          {/* Recent Activity */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Activity</h5>

              <div className="activity">
                {data &&
                  data.activity
                    .map((activity, key) => (
                      <div className="activity-item d-flex" key={key}>
                        <div className="activite-label me-1">
                          {moment(activity.createdAt).endOf("day").fromNow()}
                        </div>
                        <i className={`bi bi-circle-fill activity-badge ${activity.category ==="job" ? "text-success" : "text-danger"} align-self-start`}>
                          <TbCircleDotFilled className="d-inline" />
                        </i>
                        <div className="activity-content">
                          <span className="me-1 text-capitalize">
                            {activity.category}
                          </span>
                          <Link to="" className="fw-bold text-dark">
                            <span className="me-1 text-capitalize">
                              {activity.activity_message}
                            </span>
                          </Link>{" "}
                        </div>
                      </div>
                    ))
                    .slice(0, 30)}

                {/* End activity item*/}
              </div>
            </div>
          </div>
          {/* End Recent Activity */}
        </div>
        {/* End Right side columns */}
      </div>
    </>
  );
}
