import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAxiosGet } from "../../hooks/useAxiosGet";
import Loading from "../../Components/loadingPage/Loading";
import moment from "moment";
import "./JobDetails.css";

export default function JobDetails() {
  let { id } = useParams();
  const {
    data: jobDetails,
    isPending,
    error,
  } = useAxiosGet(`https://back-ph2h.onrender.com/jobs/${id}`);

  return (
    <>
      {error && <div className="error">{error}</div>}
      {isPending && <Loading />}
      {jobDetails && (
        <div className="row">
          <div className="col-md-8">
            <div className="row bg-white mb-3 p-4">
              <div className="col-10">
                <h2 className="card-title details-card-title mb-2">
                  {jobDetails.job_name}
                </h2>
                <p className="tex-muted job-type my-2">{jobDetails.job_type}</p>
                <p className="card-text mb-2">
                  <span className="job-second-line text-primary">
                    {jobDetails.publisher}
                  </span>{" "}
                  -{" "}
                  <span className="text-muted">
                    {jobDetails.job_location_id}
                  </span>
                </p>
                <p className="card-job-time mb-2 text-muted">
                  Posted{" "}
                  {moment
                    .utc(jobDetails.createdAt)
                    .local()
                    .startOf("seconds")
                    .fromNow()}
                </p>
              </div>
              <div className="col-2 position-relative">
                <input
                  type="image"
                  className="card-image w-100"
                  src={jobDetails.job_img_url}
                  alt="publisher image"
                />
              </div>
              <hr className="mb-3" />
              <button className="btn btn-primary text-capitalize mb-2 w-auto">
                apply for this job
              </button>
            </div>
            <div className="row bg-white mb-3 p-4">
              <div className="col-md-8 bg-white">
                <h3 className="text-capitalize fw-bold mb-3">
                  job description
                </h3>
                <p className="card-text">{jobDetails.job_description}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ps-4">
            <div className="row bg-white mb-3 p-4">
              <h3 className="text-capitalize fw-bold mb-3">hire now?</h3>
              <p className="text-muted mb-2">
                Sign up for an employer account and post your job
              </p>
              <Link
                className="btn btn-outline-primary text-capitalize mb-2"
                to="/createJob"
              >
                {" "}
                start hiring !
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
