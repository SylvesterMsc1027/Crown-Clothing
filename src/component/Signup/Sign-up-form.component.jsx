import React, { useState } from "react";
import FormInput from "../Form-Input/FormInput";
import Button from "../Button/Button";

import "./sign-up.style.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
} from "../../utils/firebase/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const signUp = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Cannot create User, email already in use");
      }
      console.log("User creation enociter error", error);
    }
  };
  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have an Account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={signUp}>
          <FormInput
            label="Display Name"
            value={displayName}
            onChange={handleChange}
            name="displayName"
            type="text"
            required
          />
          <FormInput
            label="Email"
            value={email}
            onChange={handleChange}
            name="email"
            type="email"
            required
          />
          <FormInput
            label="Password"
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
            required
          />
          <FormInput
            label="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
