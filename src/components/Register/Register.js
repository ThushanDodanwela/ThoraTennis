import React from "react";
import aboutImg from "../../assets/ball.jpg";
import "./Register.css";
import LogoIcon from "../../assets/LogoTennis.png";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Register = () => {
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
                <h1>Register!</h1>
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    color: "#329902",
                  }}
                >
                  Signup with THORA{" "}
                </h5>
              </div>

              <form onSubmit={submitForm}>
                <Row>
                  <Col>
                    <div className="input_text">
                      <input
                        className={` ${warnemail ? "warning" : ""}`}
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        value={inputs.fname}
                        onChange={inputEvent}
                      />
                      <p className={` ${danger ? "danger" : ""}`}>
                        <i className="fa fa-warning"></i>Please enter a valid
                        name.
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="input_text">
                      <input
                        className={` ${warnemail ? "warning" : ""}`}
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        value={inputs.lname}
                        onChange={inputEvent}
                      />
                      <p className={` ${danger ? "danger" : ""}`}>
                        <i className="fa fa-warning"></i>Please enter a valid
                        name.
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="input_text">
                      <input
                        className={` ${warnemail ? "warning" : ""}`}
                        type="date"
                        placeholder="DOB"
                        name="dob"
                        value={inputs.dob}
                        onChange={inputEvent}
                      />
                      <p className={` ${danger ? "danger" : ""}`}>
                        <i className="fa fa-warning"></i>You should be at least
                        5 Years old.
                      </p>
                    </div>
                  </Col>

                  <Col>
                    <div className="input_text">
                      <input
                        className={` ${warnemail ? "warning" : ""}`}
                        type="text"
                        placeholder="NIC"
                        name="nic"
                        value={inputs.nic}
                        onChange={inputEvent}
                      />
                      <p className={` ${danger ? "danger" : ""}`}>
                        <i className="fa fa-warning"></i>Invalid NIC
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="input_text">
                      <label class="radio-inline">
                        <input
                          type="radio"
                          name="male"
                          value={inputs.gender}
                          onChange={inputEvent}
                        />
                        Male
                        <input
                          type="radio"
                          name="female"
                          value={inputs.gender}
                          onChange={inputEvent}
                        />
                        Female
                      </label>
                    </div>
                  </Col>

                  <Col>
                    <div className="input_text">
                      <input
                        className={` ${warnemail ? "warning" : ""}`}
                        type="text"
                        placeholder="Mobile No."
                        name="mobile"
                        value={inputs.mobile}
                        onChange={inputEvent}
                      />
                      <p className={` ${danger ? "danger" : ""}`}>
                        <i className="fa fa-warning"></i>Invalid Mobile No.
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="input_text">
                      <input
                        className={` ${warnemail ? "warning" : ""}`}
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={inputs.address}
                        onChange={inputEvent}
                      />
                      <p className={` ${danger ? "danger" : ""}`}>
                        <i className="fa fa-warning"></i>
                      </p>
                    </div>
                  </Col>

                  <Col>
                    <div className="input_text">
                      <input
                        className={` ${warnemail ? "warning" : ""}`}
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={inputs.email}
                        onChange={inputEvent}
                      />
                      <p className={` ${danger ? "danger" : ""}`}>
                        <i className="fa fa-warning"></i>Invalid Email Address
                      </p>
                    </div>
                  </Col>
                </Row>

                <div className="btn-signin">
                  <Link to="/">
                    <button type="submit">Register</button>
                  </Link>
                </div>
                <div className="register">
                  <p>
                    Already have an account? <a href="/login">Sign In</a>
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

export default Register;
