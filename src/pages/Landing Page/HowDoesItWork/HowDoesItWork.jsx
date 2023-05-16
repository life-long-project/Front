import React from "react";
import "./HowDoesItWork.css";
import { HiOutlineDownload } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { RiUserFollowLine } from "react-icons/ri";

export default function HowDoesItWork() {
  return (
    <>
      <section className="HowDoesItWork">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-4">
              <h2 className="HowDoesItWorkMainText mb-0 ms-auto mt-2">
                how does it work?
              </h2>
            </div>
            <div className="col-lg-2">
              <div className="HowDoesItWorkIconPart mt-4">
                <HiOutlineDownload className="HowDoesItWorkIcon m-auto mb-3" />
                <p className="HowDoesItWorkIconPartText text-center w-50 m-auto">
                  download the app
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="HowDoesItWorkIconPart mt-4">
                <IoLocationSharp className="HowDoesItWorkIcon m-auto mb-3" />
                <p className="HowDoesItWorkIconPartText text-center w-50 m-auto">
                  share your location
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="HowDoesItWorkIconPart mt-4">
                <BsPerson className="HowDoesItWorkIcon m-auto mb-3" />
                <p className="HowDoesItWorkIconPartText text-center w-50 m-auto">
                  post a job
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="HowDoesItWorkIconPart mt-4">
                <RiUserFollowLine className="HowDoesItWorkIcon m-auto mb-3" />
                <p className="HowDoesItWorkIconPartText text-center m-auto">
                  get a match
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
