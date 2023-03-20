import React from "react";

export default function Form3({ handleBack }) {
  return (
    <div>
      <p>iam form 3</p>
      <button className="btn btn-info">Sign Up</button>
      <button onClick={handleBack} className="btn btn-secondary">
        back
      </button>
    </div>
  );
}
