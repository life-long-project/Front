import React from "react";
import "./Profile.css";
import { Link, useParams } from "react-router-dom";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import {
  AiFillDollarCircle,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { RiShieldStarLine } from "react-icons/ri";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import moment from "moment";
import Loading from "../LoadingPage/LoadingPage";
import JobList from "../Jobs/JobList/JobList";
import { BsFillTelephoneFill } from "react-icons/bs";
import ReportProfile from "./Components/ReportProfile";
import useAuthContext from "../../Hooks/useAuthContext";

export default function Profile() {
  const { user } = useAuthContext();
  console.log(user);
  const {
    isOpen: isOpenReport,
    onOpen: onOpenReport,
    onClose: onCloseReport,
  } = useDisclosure();

  const { id } = useParams();
  const { data, isPending, error } = useAxiosGet(
    `https://back-ph2h.onrender.com/user/profile/${id}`
  );

  console.log(data);
  return (
    <>
      {/* Report Job pop up  */}
      <ReportProfile
        isOpen={isOpenReport}
        onOpen={onOpenReport}
        onClose={onCloseReport}
        reportedId={data && data.user._id}
      />
      {isPending && <Loading />}
      {data && (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile mt-5">
                <div className="row">
                  <div className="col-md-4">
                    <div className="profile-sidebar">
                      <div className="profile-img">
                        <img src={data.user.profile_url} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="profile-user-info">
                      <h2>{data.user.full_name}</h2>
                      <p>{data.user.past_experience}</p>
                      <div className="rating-Profile">
                        <Rating
                          className="ratingProfile"
                          emptySymbol={<BsStarFill className="emptySymbol" />}
                          fullSymbol={<BsStarFill className="fullSymbol" />}
                          fractions={2}
                          readonly
                          initialRating={data.user.rating}
                        />{" "}
                        <span className="ms-2">
                          {data.user.rating} ({data.rates.length} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      {user && user._id === data.user._id && (
                        <div className="jobDescriptionShareBtn me-3">
                          <button className="">
                            <i class="fa-regular fa-pen-to-square"></i>
                          </button>
                        </div>
                      )}
                      {user && !(user._id === data.user._id) && (
                        <div className="jobDescriptionBookmarkBtn me-3">
                          <button
                            className="btn text-secondary text-end"
                            onClick={onOpenReport}
                          >
                            Report <i class="ms-2 fa-regular fa-flag"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="profile-user-personal-details">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>Total Earning : </strong>
                          <AiFillDollarCircle className="d-inline ai-dollar-icon" />{" "}
                          <span className="text-muted">
                            {data.user.total_earning} EGP
                          </span>
                        </li>
                        <li className="list-group-item">
                          <strong>Jobs Completed : </strong>
                          <span className="text-muted">
                            <span>{data.accepted_jobs.length}</span> Jobs
                          </span>
                        </li>
                        <li className="list-group-item">
                          <strong>Jobs Published : </strong>
                          <span className="text-muted">
                            <span>{data.user_jobs.length}</span> Jobs
                          </span>
                        </li>
                        <li className="list-group-item">
                          <strong>Location : </strong>
                          <span className="text-muted">
                            EGYPT , {data.user.city}
                          </span>
                        </li>
                        <li className="list-group-item">
                          <strong className="text-muted me-2 pb-2">
                            <RiShieldStarLine className="d-inline" />{" "}
                          </strong>
                          <span className="text-muted">
                            Joined {moment().format("MMM Do YY")}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="profile-bottom-section mt-3">
                <Tabs>
                  <TabList>
                    <Tab>Reviews</Tab>
                    <Tab>Finished Jobs</Tab>
                    <Tab>Published Jobs</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                      <JobList jobs={data.accepted_jobs} />
                    </TabPanel>
                    <TabPanel>
                      <div className="row">
                        <JobList jobs={data.user_jobs} />
                      </div>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="profile-bottom-section mt-3">
                <div className="bottom-section-rhs-title">
                  <h4>Verifications</h4>
                </div>
                <div className="bottom-section-rhs-content mt-4">
                  <div className="row mb-2">
                    <div className="col-1">
                      <div className="verfiryIcon">
                        <MdEmail className="d-inline" />
                      </div>
                    </div>
                    <div className="col-5">
                      <p>Email</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <p className="text-muted">Verified</p>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-1">
                      <div className="verfiryIcon">
                        <BsFillTelephoneFill className="d-inline" />
                      </div>
                    </div>
                    <div className="col-5">
                      <p>Phone Number</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <p className="text-muted">Verified</p>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-1">
                      <div className="verfiryIcon">
                        <FaUserAlt className="d-inline" />
                      </div>
                    </div>
                    <div className="col-5">
                      <p>Identity Verified</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <p className="text-muted">Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
