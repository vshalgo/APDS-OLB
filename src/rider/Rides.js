import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

const Rides = () => {
  const url = "http://localhost:6060/orders/reports";
  const [rideOrder, setRideOrder] = useState([]);

  async function getOrders() {
    const response = await axios.get(url).then((res) => res.data);
    return response;
  }

  useEffect(() => {
    getOrders().then((res) => setRideOrder(res));
  }, []);
  getOrders();

  //map function
  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -1.292066, lng: 36.821945 }}
      />
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <section>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
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
                <a href="/rider/home" className="nav-link">
                  <span data-hover="Home">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/myrides" className="nav-link">
                  <span data-hover="Find mt orders">Find my orders</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/rides/reports" className="nav-link">
                  <span data-hover="Track Order">Reports</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/rider/profile" className="nav-link">
                  <span data-hover="My Profile">My Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h2>My order details</h2>
        {/* show added orders */}
        <div className="stories">
          {rideOrder.map((item) => {
            const { id, item_name, price, address, description } = item;
            return (
              <Card body key={id}>
                <h5>Product name: {item_name}</h5>
                <p>Amount: {price}</p>
                <p>Description: {description}</p>
                <p>Location: {address}</p>
              </Card>
            );
          })}
        </div>
        {/* delivery */}
        <div>
          <h4>Make a delivery</h4>
          <Container>
            <Row>
              <Col>
                <div className="maps">
                  {/* rendering the map without any functionality */}
                  <WrappedMap
                    googleMapURL={
                      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCLwD9gycFHop6mLnuJ54giYPmYRcL2CbQ&callback=initMap"
                    }
                    loadingElement={
                      <div style={{ width: `50%`, height: `100%` }} />
                    }
                    containerElement={
                      <div style={{ width: `50%`, height: `100%` }} />
                    }
                    mapElement={
                      <div style={{ width: `100%`, height: `100%` }} />
                    }
                  />
                </div>
              </Col>
              <Col>
                <h5>Enter delivery detains</h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Rides