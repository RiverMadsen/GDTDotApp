// import SettingsContext from "./SyncContext";

// export function LoginPage({ settings, handleSettingsChange }) {
//   return (
//     <div>
//       <form>
//         <label for="email">EMail</label>
//         <input id="email" type="email"></input>
//         <label for="password">password</label>
//         <input id="password" type="password"></input>
//       </form>
//     </div>
//   );
// }
// export default LoginPage;

import Link from "next/link";
import { useState } from "react";

function LoginPage({ settings, handleSettingsChange }) {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form", { email, displayName, password });
  }

  return (
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
      <br />
      <div className="form-group">
        <Link href="#" className="walki-link mt-10">
          Forgot Password
        </Link>
      </div>
      <div className="form-group">
        <Link href="#" className="walki-link mt-10">
          Create an Account
        </Link>
      </div>
    </form>
  );
}
export default LoginPage;


{/* <div className="form-group">
<label htmlFor="displayNameInput">Display Name:</label>
<input
  type="text"
  className="form-control"
  id="displayNameInput"
  value={displayName}
  onChange={(event) => setDisplayName(event.target.value)}
  required
/>
</div> */}
