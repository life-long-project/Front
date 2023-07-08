import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiShieldStarLine } from "react-icons/ri";

export default function Profile() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="profile mt-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-sidebar">
                    <div className="profile-img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="profile-user-info">
                    <h2>John Doe</h2>
                    <p>Web Designer / UI.</p>
                    <div className="rating-Profile">
                      <Rating
                        className="ratingProfile"
                        emptySymbol={<BsStarFill className="emptySymbol" />}
                        fullSymbol={<BsStarFill className="fullSymbol" />}
                        fractions={2}
                        // readonly
                        // initialRating={job[0].user.total_rating}
                      />{" "}
                      <span className="ms-2">0.0 (0 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="profile-user-personal-details">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Total Earning : </strong>
                        <AiFillDollarCircle className="d-inline ai-dollar-icon" />{" "}
                        <span className="text-muted">250 LE</span>
                      </li>
                      <li className="list-group-item">
                        <strong>Jobs Completed : </strong>
                        <span className="text-muted">
                          <span>11</span> Jobs
                        </span>
                      </li>
                      <li className="list-group-item">
                        <strong>Jobs Published : </strong>
                        <span className="text-muted">
                          <span>21</span> Jobs
                        </span>
                      </li>
                      <li className="list-group-item">
                        <strong>Location : </strong>
                        <span className="text-muted">EGYPT , Gharbia</span>
                      </li>
                      <li className="list-group-item">
                        <strong className="text-muted me-2 pb-2"><RiShieldStarLine className="d-inline"/> </strong>
                        <span className="text-muted">
                          Joined August 18, 2017
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
