import axios from "axios";
import React, { useState, useEffect } from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import authHeader from "../services/user.service";

const TrackOrder = () => {
  
  //get order records
  const url = "http://localhost:6060/orders/reports";
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    const repost = await axios
      .get(url, { headers: authHeader() })
      .then((res) => res.data);
    return repost;
  }

  useEffect(() => {
    fetchOrders().then((res) => setOrders(res));
  }, []);
  fetchOrders();

  // map function
  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -1.292066, lng: 36.821945 }}
      />
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  console.log(orders);

  return (
    <section className="section container-fluid">
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
      <div className="title container">
        <h2>My Orders</h2>
        <div className="underline"></div>
        {/* search order bar */}
        <div className="form-floating mb-3 stories">
          <input
            type="number"
            placeholder="Search by order number"
            className="form-control"
          />
        </div>

        {/* get my orders here */}
        <div className="stories">
          {orders.map((customer) => {
            const { id, item_name, description, price } = customer;
            return (
              <article key={id} className="story">
                <h4>{item_name}</h4>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                {/* <p>{customer_number}</p>
                  <p>{price}</p> */}
              </article>
            );
          })}
          ;
        </div>

        {/* maps */}
        <div className="maps">
          <WrappedMap
            googleMapURL={
              "https://maps.googleapis.com/maps/api/js?key=AIzaSyCLwD9gycFHop6mLnuJ54giYPmYRcL2CbQ&callback=initMap"
            }
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </section>
  );
};

export default TrackOrder;
