import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserAuthenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  if (currentUser === null) {
    Swal.fire({
      icon: "error",
      title: "You must be logged in!!",
    });
    return <Navigate to="/main/signin" />;
  }

  return children;
};

export default UserAuthenticator;
