import React, { useRef } from "react";
import { useUserContext } from "../context/UserContext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <p>
        Walkipedia may use your email to confirm your
        membership with the Great Divide Trail Association or to ask follow-up questions if you propose edits to the guide. For that reason, {" "}
        <span className="walki--emphasis">
          please use the email associated with your Great Divide Trail
          Association membership.
        </span>
        
      </p>
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
