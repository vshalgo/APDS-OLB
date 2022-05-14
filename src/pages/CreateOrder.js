import axios from "axios";
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

const CreateOrder = () => {
  const [modalShow, setModalShow] = useState(false);
  const url = "http://localhost:6060/myOrders";

  const [item_name, setItem_name] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [clientId, setClientId] = useState("");
  const [rideId, setRideId] = useState("");

  // const handleChange = (e) => {
  //   const value = e.target.name;
  //   setMyOrder({
  //     ...myOrder,
  //     [e.target.value]: value,
  //   });
  // };

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

    redirectUser = () => {
      this.props.history.push('/')
    }
  }

  //getting data from the database

  //modal
  // function MyVerticallyCenteredModal(props) {
  //   return (
  //     <Modal
  //       {...props}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Confirm Order
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <h4>Customer Name </h4>
  //         <p>Order Number: </p>
  //         <p>Customer Phone number: </p>
  //         <p>Price: </p>
  //         <p>Destination Address: </p>
  //         <p>Rider Info: </p>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button onClick={props.onHide} onSubmit={handleSubmit}>
  //           Submit
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }

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
        <div className="row">
          {/* <h2>Create Orders</h2> */}
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>Create orders for your customer</h2>
            </div>
            <form onSubmit={handleSubmit}>
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
                <Link to="/business/reports">
                  <button
                    className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="submit"
                  >
                    Send Order
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
