import Link from "next/link";
import { initializeApp } from "firebase/app";
import { useState, memo } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc, addDoc } from "firebase/firestore";
import { useContext, useRef, useEffect } from "react";
import SettingsContext from "./SettingsContext";

function CreateAccountPage({ handleReLogin }) {
  console.log("CreateAccountPage rendered");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { settings, updateSettings } = useContext(SettingsContext);

  //TODO - Note that this code needs to be commented out during development for now because the value return very oddly indicates that we are on 4G
  //This needs to get tested on an actual phone to make sure isConnectedToWifi return true when we actually are.
  // useEffect( () => {
  //   if( isConnectedToWifi() === false){
  //     alert ('Sorry - You can only create an account when connected to WiFi')
  //     handleReLogin();
  //   }
  // },[])

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form", {
      email,
      firstName,
      password,
      confirmPassword,
    });
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    //First get the details that we will persist in the database
    const emailHash = await hashString(email.toLowerCase());
    const emailPasswordHash = await hashString(email.toLowerCase() + password);
    console.log(`emailhash = ${emailHash}`);
    console.log(`emailpasshash = ${emailPasswordHash}`);
    //Next, run a query to see if the email is already known in the users collection
    const firebaseApp = initializeApp({
      apiKey: "AIzaSyDjJrhWRQaslMDoSIuBvth8RprLbg7s3FE",
      authDomain: "walkipedia-81dd3.firebaseapp.com",
      projectId: "walkipedia-81dd3",
      storageBucket: "walkipedia-81dd3.appspot.com",
      messagingSenderId: "514716350994",
      appId: "1:514716350994:web:78160c2127d8fcbc1736cb",
      measurementId: "G-5XD3MH2YZP",
    });

    const db = getFirestore();

    const colRef = collection(db, "Users");

    getDocs(colRef)
      .then((snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        const sameUser = users.filter(
          (user) => user.email === email.toLowerCase()
        );
        if (sameUser.length > 0) {
          alert(
            "Sorry - that email is already in use.  Did you forget your password?"
          )
        }
        else{
          const data = {
            emailPasswordHash: emailPasswordHash,
            emailHash: emailHash,
            email: email.toLowerCase(),
            emailVerified: false,
            firstName: firstName,
            membershipVerified: false
          }
          addDataToCollection(data, db).then( (value) => {
            alert("SUCCESSS!  Please check your EMail for a verification code.")
          }).catch( (reason) =>{
            console.log("Something unexpected happened saving the email.")
          })
        }
      })
      .catch((err) => {
        console.log(`ERROR! ${err.message}`);
      });
  }

  async function addDataToCollection(data, db) {
    const collectionRef = collection(db, "Users");
    try {
      const docRef = await addDoc(collectionRef, data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    return crypto.subtle.digest("SHA-256", data).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      return hashHex;
    });
  }

  function isConnectedToWifi() {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      console.log(connection);
      return connection.type === "wifi";
    } else {
      // Network information API not supported
      return false;
    }
  }
  function handleReturnToLogin() {
    handleReLogin();
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
