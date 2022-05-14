import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const RegisterBusiness = () => {
  const url = "http://localhost:6060/retail/signup";

  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [business_name, setBusiness_name] = useState("");
  const [handle, setHandle] = useState("");
  const [business_description, setBusiness_description] = useState("");

  // const handleChange = (e) => {
  //   const value = e.target.name;
  //   setBusiness({
  //     ...business,
  //     [e.target.value]: value,
  //   });
  // };

  // item_name, address, description, price, clientId, rideId
  async function handleSubmit(e) {
    e.preventDefault();
    const businessData = {
      full_name: full_name,
      email: email,
      password: password,
      phone_number: phone_number,
      business_name: business_name,
      handle: handle,
      business_description: business_description,
    };

    // console.log(businessData);

    try {
      await axios({
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: url,
        data: businessData,
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
                          placeholder="name@example.com"
                          value={phone_number}
                          onChange={(e) => setPhone_number(e.target.value)}
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
                    <h3 className="login-heading mb-4">Business details</h3>
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="text"
                          className="form-control "
                          placeholder="business name"
                          value={business_name}
                          onChange={(e) => setBusiness_name(e.target.value)}
                        />
                        <label>Business Name</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          required
                          type="text"
                          className="form-control "
                          placeholder="@ig_handle"
                          value={handle}
                          onChange={(e) => setHandle(e.target.value)}
                        />
                        <label>Instagram Name</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <textarea
                          required
                          type="text"
                          className="form-control "
                          placeholder="description"
                          value={business_description}
                          onChange={(e) =>
                            setBusiness_description(e.target.value)
                          }
                        ></textarea>
                        <label>Description</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="d-grid">
                        <Link to="/business/home">
                          <button
                            className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </Link>
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

export default RegisterBusiness;
