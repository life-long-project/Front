import React from "react";
import "./JobCard.css";
import {
  BsBookmarkCheck,
  BsBookmarkCheckFill,
} from "react-icons/bs";
import { format } from "timeago.js";
// import useAuthContext from "../../Hooks/useAuthContext";
import { Avatar, WrapItem } from "@chakra-ui/react";

export default function JobCard({ job }) {
  // const { user } = useAuthContext();
  return (
    <>
      <div className="jobCard shadow">
        {true && (
          <div className="jobCardBookmark">
            <BsBookmarkCheckFill />
          </div>
        )}
        {false && (
          <div className="jobCardBookmark">
            <BsBookmarkCheck />
          </div>
        )}
        <div className="JobcardHeader mb-0">
          <div className="row">
            <div className="col-4">
              <div className="jobHeaderImage mb-1">
                {job.job_img_url === null ? (
                  <WrapItem>
                    <Avatar
                      size="xl"
                      name={job.user.f_name + " " + job.user.lname}
                    />
                  </WrapItem>
                ) : (
                  <input
                    type="image"
                    className="jobHeaderImg "
                    alt="Logo Image"
                    src={job.job_img_url}
                  />
                )}
              </div>
            </div>
            <div className="col-8">
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
            {job.job_description.substring(0, 50) + "..."}
          </div>
          <div className="JobcardBodySkills mb-3">
            {job.job_skills
              .map((skill, key) => (
                <span className="JobcardSkillsBadge me-2" key={key}>
                  {skill}
                </span>
              ))
              .slice(0, 2)}
          </div>
        </div>
        <div className="JobcardFooter mt-4">
          <div className="row">
            <div className="col-12">
              <div className="JobcardFooterButton">
                <button className="w-100 btn footerApplyBtn">Apply</button>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div className="JobcardFooterButton">
                <Link to="/chat" state={"title"}>
                  <button className="w-100 btn footerMsgBtn">Message</button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
