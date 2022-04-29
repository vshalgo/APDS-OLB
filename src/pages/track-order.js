// import axios from "axios";
import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

const TrackOrder = () => {
//   const url = "http://localhost:6060/orders/reports";
//   const [single, setSingle] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     async function singleOrder() {
//       const response = await axios.get(url, id).then((res) => res.data);
//     //   console.log(response.data);
//       if (response) {
//         const { item_name, description, price } = response[0];

//         const newOrder = { item_name, description, price };
//         setSingle(newOrder);
//       } else {
//         setSingle(null);
//       }
//     }
//     singleOrder();
//   }, [id]);

//   const { item_name, description, price } = single;
  return (
    <section className="section">
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
                <a href="/profile" className="nav-link">
                  <span data-hover="My Profile">My Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="title">
        <h2>My Orders</h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* job info */}
        {/* <section className="job-info">
          <h3>{item_name}</h3>
          <h4>{description}</h4>
          <p className="job-date">{price}</p>
        </section> */}
      </div>
    </section>
  );
};

export default TrackOrder;
