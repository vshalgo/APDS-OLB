import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const CreateOrder = () => {
  const [modalShow, setModalShow] = useState(false);
  const url = "http://localhost:6060/myOrders";
  const p_url = "http://localhost:6060/orders/reports";
  const [showLinks, setShowLinks] = React.useState(false);

  //connecting to the backend API
  const [myOrder, setMyOrder] = useState({
    order_number: "",
    item_name: "",
    customer_name: "",
    customer_number: "",
    address: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const value = e.target.name;
    setMyOrder({
      ...myOrder,
      [e.target.value]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      order_number: myOrder.order_number,
      item_number: myOrder.item_number,
      customer_name: myOrder.customer_name,
      customer_number: myOrder.customer_number,
      address: myOrder.address,
      description: myOrder.description,
      price: myOrder.price,
    };
    axios({
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
  };

  //getting data from the database
  const [getOrders, setGetOrders] = useState([]);

  async function fetchOrders() {
    const repost = await axios.get(p_url).then((res) => res.data);
    return repost;
  }

  useEffect(() => {
    fetchOrders().then((res) => setGetOrders(res));
  }, []);
  fetchOrders();

  //modal
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Customer Name </h4>
          <p>Order Number: </p>
          <p>Customer Phone number: </p>
          <p>Price: </p>
          <p>Destination Address: </p>
          <p>Rider Info: </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} onSubmit={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

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
              <Form>
                <Form.Group className="mb-4" controlId="formGroupNumber">
                  <Form.Label>Order Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter order number"
                    name="order_nunmber"
                    // value={myOrder.order_number}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupEmail">
                  <Form.Label>Order Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Order Name"
                    name="item_name"
                    // value={myOrder.item_name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Customer name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Customer Name"
                    name="customer_name"
                    // value={myOrder.customer_name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Customer phone number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Customer Phone number"
                    name="customer_number"
                    // value={myOrder.customer_number}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Destination Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Destination Address"
                    name="address"
                    // value={myOrder.address}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    name="description"
                    // value={myOrder.description}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Price"
                    name="price"
                    // value={myOrder.price}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Submit Order
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Form>
            </div>
          </div>
          {/* show previous orders */}
          <div className="stories">
            {getOrders.map((latest) => {
              const { id, item_name, customer_name, customer_number, price } =
                latest;
              return (
                <article key={id} className="story">
                  <h4>{item_name}</h4>
                  <p>
                    Customer name: {customer_name} Customer number:{" "}
                    {customer_number} Price: {price}
                  </p>
                  {/* <p>{customer_number}</p>
                  <p>{price}</p> */}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default CreateOrder;
