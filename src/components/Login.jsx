import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import axios from "axios";

function Register() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    });
  }

  function sendNewUser(user) {
    user.preventDefault();
    axios.post("http://localhost:5000/user/login", userInfo)
      .then(response => {
        console.log(response.data);
      });
    console.log(userInfo);
    setUserInfo({
      email: "",
      password: ""
    });
  }
  return (
    <div>
      <form className="register-form" noValidate autoComplete="off">
        <TextField
          name="email"
          value={userInfo.email}
          required={true}
          type="email"
          // id="standard-basic"
          label="Email"
          fullWidth={true}
          onChange={handleChange}
        />
        <TextField
          name="password"
          value={userInfo.passowrd}
          required={true}
          type="password"
          // id="standard-basic"
          label="Password"
          fullWidth={true}
          onChange={handleChange}
        />
        <Button
          style={{
            backgroundColor: "#f5ba13",
            marginTop: 20,
            color: "white",
            width: "40%",
            marginLeft: "auto",
            textAlign: "left"
          }}
          type="submit"
          onClick={sendNewUser}
          variant="contained"
        >
          <AssignmentTurnedInIcon /> Login
        </Button>
      </form>
      <div className="social-register">
        <GoogleLoginButton></GoogleLoginButton>
        <FacebookLoginButton></FacebookLoginButton>
      </div>
    </div>
  );
}

export default Register;