import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpRider = () => {
  const url = "http://localhost:6060/rider/signup";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const riderData = {
      name: name,
      email: email,
      number: number,
      password: password,
    };

    try {
      await axios({
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: url,
        data: riderData,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div className="container-fluid ">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome!</h3>

                    <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="text"
                          className="form-control "
                          placeholder="full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label>Full Name</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="email"
                          className="form-control "
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Email address</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="number"
                          className="form-control "
                          placeholder="phone number"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                        <label>Phone Number</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="password"
                          className="form-control "
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                        <span className="text-danger"></span>
                      </div>
                    </form>
                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        <Link to="/rider/home">Sign Up</Link>
                      </button>
                    </div>
                    <div className="text-center">
                      <Link to={"/rider/login"}>
                        Already have an account? Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpRider;
