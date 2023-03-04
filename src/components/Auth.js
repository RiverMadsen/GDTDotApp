//This page toggles between sign-up and sign-in pages
import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  const newUser = <><span>New User? </span><span className='walki--link'> Tap here </span></>;
  const alreadyHave = <><span>Already Have an Account? </span><span className='walki--link'> Tap here </span></>;
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ?  newUser : alreadyHave}
      </p>
    </div>
  );
};

export default Auth;
