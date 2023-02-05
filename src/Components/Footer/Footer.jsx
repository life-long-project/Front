import React from "react";
import moment from "moment";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="text-center p-3">
          &#169; {moment().year()} Copyright: Long Life
        </div>
      </footer>
    </>
  );
}
