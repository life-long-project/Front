import React, { useState } from "react";
import { Button } from "reactstrap";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);;
  return (
    <>
      <Button
        id="back-to-top"
        className="p-0 border-0"
        onClick={scrollTop}
        style={{ display: visible ? "block" : "none" }}
      >
        <i className="scrollTopBtn d-flex justify-content-center">
          {" "}
          <FaArrowUp />{" "}
        </i>
      </Button>
    </>
  );
}
