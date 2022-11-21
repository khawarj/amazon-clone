import { Input } from "@mui/material";
import React, { useRef } from "react";
import { Link, useNavigate  } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import CustomButton from "../Button";
import "./login.css";

const logo = "https://pngimg.com/uploads/amazon/amazon_PNG8.png";

function Login() {
  const navigate = useNavigate ();
  const emailRef = useRef();
  const passworddRef = useRef();

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passworddRef.current.value
      );
      navigate("/")
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passworddRef.current.value
      );
      navigate("/")

    } catch (err) {
      alert("Invalid creds");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="logo" />
      </Link>

      <div className="login__container">
        <h3>Sign In</h3>
        <form onSubmit={login} className="login__form">
          <h5>Email</h5>
          <Input required name="email" inputRef={emailRef} type="email" />
          <h5>Password</h5>
          <Input
            required
            name="password"
            inputRef={passworddRef}
            type="password"
          />
          <CustomButton style={{ marginTop: "10px" }} type="submit">
            Sign In
          </CustomButton>
        </form>
        <div className="login__footer">
          <p>
            By signing in you agree to terms and condition. Please accept the
            terms and condition if you can find it.
          </p>
          <CustomButton
            style={{ backgroundColor: "white", marginTop: "10px" }}
            onClick={register}
          >
            Create Account
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Login;
