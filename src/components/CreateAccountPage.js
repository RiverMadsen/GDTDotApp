import Link from "next/link";
import { useState, memo } from "react";
import { useEffect } from "react";
function CreateAccountPage({handleReLogin}) {
  console.log('CreateAccountPage rendered')
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect( () => {
    if( isConnectedToWifi() === false){
      alert ('Sorry - You can only create an account when connected to WiFi')
      handleReLogin();
    }
  },[])

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form", { email, firstName, password, confirmPassword });
    if(password !== confirmPassword){
      alert("Passwords don't match.")
      setPassword('')
      setConfirmPassword('')
      return
    }
    const userPasswordHash = await hashString(email.toLowerCase() + password);
    console.log(`emailpasshash = ${userPasswordHash}`)
  }
  async function  hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    return crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      return hashHex;
    });
  }

  function isConnectedToWifi() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      console.log(connection)
      return connection.type === 'wifi';
    } else {
      // Network information API not supported
      return false;
    }
  }
  function handleReturnToLogin() {
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
            <div onClick={handleReturnToLogin}>Return to Login</div>
          </Link>
        </div>
      </form>
    </>
  );
}
export default memo(CreateAccountPage);
