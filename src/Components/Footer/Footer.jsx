import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import useAuthContext from "../../Hooks/useAuthContext";
export default function Footer() {
  const { user } = useAuthContext();
  return (
    <>
      {user?.is_admin ? (
        <>
          {" "}
          <footer id="footer" className="footer">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Snap Jobs</span>
              </strong>
              . All Rights Reserved
            </div>
          </footer>
        </>
      ) : (
        <>
          {" "}
          <footer className="text-center text-lg-start bg-black text-main-grey">
            {/* Section: Links  */}
            <section className="py-3">
              <div className="container text-center text-md-start mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content */}
                    <h6 className="text-uppercase fw-bold mb-4">
                      <input type="image" alt="Logo" src="/images/Logo.png" />
                    </h6>
                    <p className="text-capitalize mb-3">
                      Download the app and get subscribed to our newsteller for
                      early offers and copons{" "}
                    </p>
                    <div className="footerSubscribeForm mb-4">
                      <input
                        type="email"
                        className="footerSubscribeFormInput"
                        placeholder="Enter Email..."
                      />
                      <input
                        type="button"
                        className="footerSubscribeFormBtn"
                        value="Submit"
                      />
                    </div>
                    <div className="footerDownloadIcons">
                      <input
                        type="image"
                        className="me-3"
                        alt="Download App From Google Play"
                        src="/images/Google Play.png"
                      />
                      <input
                        type="image"
                        alt="Download App From App Store"
                        src="/images/App Store.png"
                      />
                    </div>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">
                      Why Choose Us?
                    </h6>
                    <p>
                      <Link href="#!" className="text-reset">
                        Scale
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Solutions
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Our Competition
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Channels
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Events
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Watch the Demo
                      </Link>
                    </p>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                    <p>
                      <Link href="#!" className="text-reset">
                        Leadership
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Careers
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Investor Relations
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Media Kit
                      </Link>
                    </p>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                    <p>
                      <Link href="#!" className="text-reset">
                        Community
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Events
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Help Center
                      </Link>
                    </p>
                    <p>
                      <Link href="#!" className="text-reset">
                        Partners
                      </Link>
                    </p>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
              </div>
            </section>
            {/* Section: Links  */}

            {/* Copyright */}
            <div
              className="text-center p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
            >
              © {new Date().getFullYear()} Copyright :
              <Link className="text-reset fw-bold" href="/">
                {" "}
                Snap Jobs
              </Link>
            </div>
            {/* Copyright */}
          </footer>
        </>
      )}
    </>
  );
}
