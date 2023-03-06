import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeJobsContext } from "../../Context/HomeJobsContext";
import { useAxiosGet } from "../../hooks/useAxiosGet";
import Loading from "../../Components/loadingPage/Loading";
import "./Home.css";
import moment from "moment";

export default function Home() {
  //let { jobs, searchedJobs } = useContext(HomeJobsContext);
  const { data, isPending, error } = useAxiosGet(
    "https://back-ph2h.onrender.com/jobss"
  );

  function handleIsActiveFilter(value) {
    //searchedJobs(value);
  }

  return (
    <>
      {/* Filters */}
      <div className="row">
        <div className="col-md-4">
          <div className="row bg-white p-4">
            <h5 className="ps-0 mb-3 fw-bold">Filters</h5>
            <hr className="my-2 text-muted" />
            <Link
              className="ps-0 mb-2 text-decoration-none text-black dropdown-toggle"
              data-bs-toggle="collapse"
              to="#activeFilterCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="activeFilterCollapse"
            >
              Active Or Not
            </Link>
            <div className="collapse" id="activeFilterCollapse">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="is_active"
                  value={true}
                  onChange={(e) => handleIsActiveFilter(e.target.value)}
                  id="active"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  active
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="is_active"
                  value={false}
                  onChange={(e) => handleIsActiveFilter(e.target.value)}
                  id="notActive"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  not active
                </label>
              </div>
            </div>
            <hr className="my-2 text-muted" />
          </div>
        </div>

        {/* Jobs */}
        <div className="col-md-8">
          {/* Start Search Bar  */}
          <div className="form-floating mb-3">
            <input
              type="search"
              className="form-control"
              // onChange={(e) => searchedJobs(e.target.value)}
              id="floatingInput"
              placeholder="Search For Jobs"
            />
            <label className="text-muted" htmlFor="floatingInput">
              Search For Jobs
            </label>
          </div>
          {/* End Search Bar  */}
          {isPending && <Loading />}
          {error && <div className="error">{error}</div>}
          {data &&
            data.jobs.map((job, index) => (
              <div className="col-12" key={index}>
                <div className="card bg-white mb-3">
                  <div className="card-body px-5 py-3">
                    <div className="row mb-0">
                      <div className="col-10">
                        <Link
                          className="text-decoration-none"
                          target="_blank"
                          to={`/details/${job._id}`}
                        >
                          <h5 className="card-title fw-bold">{job.job_name}</h5>
                        </Link>
                        <p className="card-text mb-0">
                          <span className="job-second-line">
                            {job.publisher}
                          </span>{" "}
                          -{" "}
                          <span className="text-muted">
                            {job.job_location_id}
                          </span>
                        </p>
                        <p className="text-success card-job-time mb-2">
                          {moment
                            .utc(job.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </div>
                      <div className="col-2 position-relative">
                        <input
                          type="image"
                          className="card-image w-100"
                          src={job.job_img_url}
                          alt="publisher image"
                        />
                      </div>
                    </div>
                    <p className="tex-muted job-type my-1">{job.job_type}</p>
                    <p className="card-text">
                      {job.job_description.substring(0, 100) + "..."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
