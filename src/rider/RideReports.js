import React, { useState, useEffect } from "react";
import axios from "axios";

const RideReports = () => {
  const url = "http://localhost:6060/orders/reports";
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    const repost = await axios.get(url).then((res) => res.data);
    return repost;
  }

  useEffect(() => {
    fetchOrders().then((res) => setOrders(res));
  }, []);
  fetchOrders();

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
                  <span data-hover="My rides">Find my orders</span>
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
        <h2>Previous Deliveries</h2>
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
      </div>

      {/* get my orders here */}
    </section>
  );
};

export default RideReports;
