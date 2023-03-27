import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css"
import {FaFacebookF, FaSnapchatGhost} from "react-icons/fa";
import {BsFillCaretRightFill} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

export default function Footer() {
  const footer = [
    {
      id: 1,
      title: "Company",
      menu: [
        {
          id: 1,
          link: "/about",
          subTitle: "About Us",
        },
        {
          id: 2,
          link: "/contact",
          subTitle: "Contact Us",
        },
        {
          id: 3,
          link: "/services",
          subTitle: "Services",
        },
        {
          id: 4,
          link: "/blog",
          subTitle: "Blog",
        },
        {
          id: 5,
          link: "/team",
          subTitle: "Team",
        },
        {
          id: 6,
          link: "/pricing",
          subTitle: "Pricing",
        },
      ],
    },
    {
      id: 2,
      title: "For Jobs",
      menu: [
        {
          id: 1,
          link: "/jobscategories",
          subTitle: "Browser Categories",
        },
        {
          id: 2,
          link: "/joblist",
          subTitle: "Browser Jobs",
        },
        {
          id: 3,
          link: "/jobdetails",
          subTitle: "Job Details",
        },
        {
          id: 4,
          link: "/bookmarkjobs",
          subTitle: "Bookmark Jobs",
        },
      ],
    },
    {
      id: 3,
      title: "For Candidates",
      menu: [
        {
          id: 1,
          link: "/candidatelist",
          subTitle: "Candidate List",
        },
        {
          id: 2,
          link: "/candidategrid",
          subTitle: "Candidate Grid",
        },
        {
          id: 3,
          link: "/candidatedetails",
          subTitle: "Candidate Details",
        },
      ],
    },
    {
      id: 4,
      title: "Support",
      menu: [
        {
          id: 1,
          link: "/contact",
          subTitle: "Help Center",
        },
        {
          id: 2,
          link: "/faqs",
          subTitle: "FAQ'S",
        },
        {
          id: 3,
          link: "/privacyandpolicy",
          subTitle: "Privacy Policy",
        },
      ],
    },
  ];

  const footerIcons = [
    {
      id: 1,
      socialIcon: <FaFacebookF/>,
    },
    {
      id: 2,
      socialIcon: <BsTwitter/>,
    },
    {
      id: 3,
      socialIcon: <AiFillInstagram/>,
    },
    {
      id: 4,
      socialIcon: <FaSnapchatGhost/>,
    },
  ];
  return (
    <>
      <section className="bg-footer">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                <h4 className="text-white mb-4">SHAGHAL</h4>
                <p className="text-white-50">
                  It is a long established fact that a reader will be of a page
                  reader will be of at its layout.
                </p>
                <p className="text-white mt-3">Follow Us on:</p>
                <ul className="footer-social-menu list-inline mb-0">
                  {footerIcons.map((footerIcondetails, key) => (
                    <li className="list-inline-item" key={key}>
                      <Link to="#" className="d-flex justify-content-center align-items-center">
                        <i>{footerIcondetails.socialIcon}</i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            {footer.map((footerdetails, key) => (
              <Col lg={2} xs={6} key={key}>
                <div className="footer-item mt-4 mt-lg-0">
                  <p className="fs-16 text-white mb-4">{footerdetails.title}</p>
                  {(footerdetails.menu || []).map((menuInner, key) => (
                    <ul className="list-unstyled footer-list mb-0" key={key}>
                      <li>
                        <Link to={menuInner.link} className="d-flex align-items-center">
                          <i className="pe-2"><BsFillCaretRightFill/></i>
                          <span>{menuInner.subTitle}</span>
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="text-white-50 text-center mb-0">
                {new Date().getFullYear()} &copy; SHAGHAL - Job Finder Page
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
