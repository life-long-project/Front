import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import "./Cta.css";

export default function Cta() {
  return (
    <>
      <section className="section w-100 bg-light">
          <Container className="">
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center">
                  <h2 className="mb-4 ctaTitle">
                    Browse Our{" "}
                    <span className="text-warning fw-bold">5,000+</span> Latest
                    Jobs
                  </h2>
                  <p className="text-muted">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link className="ctaBtn btn text-white d-flex align-items-center m-auto hvr-bob">
                      <span className="me-2">Started Now{" "}</span>
                      <i className="align-middle ms-1 fw-bold"><HiOutlineRocketLaunch/></i>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </>
  );
}
