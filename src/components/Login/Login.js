import React from "react";
import aboutImg from "../../assets/ball.jpg";
import "./Login.css";
import LogoIcon from "../../assets/LogoTennis.png";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const Login = () => {
  const { useState } = React;

  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpass, setwarnpass] = useState(false);
  const [danger, setdanger] = useState(true);

  const [eye, seteye] = useState(true);
  const [pass, setpass] = useState("password");

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") {
      if (value.length > 0) {
        setdanger(true);
      }
    }
    setinputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpass(false);
    if (inputs.email.length < 1) {
      setdanger(false);
    }
    if (inputs.email === "") {
      setwarnemail(true);
    } else if (inputs.password === "") {
      setwarnpass(true);
    } else {
      console.log("Success");
    }
  };
  const Eye = () => {
    if (pass === "password") {
      setpass("text");
      seteye(false);
    } else {
      setpass("password");
      seteye(true);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="form">
            <div className="left-side">
              <img src={aboutImg} />
            </div>

            <div className="right-side">
              <span className="logo-right-side">
                <img
                  src={LogoIcon}
                  width="auto"
                  height="70"
                  className="d-inline-block align-top"
                  alt="Thora Tennis Academy"
                />
              </span>
              <div className="hello">
                <h1>Login!</h1>
                <h5 style={{ fontWeight: "300", fontSize: "12px" }}>
                  Let the Racket do the Talking{" "}
                </h5>
              </div>

              <form onSubmit={submitForm}>
                <div className="input_text">
                  <input
                    className={` ${warnemail ? "warning" : ""}`}
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={inputs.email}
                    onChange={inputEvent}
                  />
                  <p className={` ${danger ? "danger" : ""}`}>
                    <i className="fa fa-warning"></i>Please enter a valid email
                    address.
                  </p>
                </div>
                <div className="input_text">
                  <input
                    className={` ${warnpass ? "warning" : ""}`}
                    type={pass}
                    placeholder="Enter Password"
                    name="password"
                    value={inputs.password}
                    onChange={inputEvent}
                  />
                  <i
                    onClick={Eye}
                    className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                  ></i>
                </div>
                <div className="recovery">
                  <p>Forgot Password?</p>
                </div>
                <div className="btn-signin">
                  <Link to="/">
                    <button type="submit">Sign in</button>
                  </Link>
                </div>
                <div className="register">
                  <p>
                    Dont't have an account? <a href="/register">Register Now</a>
                  </p>
                </div>
              </form>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
