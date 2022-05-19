import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

const CreateOrder = () => {
  // const [modalShow, setModalShow] = useState(false);
  const url = "http://localhost:6060/myOrders";
  const p_url = "http://localhost:6060/rider/info";

  const [item_name, setItem_name] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [clientId, setClientId] = useState("");
  const [rideId, setRideId] = useState("");
  const [ride, setRide] = useState("");

  async function fetchRiders() {
    const report = await axios.get(p_url).then((res) => res.data);
    return report;
  }

  useEffect(() => {
    fetchRiders().then((res) => setRide(res));
  }, []);
  fetchRiders();

  async function handleSubmit(e) {
    e.preventDefault();
    const orderData = {
      item_name: item_name,
      address: address,
      description: description,
      price: price,
      clientId: clientId,
      rideId: rideId,
    };

    try {
      await axios({
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: url,
        data: orderData,
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
    <div className="container-fluid">
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
      <Container>
        <Row>
          <Col>
            <h5>Available riders</h5>
            {ride.map((item) => {
              const { id, name, email} = item;
              return (
                <Card body key={id} className="product-style">
                  <h5>{name}</h5>
                  <p>{email}</p>
                </Card>
              );
            })}
          </Col>
          <Col xs={8}>
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>Create orders for your customer</h2>
              </div>
              <form>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="text"
                    className="form-control "
                    placeholder="item name"
                    value={item_name}
                    onChange={(e) => setItem_name(e.target.value)}
                  />
                  <label>Item Name</label>
                  <span className="text-danger"></span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="text"
                    className="form-control "
                    placeholder="Destination Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label>Destination Address</label>
                  <span className="text-danger"></span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="text"
                    className="form-control "
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label>Price</label>
                  <span className="text-danger"></span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="email"
                    className="form-control "
                    placeholder="name@example.com"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                  />
                  <label>Client Email Address</label>
                  <span className="text-danger"></span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="email"
                    className="form-control "
                    placeholder="name@example.com"
                    value={rideId}
                    onChange={(e) => setRideId(e.target.value)}
                  />
                  <label>Rider Email Address</label>
                  <span className="text-danger"></span>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    required
                    type="text"
                    className="form-control "
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <label>Description</label>
                  <span className="text-danger"></span>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
                    Create order
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateOrder;
