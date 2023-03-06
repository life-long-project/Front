import "./JobCard.css";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function JobCard({ job }) {
  return (
    <div className="box">
      <Link to={`/details/${job._id}`}>
        <div className="box-content">
          <div className="box-top">
            <input type="image" src={job.job_img_url} alt="publisher image" />
          </div>

          <div className="box-text">
            <h4>{job.job_name.substring(0, 13)}</h4>
            <p>
              {" "}
              {moment.utc(job.createdAt).local().startOf("seconds").fromNow()}
            </p>
            <p>{job.job_description.substring(0, 100) + "..."}</p>
            <h6>${job.salary}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
