import React from "react";
import Header from "./Header";
import Button from "@mui/material/Button";

function Login() {
  return (
    <div>
      <Header />
      <form action="">
        <div className="login">
          <h2> LOGIN </h2>
          <div className="inputDetails">
            <p>Username :</p>
            <input placeholder="username" />
            <p>Password :</p>
            <input placeholder="password" />
          </div>
          <Button variant="contained">login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
