import React from "react";

export default function Form1({ handleNext }) {
  return (
    <div>
      <p>iam form 1</p>
      <button onClick={handleNext} className="btn btn-info">
        next
      </button>
    </div>
  );
}
