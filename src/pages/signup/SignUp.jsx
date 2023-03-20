import "./Signup.css";

import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

export default function SignUp() {
  const handleNext = () => {
    setStepper((pre) => pre + 1);
  };
  const handleBack = () => {
    setStepper((pre) => pre - 1);
  };
  const [stepper, setStepper] = useState(1);
  return (
    <div className="sign-container">
      <p>Sign up </p>
      {stepper === 1 && <Form1 handleNext={handleNext} />}
      {stepper === 2 && (
        <Form2 handleNext={handleNext} handleBack={handleBack} />
      )}
      {stepper === 3 && <Form3 handleBack={handleBack} />}
    </div>
  );
}
