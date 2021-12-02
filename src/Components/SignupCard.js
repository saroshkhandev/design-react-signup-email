import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import "./SignupCard.css";
import Testimonials from "./Testimonials";
import VerifyEmail from "./VerifyEmail";

function SignupCard() {
  const [isFirst, setIsFirst] = useState(true);
  const toggler = () => {
    setIsFirst((prevState) => !prevState);
  };
  return (
    <>
      <div className="signup_card">
        {isFirst && <CreateAccount />}
        {!isFirst && <VerifyEmail />}
        <Testimonials />
      </div>
      <div className="template_switcher">
        <button onClick={toggler} className="toggler">
          Switch Template
        </button>
      </div>
    </>
  );
}

export default SignupCard;
