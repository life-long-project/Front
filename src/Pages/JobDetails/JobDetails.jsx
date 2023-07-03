import React from "react";
import "./JobDetails.css";
import { HiShare } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { CgWorkAlt } from "react-icons/cg";
import { TbSquareDot } from "react-icons/tb";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import moment from "moment";

export default function JobDetails() {
  const { id } = useParams();
  const {
    data: job,
    isPending,
    error,
  } = useAxiosGet(`https://back-ph2h.onrender.com/jobs/${id}`);
  console.log(job);
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          {isPending && <LoadingPage />}
          {job && (
            <>
              <div className="col-lg-8">
                <div className="jobDescriptionHeader jobDescriptionSection mb-5">
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
                      <h1 className="jobDescriptionHeaderTitle mb-2">
                        {job[0].job_name}
                      </h1>
                      <p className="jobDescriptionHeaderTypeAndApply mb-3">
                        <span className="jobDescriptionHeaderType text-capitalize">
                          {job[0].job_type}-{" "}
                        </span>
                        <span className="jobDescriptionHeaderApply">
                          {job[0].offers.length} Apply
                        </span>
                      </p>
                    </div>
                    <div className="col-lg-4 px-5">
                      <div className="jobDescriptionHeaderBtnSection">
                        <div className="jobDescriptionShareBtn me-3">
                          <HiShare />
                        </div>
                        <div className="jobDescriptionBookmarkBtn me-3">
                          <BsBookmark />
                        </div>
                        <div className="jobDescriptionApplyBtn me-3">
                          <span>Apply</span>
                        </div>
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
                          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
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
                                  15.000
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
                            {job[0].job_skills
                              .map((skill, key) => (
                                <span
                                  className="JobcardSkillsBadge me-2"
                                  key={key}
                                >
                                  {skill}
                                </span>
                              ))
                              .slice(0, 2)}
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <p>two!</p>
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
                      <h5 className="text-center">{job[0].user.full_name}</h5>
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
                      <p className="text-center text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, id.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="jobDescriptionSection mb-5">
                  <div className="sidebarwedgit p-3 pt-0">
                    <div className="sidebarwedgitName mb-4">Related Jobs</div>
                    <div className="sidebarJobTitle d-flex">
                      <TbSquareDot className="me-5 mt-1 fw-bold" />
                      <h5 className="mb-0">job title</h5>
                    </div>
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
