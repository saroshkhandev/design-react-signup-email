import React from "react";
import HeadingContainer from "./HeadingContainer";
import "./Signup.css";
import SignupCard from "./SignupCard";

function Signup() {
  return (
    <div className="signup-base">
      <HeadingContainer />
      <SignupCard />
    </div>
  );
}

export default Signup;
