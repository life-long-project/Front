import React from "react";
import "./JobCard.css";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { format } from "timeago.js";
import { Avatar, Img, WrapItem } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// import useAuthContext from "../../Hooks/useAuthContext";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  return (
    <>
      {/* New Job Card Start */}
      <div class="job-card">
        <div class="job-card__content">
          <div class="job-card__content-top">
            <div class="job-card_img">
              {job?.user?.profile_url === null ? (
                <WrapItem>
                  <Avatar size="xl" name={job.user?.full_name} />
                </WrapItem>
              ) : (
                <Img src={job?.user?.profile_url} alt="User Logo" />
              )}
            </div>
            <div class="job-card_info">
              <Link to={`/profile/${job.user?._id}`} class="job-card_company">
                <h5 class="mb-1 d-inline-block">{job.user?.full_name}</h5>
              </Link>
              <p class="mb-0 text-capitalize text-muted">
                {job.job_location}, EGYPT
              </p>
            </div>
          </div>
          <div class="job-card_content-mid">
            <Link to={`/job-details/${job._id}`}>
              <h4 className="text-capitalize">{job.job_name}</h4>
            </Link>
            <p class="mb-0">
              {job.salary} E£ / {job.job_type === "fulltime" ? "Mo" : "Hr"}
            </p>
            <div class="job-card_job-type">
              <span class="job-label job-type me-1">
                {job.job_type === "fulltime" ? "Full Time" : "Part Time"}
              </span>
              •{" "}
              {job.job_skills?.map((skill, key) => (
                  <span className="job-label" key={key}>
                    {skill}
                  </span>
                ))
                .slice(0, 1)}
            </div>
          </div>
        </div>
        <div class="job-card__footer">
          <p class="mb-1 mt-1 text-muted">Posted: {format(job.createdAt)}</p>
          <button
            className="btn footerApplyBtn"
            onClick={() => navigate(`/job-details/${job._id}`)}
          >
            See Details
          </button>
        </div>
      </div>

      {/* New Job Card End */}
    </>
  );
}
