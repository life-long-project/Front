import React from "react";
import { Img } from "@chakra-ui/react";
import { useAxiosGet } from "../../../Hooks/useAxiosGet";
import { Link } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

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

  return (
    <>
      <div className="row">
        {/* Left side columns */}
        <div className="col-lg-8">
          <div className="row">
            {/* Sales Card */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    Jobs <span>| All Days</span>
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart"><MdWorkOutline/></i>
                    </div>
                    <div className="ps-3">
                      <h6>{allJobs && allJobs.total}</h6>
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
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    User <span>| All Days</span>
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar"><AiOutlineUser /></i>
                    </div>
                    <div className="ps-3">
                      <h6>{allUsers && allUsers.data.profiles.length}</h6>
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
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    Customers <span>| This Year</span>
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people"><MdWorkOutline/></i>
                    </div>
                    <div className="ps-3">
                      <h6>1244</h6>
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
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

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
                      {allUsers &&
                        allUsers.data.profiles.slice(0, 10).map((user, key) => (
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
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

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
                      {allJobs &&
                        allJobs.jobs.slice(0, 10).map((job, key) => (
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
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Today
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Month
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Year
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">
                Recent Activity <span>| Today</span>
              </h5>

              <div className="activity">
                <div className="activity-item d-flex">
                  <div className="activite-label">32 min</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                  <div className="activity-content">
                    Quia quae rerum{" "}
                    <a href="#" className="fw-bold text-dark">
                      explicabo officiis
                    </a>{" "}
                    beatae
                  </div>
                </div>
                {/* End activity item*/}

                <div className="activity-item d-flex">
                  <div className="activite-label">56 min</div>
                  <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                  <div className="activity-content">
                    Voluptatem blanditiis blanditiis eveniet
                  </div>
                </div>
                {/* End activity item*/}

                <div className="activity-item d-flex">
                  <div className="activite-label">2 hrs</div>
                  <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                  <div className="activity-content">
                    Voluptates corrupti molestias voluptatem
                  </div>
                </div>
                {/* End activity item*/}

                <div className="activity-item d-flex">
                  <div className="activite-label">1 day</div>
                  <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                  <div className="activity-content">
                    Tempore autem saepe{" "}
                    <a href="#" className="fw-bold text-dark">
                      occaecati voluptatem
                    </a>{" "}
                    tempore
                  </div>
                </div>
                {/* End activity item*/}

                <div className="activity-item d-flex">
                  <div className="activite-label">2 days</div>
                  <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                  <div className="activity-content">
                    Est sit eum reiciendis exercitationem
                  </div>
                </div>
                {/* End activity item*/}

                <div className="activity-item d-flex">
                  <div className="activite-label">4 weeks</div>
                  <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                  <div className="activity-content">
                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                  </div>
                </div>
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
