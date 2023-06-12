import React from "react";
import SignUpForm from "../../Signup/Sign-up-form.component";
import SignInForm from "../../SignIn/Sign-In-form.component";
import './authentication.scss'
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
