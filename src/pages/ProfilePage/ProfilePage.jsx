import React, { useState } from "react";
import profile from "./profile.jpg";
import { BiCategoryAlt } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

export default function ProfilePage() {
  return (
    <>
      <div className="row bg-white rounded shadow p-4 mb-4">
        <div className="img col-3">
          <input
            type="image"
            className="w-100 mb-3 rounded"
            src={profile}
            alt="Profile Image"
          />
        </div>

        <div className="col-6">
          <div className="main-details">
            <h2 className="mb-3">Abdelwahab Mohamed</h2>
            <p className="mb-3">
              <span>
                <i class="fa-solid fa-location-dot text-muted mb-3"></i>
              </span>{" "}
              Tanta, Egypt
            </p>
            <p className="mb-3">Age : 25</p>
            <p className="text-primary fw-bold mb-3">
              <span className="text-muted h5">
                <BiCategoryAlt />
              </span>{" "}
              Front End Dev.
            </p>
            <p className="text-muted">
              Profile Rate :{" "}
              <span className="h6 text-primary fw-bold">8.9</span>
            </p>
          </div>
        </div>
        <div className="hire-follow col-3 align-between">
          <div className="follow mb-3">
            <button className="btn btn-primary d-block mb-3">Follow</button>
            <button className="btn btn-danger d-block mb-3">Un Follow</button>
          </div>
          <div className="hire">
            <p className="btn btn-outline-primary">
              <i class="fa-regular fa-message"></i> Message Him
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-white rounded shadow p-4 mb-4">
        <div className="col-6">
          <h3 className="mb-3 fw-bold" >User Skills</h3>
          <div className="skills-section w-75">
            <div className="skillBar mb-3">
              <p className="mb-0">HTML</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  95%
                </div>
              </div>
            </div>
            <div className="skillBar mb-3">
              <p className="mb-0">HTML</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  95%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <h3 className="fw-bold">Last Jobs</h3>

        </div>

        <div className="row mt-5">
          <h3 className="fw-bold">Customer's Riviews</h3>
        </div>
      </div>
    </>
  );
}
