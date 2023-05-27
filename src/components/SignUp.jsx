import React from "react";
import Header from "./Header";
import Button from "@mui/material/Button";

function SignUp() {
  return (
    <div>
      <Header />
      <form action="">
        <div className="sign-up">
          <h2> SIGN UP </h2>
          <div className="sign-up-input-details">
            <p>Username :</p>
            <input placeholder="username" />
            <p>Password :</p>
            <input placeholder="password" />
            <p>Re-enter Password :</p>
            <input placeholder="confirm password" />
          </div>
          <Button variant="contained">Sign Up</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
