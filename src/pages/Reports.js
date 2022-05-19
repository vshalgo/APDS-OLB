import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Reports = () => {
  const p_url = "http://localhost:6060/orders/reports";

  const [getOrders, setGetOrders] = useState([]);

  async function fetchOrders() {
    const repost = await axios.get(p_url).then((res) => res.data);
    return repost;
  }

  useEffect(() => {
    fetchOrders().then((res) => setGetOrders(res));
  }, []);
  fetchOrders();

  return (
    <div>
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
                <a href="/business/home" className="nav-link">
                  <span data-hover="Home">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/business/orders" className="nav-link">
                  <span data-hover="Create an Order">Create an Order</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/business/reports" className="nav-link">
                  <span data-hover="Reports">Reports</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/business/profile" className="nav-link">
                  <span data-hover="My Profile">My Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
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
        <div className="stories">
          {getOrders.map((latest) => {
            const { id, item_name, description, price, clientId, riderId } =
              latest;
            return (
              <Card body key={id}>
                <article>
                  <h4>{item_name}</h4>
                  <p>Description: {description}</p>
                  <p>Price: {price}</p>
                  {/* <p>{clientId}</p>
                  <p>{riderId}</p> */}
                </article>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reports;
