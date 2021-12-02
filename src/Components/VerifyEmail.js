import React from "react";
import "./VerifyEmail.css";

function VerifyEmail() {
  return (
    <div className="verify-email">
      <div className="backward_control">
        <svg
          width="15"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4267 8.57245H4.48531L9.67056 2.34444C9.91302 2.05272 10.0297 1.67664 9.99485 1.29892C9.96002 0.921206 9.77658 0.572793 9.48487 0.330331C9.19315 0.0878688 8.81707 -0.0287806 8.43935 0.00604446C8.06164 0.0408695 7.71322 0.224317 7.47076 0.516029L0.328542 9.08669C0.28049 9.15486 0.237521 9.22648 0.199982 9.30096C0.199982 9.37238 0.199982 9.41523 0.0999913 9.48665C0.0352449 9.65044 0.00134434 9.82478 0 10.0009C0.00134434 10.177 0.0352449 10.3513 0.0999913 10.5151C0.0999913 10.5866 0.0999909 10.6294 0.199982 10.7008C0.237521 10.7753 0.28049 10.8469 0.328542 10.9151L7.47076 19.4858C7.60506 19.647 7.77325 19.7767 7.96335 19.8656C8.15346 19.9544 8.36081 20.0003 8.57066 20C8.90442 20.0006 9.22787 19.8844 9.48487 19.6715C9.62951 19.5515 9.74907 19.4043 9.83671 19.2381C9.92435 19.0719 9.97834 18.89 9.99559 18.7029C10.0128 18.5158 9.99301 18.3272 9.93723 18.1478C9.88146 17.9683 9.79084 17.8017 9.67056 17.6574L4.48531 11.4293H21.4267C21.8055 11.4293 22.1688 11.2788 22.4367 11.011C22.7046 10.7431 22.8551 10.3797 22.8551 10.0009C22.8551 9.62205 22.7046 9.25872 22.4367 8.99083C22.1688 8.72295 21.8055 8.57245 21.4267 8.57245Z"
            fill="#444444"
          />
        </svg>
      </div>
      <div className="verify-email_heading">Verify your email</div>
      <div className="section_statement">
        A verification code has been sent to abc@gmail.com
      </div>
      <form className="verify_email_form">
        <label className="verification-code_label">Verification Code</label>
        <input
          type="text"
          className="verification-code_input"
          placeholder="6 digit verification code"
        />
        <div className="resend-offer">
          Didn't receive the code?
          <a href="/" className="resend-link">
            Resend
          </a>
        </div>
        <button className="verify_email">Verify Email</button>
      </form>
    </div>
  );
}

export default VerifyEmail;
