import React from "react";
import { useUserContext } from "../context/UserContext";

const DashboardPage = () => {
  const { user, logoutUser } = useUserContext();
  let pipePos = -1;
  let dispName = ""
  let membershipValidated  = false
  if(user.displayName){
    pipePos = user.displayName.indexOf("|");
    dispName = pipePos > -1 ?  user.displayName.substring(0,pipePos)  : user.displayName
    membershipValidated  = pipePos > -1 ?  user.displayName.substring(pipePos+1)  : false
  }
  
  return (
    <div>
      <p>You are currently logged in:</p>
      <h3>Name : {dispName}</h3>
      <h3>GDT Member? : {membershipValidated}</h3>
      <h3>Email : {user.email}</h3>
      <button className="btn btn-primary" onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default DashboardPage;
