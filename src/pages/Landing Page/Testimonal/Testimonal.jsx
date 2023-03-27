import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "./Testimonal.css"

//swiper css

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Images import
import MailChimp from "../../../assests/images/logo/mailchimp.svg";
import WordPress from "../../../assests/images/logo/wordpress.svg";
import Instagram from "../../../assests/images/logo/Instagram.svg";

export default function Testimonal() {
  const testimonal = [
    {
      id: 1,
      image: MailChimp,
      content:
        "Very well thought out and articulate communication.Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless.",
      name: "Jeffrey Montgomery",
      occupation: "Product Manager",
    },
    {
      id: 2,
      image: WordPress,
      content:
        "Very well thought out and articulate communication.Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless.",
      name: "Rebecca Swartz",
      occupation: "Creative Designer",
    },
    {
      id: 3,
      image: Instagram,
      content:
        "Very well thought out and articulate communication.Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless.",
      name: "Charles Dickens",
      occupation: "Store Assistant",
    },
  ];
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h3 className="title mb-3">Happy Candidates</h3>
                <p className="text-muted">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Swiper
                className="pb-5"
                loop={true}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                <div className="swiper-wrapper">
                  {(testimonal || []).map((testimonalDetails, key) => (
                    <SwiperSlide key={key}>
                      <Card className="testi-box">
                        <CardBody>
                          <div className="mb-4">
                            <CardImg
                              src={testimonalDetails.image}
                              className="TestimonalImg m-auto"
                              alt=""
                            />
                          </div>
                          <p className="testi-content lead text-muted mb-4">
                            {testimonalDetails.content}
                          </p>
                          <h5 className="mb-0">{testimonalDetails.name}</h5>
                          <p className="text-muted mb-0">
                            {testimonalDetails.occupation}
                          </p>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
