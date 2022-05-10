import React from "react";
import { Link } from "react-router-dom";

const RegisterBusiness = () => {
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

                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control "
                          id="floatingInput"
                          name="fullName"
                          placeholder="full name"
                        />
                        <label for="floatingInput">Full Name</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control "
                          id="floatingInput"
                          name="email"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email address</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control "
                          id="floatingInput"
                          name="email"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Phone Number</label>
                        <span className="text-danger"></span>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control "
                          id="floatingPassword"
                          name="password"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                        <span className="text-danger"></span>
                      </div>
                    </form>
                    <h3 className="login-heading mb-4">Business details</h3>
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control "
                          id="floatingInput"
                          name="fullName"
                          placeholder="business name"
                        />
                        <label for="floatingInput">Business Name</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control "
                          id="floatingInput"
                          name="fullName"
                          placeholder="@ig_handle"
                        />
                        <label for="floatingInput">Instagram Name</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control "
                          id="floatingInput"
                          name="fullName"
                          placeholder="description"
                        />
                        <label for="floatingInput">Description</label>
                        <span className="text-danger"></span>
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="button"
                        >
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

export default RegisterBusiness;
