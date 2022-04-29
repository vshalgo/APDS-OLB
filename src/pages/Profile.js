import React from "react";

const Profile = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <i className="uil uil-user"></i> APDS-OLB
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <span data-hover="Home">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/register/business" className="nav-link">
                  <span data-hover="Register Business">Register Business</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/track-orders" className="nav-link">
                  <span data-hover="Track Order">Track Orders</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/business/orders" className="nav-link">
                  <span data-hover="My Profile">My Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h2>Profile Page</h2>
      </div>
    </div>
  );
};

export default Profile;
