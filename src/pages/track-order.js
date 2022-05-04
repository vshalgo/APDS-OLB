// import axios from "axios";
import React from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

const TrackOrder = () => {
  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -1.292066, lng: 36.821945 }}
      />
    );  
    
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map))
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
      {/* <div>
        job info
        <section className="job-info">
          <h3>{item_name}</h3>
          <h4>{description}</h4>
          <p className="job-date">{price}</p>
        </section>
      </div> */}

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
    </section>
  );
};

export default TrackOrder;
