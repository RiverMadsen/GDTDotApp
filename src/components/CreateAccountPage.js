import Link from "next/link";
import { useState } from "react";

function CreateAccountPage({handleReLogin}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form", { email, firstName, password, confirmPassword });
    if(password !== confirmPassword){
      alert("Passwords don't match.")
    }
  }
  function handleShowLogin() {
    handleReLogin()
  }
  return (
    <>
      <h3>Create a New Account</h3>
      <form onSubmit={handleSubmit} className="container mt-5">
        <div className="form-group">
          <label htmlFor="firstNameInput">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email:</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput">Password:</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPasswordInput">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPasswordInput"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
        <div className="form-group">
          <Link href="/" className="walki-link mt-10" passHref>
            <div onClick={handleShowLogin}>Login</div>
          </Link>
        </div>
      </form>
    </>
  );
}
export default CreateAccountPage;

{
  /* <div className="form-group">
<label htmlFor="displayNameInput">Display Name:</label>
<input
  type="text"
  className="form-control"
  id="displayNameInput"
  value={displayName}
  onChange={(event) => setDisplayName(event.target.value)}
  required
/>
</div> */
}
