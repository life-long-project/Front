import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { CgWorkAlt } from "react-icons/cg";
import { TbSquareDot } from "react-icons/tb";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import moment from "moment";
import Rating from "react-rating";
import ApplyNewOffer from "../../Components/ApplyNewOffer/ApplyNewOffer";
import { useGetByAction } from "../../Hooks/useGetByAction";
import Register from "../../Components/RegisterPopUp/Register";
import useAuthContext from "../../Hooks/useAuthContext";
import { CiStickyNote } from "react-icons/ci";
import { IoCheckmarkDoneOutline, IoPricetagsOutline } from "react-icons/io5";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import EditJobDetails from "../../Components/EditJobDetails/EditJobDetails";
import axios from "axios";
import FinshJob from "./components/FinshJob";
import TakeRevenue from "./components/TakeRevenue";
import ReportJob from "./components/ReportJob";
export default function JobDetails() {
  const [itIsMyJob, setItIsMyJob] = useState(false);
  const [iApplied, setIApplied] = useState(false);
  const [iAccepted, setIAccepted] = useState(false);
  const [acceptedOffer, setAcceptedOffer] = useState(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenReport,
    onOpen: onOpenReport,
    onClose: onCloseReport,
  } = useDisclosure();
  const {
    isOpen: isOpenRevenue,
    onOpen: onOpenRevenue,
    onClose: onCloseRevenue,
  } = useDisclosure();
  const {
    isOpen: isOpenFinish,
    onOpen: onOpenFinish,
    onClose: onCloseFinish,
  } = useDisclosure();
  const {
    isOpen: isOpenAccept,
    onOpen: onOpenAccept,
    onClose: onCloseAccept,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const {
    isOpen: isOpenAuth,
    onOpen: onOpenAuth,
    onClose: onCloseAuth,
  } = useDisclosure();
  const { id } = useParams();
  const {
    getData: getJob,
    setData: setJob,
    data: job,
    jobIsPending,
    error: jobError,
  } = useGetByAction();

  const handleDeleteJob = async () => {
    try {
      const res = await axios.delete(
        `https://back-ph2h.onrender.com/jobs/${
          job[0]._id
        }/?auth_token=${localStorage.getItem("token")}`
      );
      console.log(res);
      navigate("/jobs");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAcceptOffer = async (offer) => {
    try {
      const res = await axios.post(
        `https://back-ph2h.onrender.com/offer/accept/${
          offer._id
        }/?auth_token=${localStorage.getItem("token")}`
      );
      console.log(res);
      getJob(`https://back-ph2h.onrender.com/jobs/${id}`);
      // navigate("/jobs")
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isPending, error } = useAxiosGet(
    `https://back-ph2h.onrender.com/jobs/related`
  );
  const { user } = useAuthContext();
  const [jobUrl, setJobUrl] = useState(
    `https://back-ph2h.onrender.com/jobs/${id}`
  );

  // get job when id is changing
  useEffect(() => {
    getJob(`https://back-ph2h.onrender.com/jobs/${id}`);
  }, [id]);

  // checking if this job is own to current user
  useEffect(() => {
    if (user && job && user._id === job[0].posted_by_id) setItIsMyJob(true);
    else {
      setItIsMyJob(false);
    }
  }, [user, job]);
  // checking if current user applied to this job
  useEffect(() => {
    if (
      user &&
      job &&
      user._id ===
        job[0].offers?.find((element) => element.applicant_id == user._id)
          ?.applicant_id
    ) {
      setIApplied(true);

      // user._id === job[0].offers.find(element => element.applicant_id == user._id)
    } else {
      setIApplied(false);
    }
  }, [user, job]);
  // checking if current user accepted to this job
  useEffect(() => {
    if (user && job && user._id === job[0].accepted_user_id) {
      setIAccepted(true);

      // user._id === job[0].offers.find(element => element.applicant_id == user._id)
    } else {
      setIAccepted(false);
    }
  }, [user, job]);

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          {!job && jobIsPending && <LoadingPage />}
          {job && (
            <>
              {/* Report Job pop up  */}
              <ReportJob
                isOpen={isOpenReport}
                onOpen={onOpenReport}
                onClose={onCloseReport}
                job={job[0]._id}
              />
              {/* TakeRevenue pop up  */}
              <TakeRevenue
                isOpen={isOpenRevenue}
                onOpen={onOpenRevenue}
                onClose={onCloseRevenue}
                job={job[0]._id}
              />
              {/* delete pop up  */}
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpenDelete}
                onClose={onCloseDelete}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Delete This Job</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    Are You Sure You Want To Delete This Job ?!!
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={handleDeleteJob} colorScheme="red" mr={3}>
                      Delete
                    </Button>
                    <Button onClick={onCloseDelete}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              {/* accept pop up  */}
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpenAccept}
                onClose={onCloseAccept}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Accept This Offer!</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    Are You Sure You Want To Accept This Offer ?!!
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      onClick={() => {
                        handleAcceptOffer(acceptedOffer);
                        onCloseAccept();
                      }}
                      colorScheme="green"
                      mr={3}
                    >
                      Accept
                    </Button>
                    <Button onClick={onCloseAccept}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <FinshJob
                isOpen={isOpenFinish}
                onOpen={onOpenFinish}
                onClose={onCloseFinish}
                job={job[0]._id}
              />
              <EditJobDetails
                isOpen={isOpenEdit}
                onOpen={onOpenEdit}
                onClose={onCloseEdit}
                job={job}
              />
              <Register
                isOpen={isOpenAuth}
                onOpen={onOpenAuth}
                onClose={onCloseAuth}
              />
              <ApplyNewOffer
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                job={job[0]}
                getJob={getJob}
                id={id}
              />
              <div className="col-lg-8">
                <div className="jobDescriptionHeader jobDescriptionSection mb-5">
                  {user && iApplied && !iAccepted && (
                    <div className="px-3">
                      <div className="alert alert-warning" role="alert">
                        <i className="me-2 fa-solid fa-spinner fa-spin"></i>
                        Your Apply Request Is Pending{" "}
                      </div>
                    </div>
                  )}
                  {user && iAccepted && (
                    <div className="px-3">
                      <div className="alert alert-success" role="alert">
                        <IoCheckmarkDoneOutline className="d-inline me-2" />
                        Your Apply Request Is Accepted Now You Can{" "}
                        <Link className=" text-decoration-underline">
                          Chat Publisher
                        </Link>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-lg-8 px-5">
                      <p className="jobDescriptionHeaderCreatedOn mb-2">
                        {job[0].createdAt === job[0].updatedAt
                          ? `Created on ${moment(job[0].createdAt).format(
                              "LLLL"
                            )}`
                          : `  
                      Created on ${moment(job[0].createdAt).format("LLLL")} -
                        Last updated on
                        ${moment(job[0].updatedAt)
                          .subtract(1, "days")
                          .calendar()}`}
                      </p>
                      <h1 className="jobDescriptionHeaderTitle mb-2 text-capitalize">
                        {job[0].job_name}
                      </h1>
                      <p className="jobDescriptionHeaderTypeAndApply mb-3 d-flex justify-content-between align-items-center">
                        <span>
                          {" "}
                          <span className="jobDescriptionHeaderType text-capitalize">
                            {job[0].job_type === "full-time"
                              ? "Full Time"
                              : "Part Time"}{" "}
                            -{" "}
                          </span>
                          <span className="jobDescriptionHeaderApply">
                            {job[0].offers.length} Apply
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="col-lg-4 px-5 d-flex flex-column justify-content-around">
                      <div className="jobDescriptionHeaderBtnSection">
                        {itIsMyJob &&
                          job[0].is_active &&
                          !job[0].is_finished && (
                            <>
                              <div
                                className="jobDescriptionShareBtn me-3 btn"
                                onClick={onOpenEdit}
                              >
                                <AiOutlineEdit />
                              </div>
                              <div
                                className="jobDescriptionBookmarkBtn me-3 btn"
                                onClick={onOpenDelete}
                              >
                                <AiOutlineDelete />
                              </div>
                            </>
                          )}

                        {user && iAccepted && job[0].is_finished && (
                          <div className="jobDescriptionApplyBtn me-3">
                            {" "}
                            <button onClick={onOpenRevenue}>
                              Take Revenue
                            </button>
                          </div>
                        )}

                        {user && !itIsMyJob && !iApplied && (
                          <div className="jobDescriptionApplyBtn me-3">
                            <button onClick={onOpen}>Apply</button>
                          </div>
                        )}
                        {!user && (
                          <div className="jobDescriptionApplyBtn me-3">
                            {" "}
                            <button onClick={onOpenAuth}>Apply</button>
                          </div>
                        )}
                        {itIsMyJob &&
                          !job[0].is_active &&
                          !job[0].is_finished && (
                            <>
                              <div className="jobDescriptionApplyBtn me-3">
                                {" "}
                                <button onClick={onOpenFinish}>Finish</button>
                              </div>
                              <div className="jobDescriptionApplyBtn me-3">
                                {" "}
                                <button>Message</button>
                              </div>
                            </>
                          )}
                      </div>
                      {user && !itIsMyJob && !iApplied && (
                        <div className="text-end px-1">
                          <button
                            className="me-auto btn text-secondary text-end"
                            onClick={onOpenReport}
                          >
                            Report <i class="ms-2 fa-regular fa-flag"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <input
                          type="image"
                          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Java_Developer_Job_Description.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <input
                          type="image"
                          src="https://themesdesign.in/jobcy/layout/assets/images/job-detail.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <input
                          type="image"
                          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className="jobDescriptionHeaderFooter px-5 py-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="jobDescriptionHeaderFooterItem">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="jobDescriptionFooterIcon Icon1">
                                <FaCoins />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="jobDescriptionFooterText">
                                <p className="jobDescriptionHeaderFooterItemTitle my-2">
                                  {job[0].salary} EGP
                                </p>
                                <p className="jobDescriptionHeaderFooterItemSubTitle">
                                  Salary
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="jobDescriptionHeaderFooterItem">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="jobDescriptionFooterIcon Icon2">
                                <ImLocation />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="jobDescriptionFooterText">
                                <p className="jobDescriptionHeaderFooterItemTitle my-2 text-capitalize">
                                  {job[0].job_location}
                                </p>
                                <p className="jobDescriptionHeaderFooterItemSubTitle">
                                  Location
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="jobDescriptionHeaderFooterItem">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="jobDescriptionFooterIcon Icon3">
                                <CgWorkAlt />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="jobDescriptionFooterText">
                                <p className="jobDescriptionHeaderFooterItemTitle my-2">
                                  {job[0].required_experience}
                                </p>
                                <p className="jobDescriptionHeaderFooterItemSubTitle">
                                  Experience
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="jobDescriptionDetails jobDescriptionSection mb-5 px-5">
                  <Tabs>
                    <TabList>
                      <Tab>Details</Tab>
                      <Tab>Offers</Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <p className="jobDescriptionDetailsText">
                          {job[0].job_description}
                        </p>
                        <div className="jobDescriptionSkills pt-3">
                          <div className="JobcardBodySkills">
                            <span>Job Skills : </span>
                            {job[0].job_skills.map((skill, key) => (
                              <span className="job-label mx-1" key={key}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        {job[0].offers.map((o, i) => (
                          <div class="row offer-card" key={i}>
                            <div class="row mb-2">
                              <div className="col-1 d-flex justify-content-center align-items-center">
                                <Avatar
                                  size="lg"
                                  className="navBarAvatar"
                                  name={o.applicant_name}
                                ></Avatar>
                              </div>
                              <div className="col-10">
                                <p className="mb-1">{o.applicant_name}</p>
                                <Rating
                                  className="ratingProfile"
                                  emptySymbol={
                                    <BsStarFill className="emptySymbol" />
                                  }
                                  fullSymbol={
                                    <BsStarFill className="fullSymbol" />
                                  }
                                  fractions={2}
                                  readonly
                                  initialRating={o.owner.rating}
                                />
                              </div>
                              <div className="col-1 d-flex justify-content-center align-items-center">
                                {itIsMyJob &&
                                  job[0].is_active &&
                                  !job[0].is_finished && (
                                    <span
                                      onClick={() => {
                                        setAcceptedOffer(o);
                                        onOpenAccept();
                                      }}
                                      className="mx-1 bg-success text-white fs-5 rounded px-2 py-1 btn"
                                    >
                                      <AiFillLike className="d-inline mb-1" />
                                    </span>
                                  )}
                              </div>
                            </div>
                            <div className="row ps-4 justify-content-between align-items-center">
                              <span className="d-flex align-items-center">
                                {o.message ? (
                                  <span className="px-1">
                                    {" "}
                                    <CiStickyNote className="d-inline mx-1" />{" "}
                                    {o.message} •{" "}
                                  </span>
                                ) : (
                                  ""
                                )}

                                <span className="px-1 mb-0 pb-0">
                                  {" "}
                                  <IoPricetagsOutline className="d-inline mx-1" />{" "}
                                  {o.price}
                                  {" EGP "}
                                </span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="jobDescriptionSection mb-5">
                  <div className="sidebarwedgit p-3 pt-0">
                    <div className="sidebarwedgitImage mb-3">
                      <input
                        type="image"
                        className="w-100 rounded-3"
                        src={job[0].user.profile_url}
                        alt="User Image"
                      />
                    </div>
                    <div className="sidebarwedgitTitle mb-2">
                      <Link to={`/profile/${job[0].user._id}`}>
                        <h5 className="text-center">{job[0].user.full_name}</h5>
                      </Link>
                    </div>
                    <div className="sidebarwedgitLocation mb-2">
                      <p className="text-center">
                        <span>
                          {" "}
                          <ImLocation className="d-inline" />
                        </span>{" "}
                        {job[0].user.city}
                      </p>
                    </div>
                    <div className="sidebarwedgitBio mb-2">
                      <p className="text-center ratingP mb-0 d-flex align-items-center justify-content-center">
                        <div className="rating-Profile mb-2 text-center">
                          <Rating
                            className="ratingProfile"
                            emptySymbol={<BsStarFill className="emptySymbol" />}
                            fullSymbol={<BsStarFill className="fullSymbol" />}
                            fractions={2}
                            initialRating={job[0].user.rating}
                            readonly
                          />{" "}
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="jobDescriptionSection mb-5">
                  <div className="sidebarwedgit p-3 pt-0">
                    <div className="sidebarwedgitName mb-4">Related Jobs</div>
                    {isPending && <LoadingPage />}
                    {data &&
                      data.map((relatedJob, key) => (
                        <div
                          key={key}
                          className="sidebarJobTitle mb-2 d-flex"
                          onClick={() => {
                            navigate(`/job-details/${relatedJob._id}/`, {
                              replace: false,
                            });
                          }}
                        >
                          <i className="me-4 mt-1 ms-2 text-primary fa-solid fa-briefcase fa-shake"></i>
                          <h5 className="mb-0 text-capitalize">
                            {relatedJob.job_name}
                          </h5>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
