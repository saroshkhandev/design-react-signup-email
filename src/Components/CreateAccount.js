import React, { useState } from "react";
import "./CreateAccount.css";

function CreateAccount() {
  const [isRevealPwdOne, setIsRevealPwdOne] = useState(false);
  const [isRevealPwdTwo, setIsRevealPwdTwo] = useState(false);

  const revealTogglerOne = () => {
    setIsRevealPwdOne((prevState) => !prevState);
  };

  const revealTogglerTwo = () => {
    setIsRevealPwdTwo((prevState) => !prevState);
  };

  return (
    <div className="create_account">
      <div className="heading">Create an Account</div>
      <form className="create_account_form">
        <input
          type="text"
          className="mobile_field user_input"
          placeholder="Enter Mobile"
        />
        <input
          type="text"
          className="email_field user_input"
          placeholder="Enter Email"
        />
        <div className="password-container">
          <input
            type={isRevealPwdOne ? "text" : "password"}
            className="password_field user_input"
            placeholder="Enter Password"
          />
          <i
            onClick={revealTogglerOne}
            className={
              isRevealPwdOne
                ? "fas fa-eye-slash password-icon"
                : "fa fa-eye password-icon"
            }
          />
        </div>
        <div className="password-container">
          <input
            type={isRevealPwdTwo ? "text" : "password"}
            className="password2_field user_input"
            placeholder="Confirm Password"
          />
          <i
            onClick={revealTogglerTwo}
            className={
              isRevealPwdTwo
                ? "fas fa-eye-slash password-icon"
                : "fa fa-eye password-icon"
            }
          ></i>
        </div>

        <div className="confirmation_box">
          <input type="checkbox" className="confirmation user_input" />
          <div className="declaration">
            I hearby confirm that I am above 18 years old.
          </div>
        </div>
        <button className="verify_otp">Verify OTP</button>
      </form>
      <div className="terms_conditions">
        <a href="/" className="tnc_text">
          By creating this account, you agree to our{" "}
          <b className="highlight_condition">Privacy Policy</b> and{" "}
          <b className="highlight_condition">Terms of Use</b>
        </a>
      </div>
    </div>
  );
}

export default CreateAccount;
