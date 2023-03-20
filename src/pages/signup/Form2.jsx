import React from "react";

export default function Form2({ handleNext, handleBack }) {
  return (
    <div>
      <p>iam form 2</p>
      <button onClick={handleNext} className="btn btn-info">
        next
      </button>
      <button onClick={handleBack} className="btn btn-secondary">
        back
      </button>
    </div>
  );
}
