import React from "react";
import { useUserContext } from "../context/UserContext";

const DashboardPage = () => {
  const { user, logoutUser } = useUserContext();
  //debugger
  return (


    <div>
      <h1>Dashboard </h1>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <button className="btn btn-primary" onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default DashboardPage;
