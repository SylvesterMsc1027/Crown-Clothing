import React, { useState } from "react";
import FormInput from "../Form-Input/FormInput";
import Button from "../Button/Button";

import "./sign-In.style.scss";

import {
  signInWithGooglePopup,

  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  console.log(formFields);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signAuthUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("You Enter A Wrong Password");
          break;
        case "auth/user-not-found":
          alert("Invalid User");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Already have an Account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={signIn}>
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
          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type='button' onClick={signInWithGoogle} buttontype="google">
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
