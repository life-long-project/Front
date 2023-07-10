import React from "react";
import "./JobCard.css";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { format } from "timeago.js";
import { Avatar, Img, WrapItem } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// import useAuthContext from "../../Hooks/useAuthContext";

export default function JobCard({ job }) {
  // const { user } = useAuthContext();
  // console.log(job);
  const navigate = useNavigate();
  return (
    <>
      {/* New Job Card Start */}
      <div class="job-card">
        <div class="job-card__content">
          <div class="job-card__content-top">
            <div class="job-card_img">
              {job.user.profile_url === null ? (
                <WrapItem>
                  <Avatar size="xl" name={job.user.full_name} />
                </WrapItem>
              ) : (
                <Img src={job.user.profile_url} alt="User Logo" />
              )}
            </div>
            <div class="job-card_info">
              <Link to={`/profile/${job.user._id}`} class="job-card_company">
                <h5 class="mb-1 d-inline-block">{job.user.full_name}</h5>
              </Link>
              <p class="text-muted mb-0 text-capitalize">
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
              {job.job_skills
                .map((skill, key) => (
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
      {/* <div className="jobCard">
        <div className="JobcardHeader mb-0">
          <div className="row">
            <div className="col-5">
              <div className="jobHeaderImage mb-1">
                {job.user.profile_url === null ? (
                  <WrapItem>
                    <Avatar size="xl" name={job.user.full_name} />
                  </WrapItem>
                ) : (
                  <input
                    type="image"
                    className="jobHeaderImg "
                    alt="Logo Image"
                    src={job.user.profile_url}
                  />
                )}
              </div>
            </div>
            <div className="col-7">
              <div className="jobCardPrice h-100 m-auto d-flex flex-column align-items-start justify-content-center">
                <p className="mb-2">
                  {job.salary} LE / {job.job_type === "fulltime" ? "Mo" : "Hr"}
                </p>
                <p className="JobcardTypeBadge mb-2 text-capitalize">
                  {job.job_type === "fulltime" ? "Full Time" : "Part Time"}
                </p>
              </div>
            </div>

            <div className="JobcardBodyTitle text-black fw-bold mb-1">
              <h2 className="text-capitalize">{job.job_name}</h2>
              <p className="jobTimeFrom">{format(job.createdAt)}</p>
            </div>
          </div>
        </div>
        <div className="JobcardBody mb-2">
          <div className="publisherLocation">
            <span className="JobcardBodyPublisher pe-1">Publisher</span> -
            <span className="JobcardBodyLocation text-muted ps-1">
              {job.job_location}
            </span>
          </div>

          <div className="JobcardBodyDescription text-muted mb-3">
            {job.job_description.substring(0, 35) + "..."}
          </div>
          <div className="JobcardBodySkills mb-3">
            {job.job_skills
              .map((skill, key) => (
                <span className="JobcardSkillsBadge me-2" key={key}>
                  {skill}
                </span>
              ))
              .slice(0, 1)}
          </div>
        </div>
        <div className="JobcardFooter mt-4">
          <div className="row">
            <div className="col-12">
              <div className="JobcardFooterButton">
                <button
                  className="w-100 btn footerApplyBtn"
                  onClick={() => navigate(`/job-details/${job._id}`)}
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
