import Link from "next/link";
import { useState } from "react";
import CreateAccountPage from "./CreateAccountPage";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordReset, updateShowPasswordReset] = useState(false);
  const [showCreateAccount, updateShowCreateAccount] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form", { email, displayName, password });
  }

  function handleCreateAccount() {
    console.log("Create new");
    updateShowCreateAccount(true);
  }
  function handleForgotPassword() {
    console.log("Create new");
  }
  //Fired when a uesr on the Create Login page has clicked the Login link to navigate back to this page
  function handleReLogin() {
    updateShowCreateAccount(false);
  }
  return (
    <>
      <p>
        Walkipedia uses your email if you propose edits to to the app and we need to get in touch.  It will not be shared with other indviduals.
        Walkipedia may use your email to confirm your membership
        with partner trail associations. For that reason, please use the email
        associated with your Great Divide Trail Association membershihp.
      </p>
      {!showCreateAccount && (
        <form onSubmit={handleSubmit} className="container mt-5">
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>


          <div className="form-group">
            <Link href="/" className="walki-link mt-10" passHref>
              <div onClick={handleCreateAccount}>Forgot Password</div>
            </Link>
          </div>

          <div className="form-group">
            <Link href="/" className="walki-link mt-10" passHref>
              <div onClick={handleCreateAccount}>Create Account</div>
            </Link>
          </div>
        </form>
      )}
      {showCreateAccount && <CreateAccountPage handleReLogin={handleReLogin}></CreateAccountPage>}
    </>
  );
}
export default LoginPage;

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
