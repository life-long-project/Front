import { Img } from "@chakra-ui/react";
import React from "react";
import "./SupportChat.css";

export default function SupportChat() {
  return (
    <>
      <div className="collapse mt-3" id="collapseExample">
        <div className="card card-body-support-content mb-0" id="chat4">
          <div
            className="card-body card-body-content"
            data-mdb-perfect-scrollbar="true"
          >
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="card-footer bg-white text-muted d-flex justify-content-start align-items-center p-3 mt-0">
            <Img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
              alt="avatar 3"
              style={{ width: "40px", height: "100%" }}
            />
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput3"
              placeholder="Type message"
            />
            <a className="ms-3 link-info" href="#!">
              <i className="fas fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>

      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>Collapsible Chat App</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </button>
    </>
  );
}
