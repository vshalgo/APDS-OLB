import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const Rides = () => {
  const url = "http://127.0.0.1:5000/predict";
  const url_p = "http://localhost:6060/orders/reports";
  const [rideOrder, setRideOrder] = useState([]);

  async function getOrders() {
    const response = await axios.get(url_p).then((res) => res.data);
    return response;
  }

  useEffect(() => {
    getOrders().then((res) => setRideOrder(res));
  }, []);
  getOrders();


  async function predictTime() {
    try {
      await axios({
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: url,
        data: 30
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
        <h2>My delivery details</h2>
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
          <h5>Enter delivery detains</h5>
          <form>
            <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder="name"
                />

              <label>Current Location</label>
              <span className="text-danger"></span>
            </div>
            <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder="name"
                />
              <label>Destination address</label>
              <span className="text-danger"></span>
            </div>
          </form>
          <button type="submit" onClick={predictTime}>
            Start delivery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Rides