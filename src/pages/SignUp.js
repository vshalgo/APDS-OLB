import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const url = "http://localhost:6060/signup";

  // const [validation, setValidation] = useState(false);

  const [id, setId] = useState("");
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");

  // const handleChange = (e) => {
  //   const value = e.target.name;
  //   setMyOrder({
  //     ...myOrder,
  //     [e.target.value]: value,
  //   });
  // };

  async function handleSubmit(e) {
    e.preventDefault();
    const orderData = {
      id: id,
      full_name: full_name,
      email: email,
      password: password,
      phone_number: phone_number,
    };

    try {
      await axios({
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: url,
        data: orderData,
      })
        .then((response) => {
          // if (response.status == 200) {
          //   <Link to='/'>Okay</Link>
          // }
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
                          type="number"
                          className="form-control "
                          value={id}
                          placeholder="Customer Id (provided)"
                          onChange={(e) => setId(e.target.value)}
                        />
                        <label>Customer Id</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="text"
                          className="form-control "
                          placeholder="full name"
                          value={full_name}
                          onChange={(e) => setFull_name(e.target.value)}
                        />
                        <label>Full Name</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="email"
                          className="form-control "
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                        />
                        <label>Email address</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="number"
                          className="form-control "
                          value={phone_number}
                          placeholder="phone number"
                          onChange={(e) => setPhone_number(e.target.value)}
                        />
                        <label>Phone Number</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control "
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                        <span className="text-danger"></span>
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberPasswordCheck"
                        />
                        <label className="form-check-label">
                          Remember password
                        </label>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          {/* <Link to='/' label="handleSubmit">Sign UP</Link> */}
                          Sign Up
                        </button>
                      </div>
                    </form>
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

export default SignUp;
