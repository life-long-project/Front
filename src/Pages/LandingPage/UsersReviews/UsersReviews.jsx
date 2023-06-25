import React from "react";
import "./UsersReviews.css";

export default function UsersReviews() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="UsersReviewsHeader py-5">users reviews</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="UsersReviewsTxt mb-3">
              <p className="">
                "I love Snapjobs! It's a game-changer for anyone on the job
                hunt. The app provides a streamlined approach to job searching,
                with personalized recommendations and a clean, user-friendly
                interface. I've already applied to multiple job listings through
                the app and have received interviews as a result. Highly
                recommend!"
              </p>
            </div>
          </div>
          <div className="row pb-5 mb-2">
            <div className="col-lg-7">
              <div className="UsersReviewsTxt mb-3">
                <p className="">
                  "Snapjobs is a great tool for job seekers. The app provides a
                  wide range of job listings that are relevant to my field of
                  expertise. The best part is that it's free to use! I also
                  appreciate the ability to save job listings and apply directly
                  through the app."{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="UsersReviewsBigTxt mb-3">
                <p>Snapjobs is a must-have app for job seekers </p>
              </div>
              <div className="w-100 text-end">
              <input
                  type="image"
                  alt="Users Reviews !"
                  src="/images/Users Reviews.png"
                  className="text-end"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
