//import React from "react";
import SettingsContext from "./SettingsContext";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

export function DownloadsPage({ settings, handleSettingsChange }) {
  console.log("render Downloads")
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyDjJrhWRQaslMDoSIuBvth8RprLbg7s3FE",
    authDomain: "walkipedia-81dd3.firebaseapp.com",
    projectId: "walkipedia-81dd3",
    storageBucket: "walkipedia-81dd3.appspot.com",
    messagingSenderId: "514716350994",
    appId: "1:514716350994:web:78160c2127d8fcbc1736cb",
    measurementId: "G-5XD3MH2YZP",
  });


  return <div><h2>Downloads Page</h2><p>Please check the console for data retrieval. Figure out how to authenticate users to prevent deletion and also how to upload data and images.</p></div>;
}
export default DownloadsPage;
