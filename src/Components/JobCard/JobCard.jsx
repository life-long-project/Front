import React from "react";
import "./JobCard.css";
import { BsBookmarkHeart } from "react-icons/bs";

export default function JobCard() {
  return (
    <>
      <div className="jobCard">
        <div className="JobcardHeader mb-0">
          <div className="row">
            <div className="col-4">
              <div className="jobHeaderImage mb-1">
                <input
                  type="image"
                  className="jobHeaderImg "
                  alt="Logo Image"
                  src="https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?w=2000"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="jobCardPrice h-100 m-auto d-flex flex-column align-items-start justify-content-center">
                <p className="mb-2">150 / hr</p>
                <p className="JobcardTypeBadge mb-2">Full Time</p>
              </div>
            </div>
            <div className="col-2 pt-3">
              <div className="jobCardBookmark">
                <BsBookmarkHeart />
              </div>
            </div>

            <div className="JobcardBodyTitle text-black fw-bold mb-1">
              <h2>Job Title</h2>
              <p className="jobTimeFrom">5 min ago</p>
            </div>
          </div>
        </div>
        <div className="JobcardBody mb-2">
          <div className="publisherLocation">
            <span className="JobcardBodyPublisher pe-1">Publisher</span> -
            <span className="JobcardBodyLocation text-muted ps-1">
              Location
            </span>
          </div>

          <div className="JobcardBodyDescription text-muted mb-3">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="JobcardBodySkills mb-3">
            <span className="JobcardSkillsBadge me-2">Skill 1</span>
            <span className="JobcardSkillsBadge me-2">Skill 2</span>
          </div>
        </div>
        <div className="JobcardFooter">
          <div className="row">
            <div className="col-6">
              <div className="JobcardFooterButton">
                <button className="w-100 btn footerApplyBtn">Apply</button>
              </div>
            </div>
            <div className="col-6">
              <div className="JobcardFooterButton">
                <button className="w-100 btn footerMsgBtn">Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
