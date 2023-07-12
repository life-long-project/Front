import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { HiShare } from "react-icons/hi";
import { BsBookmark, BsStar, BsStarFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { CgWorkAlt } from "react-icons/cg";
import { TbSquareDot } from "react-icons/tb";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import {
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
import { IoPricetagOutline } from "react-icons/io";
import { IoCheckmarkDoneOutline, IoPricetagsOutline } from "react-icons/io5";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import EditJobDetails from "../../Components/EditJobDetails/EditJobDetails";
import axios from "axios";
export default function JobDetails() {
  const [itIsMyJob, setItIsMyJob] = useState(false);
  const [iApplied, setIApplied] = useState(false);
  const [acceptedOffer,setAcceptedOffer] =useState(null)
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenAccept, onOpen:onOpenAccept, onClose:onCloseAccept } = useDisclosure();
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

  const handleDeleteJob = async()=>{
    console.log("deleted");
    try {
      const res = await axios.delete(`https://back-ph2h.onrender.com/jobs/${job[0]._id}/?auth_token=${localStorage.getItem(
        "token"
      )}`)
      console.log(res);
      navigate("/jobs")
    } catch (error) {
      console.log(error);
    }
  }
  const handleAcceptOffer = async(offer)=>{
    console.log("Accepted");
    try {
      const res = await axios.post(`https://back-ph2h.onrender.com/offer/accept/${offer._id}/?auth_token=${localStorage.getItem(
        "token"
      )}`)
      console.log(res);
      // navigate("/jobs")
    } catch (error) {
      console.log(error);
    }
  }

  const { data, isPending, error } = useAxiosGet(
    `https://back-ph2h.onrender.com/jobs/related`
  );
  const { user } = useAuthContext();
  const [jobUrl, setJobUrl] = useState(
    `https://back-ph2h.onrender.com/jobs/${id}`
  );
  console.log(user);
  console.log(acceptedOffer);

  const {
    getData: getJob,
    setData: setJob,
    data: job,
    jobIsPending,
    error: jobError,
  } = useGetByAction();

  // get job when id is changing
  useEffect(() => {
    getJob(`https://back-ph2h.onrender.com/jobs/${id}`);
  }, [id]);

  // checking if this job is own to current user
  useEffect(() => {
    if (user && job && user._id === job[0].posted_by_id) setItIsMyJob(true);
    else {
      setItIsMyJob(false);
      // if(job[0].offers.length>0)
      // {
      //   // job[0].offers.array.forEach(offer => {
      //   //   if(offer.)
      //   // });
      //   console.log("iam offer");
      // }
    }
  }, [user, job]);

  // checking

  console.log(job);
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          {!job && jobIsPending && <LoadingPage />}
          {job && (
            <>
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
                  <ModalBody pb={6}>Are You Sure You Want To Delete This Job ?!!</ModalBody>

                  <ModalFooter>
                    <Button onClick={handleDeleteJob} colorScheme="red" mr={3}>
                      Delete
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
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
                  <ModalBody pb={6}>Are You Sure You Want To Accept This Offer ?!!</ModalBody>

                  <ModalFooter>
                    <Button onClick={()=>{
                      handleAcceptOffer(acceptedOffer)
                      onCloseAccept()
                    }} colorScheme="green" mr={3}>
                      Accept
                    </Button>
                    <Button >Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
                  {/* <div className="px-3">
                    <div className="alert alert-success" role="alert">
                      <IoCheckmarkDoneOutline className="d-inline me-2" />
                      Your Apply Request Is Accepted Now You Can{" "}
                      <Link className=" text-decoration-underline">
                        Chat Publisher
                      </Link>
                    </div>
                  </div> */}
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
                      <p className="jobDescriptionHeaderTypeAndApply mb-3">
                        <span className="jobDescriptionHeaderType text-capitalize">
                          {job[0].job_type === "full-time"
                            ? "Full Time"
                            : "Part Time"}{" "}
                          -{" "}
                        </span>
                        <span className="jobDescriptionHeaderApply">
                          {job[0].offers.length} Apply
                        </span>
                      </p>
                    </div>
                    <div className="col-lg-4 px-5">
                      <div className="jobDescriptionHeaderBtnSection">
                        {itIsMyJob && (
                          <>
                            <div
                              className="jobDescriptionShareBtn me-3"
                              onClick={onOpenEdit}
                            >
                              <AiOutlineEdit />
                            </div>
                            <div
                              className="jobDescriptionBookmarkBtn me-3"
                              onClick={onOpenDelete}
                            >
                              <AiOutlineDelete />
                            </div>
                          </>
                        )}

                          {user && !itIsMyJob && (
                            <div className="jobDescriptionApplyBtn me-3">
                            <button onClick={onOpen}>Apply</button>
                            </div>
                          )}
                          {!user &&<div className="jobDescriptionApplyBtn me-3"> <button onClick={onOpenAuth}>Apply</button></div>}
                          {itIsMyJob && !job[0].is_active && !job[0].is_finished &&<div className="jobDescriptionApplyBtn me-3"> <button>Finish</button></div>}
                     
                      </div>
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
                                  {job[0].salary}
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
                                <p className="jobDescriptionHeaderFooterItemTitle my-2">
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
                          <div
                            className="offer-card d-flex justify-content-between"
                            key={i}
                          >
                            <span>
                              <span className="px-1">
                                {" "}
                                <CiStickyNote className="d-inline mx-1" />{" "}
                                {o.message}
                              </span>{" "}
                              •{" "}
                              <span className="px-1">
                                {" "}
                                <IoPricetagsOutline className="d-inline mx-1" />{" "}
                                {o.price}
                                {" E£ "}
                              </span>
                            </span>
                            <span>
                              {itIsMyJob && (
                                <>
                                  <span onClick={()=>{
                                        setAcceptedOffer(o)
                                        onOpenAccept()
                                  }
                                  } 
                                  className="mx-1 bg-success text-white fs-5 rounded px-2 py-1">
                                    <AiFillLike className="d-inline mb-1" />
                                  </span>
                                  {/* <span className="mx-1 bg-danger text-white fs-5 rounded px-2 py-1">
                                    <AiFillDislike className="d-inline mb-1" />
                                  </span> */}
                                </>
                              )}
                            </span>
                            {/* <span className="px-1 jobDescriptionBookmarkBtn"><BiSolidDislike/></span> */}
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
                        <Rating
                          emptySymbol={<BsStar className="text-muted" />}
                          fullSymbol={<BsStarFill className="text-warning" />}
                          fractions={2}
                          // readonly
                          initialRating={job[0].user.total_rating}
                        />
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
                          <TbSquareDot className="me-4 mt-1 fw-bold" />
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
