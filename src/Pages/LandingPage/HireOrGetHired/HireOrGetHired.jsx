import React from "react";
import "./HireOrGetHired.css";

export default function HireOrGetHired() {
  return (
    <>
      <section className="HireOrGetHired">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="w-100 text-center py-5">
                <input
                  type="image"
                  alt="Hire Or Get Hired !"
                  src="/images/HireOrGetHired.png"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="HireOrGetHiredDetails py-5">
                <h2 className="HireOrGetHiredDetailsMainText mt-5 mb-3">Hire or get hired</h2>
                <p className="HireOrGetHiredDetailsSecondText mb-3">With easy payment methods you can hire anyone you choose to finish a job for you </p>
                <input type="button" value="Learn More" className="SecondBtnOutline" />
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
}
