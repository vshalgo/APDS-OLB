import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import axios from 'axios';

const Home = () => {
  const url = "http://localhost:6060/products/all";

  const [open, setOpen] = useState(false);
  const [openone, setOpenone] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get(url).then((res) => res.data);
    return response;
  }

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);
  getProducts();

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
                <a href="/rider/signup" className="nav-link">
                  <span data-hover="Register as a rider">
                    Register as a rider
                  </span>
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
      {/* <!-- ABOUT --> */}
      <div
        className="about full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <small className="small-text">
                  Welcome to{" "}
                  <span className="mobile-block">
                    the delivery system of your choice!
                  </span>
                </small>
                <h1 className="animated animated-text">
                  <span className="mr-2">Hey guys, I'm</span>
                  <div className="animated-info">
                    <span className="animated-item">Automatic</span>
                    <span className="animated-item">Affordable</span>
                    <span className="animated-item">The fastest</span>
                  </div>
                </h1>
                <p>
                  We are the fastest, most affordable delivery system for local
                  businesses near you.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              {/* <div className="about-image">
                <img
                  src={require("../images/fast.jpg")}
                  // className="img-fluid"
                  alt="svg"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>Get to learn more about our services and products</h2>
              </div>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../images/fast.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>We are fast</Card.Title>
                      <Button
                        variant="primary"
                        onClick={() => setOpen(!open)}
                        aria-controls="collapse-text"
                        aria-expanded={open}
                      >
                        Learn More
                      </Button>
                      <Collapse in={open}>
                        <div id="collapse-text">
                          Get your products in a few hours after your order. We
                          liase with reliable and convenient riders who will not
                          waste your time waiting on a product.
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../images/shop 3.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>We are affordable</Card.Title>
                      <Button
                        variant="primary"
                        onClick={() => setOpenone(!openone)}
                        aria-controls="collapse-text"
                        aria-expanded={openone}
                      >
                        Learn More
                      </Button>
                      <Collapse in={openone}>
                        <div id="collapse-text">
                          We use a cost-sharing model that helps reduce the cost
                          of products. We transport goods for one area/location
                          all at once to reduce the cost of travel of one
                          product.
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../images/path.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>We bring products to you</Card.Title>
                      <Button
                        variant="primary"
                        onClick={() => setOpentwo(!opentwo)}
                        aria-controls="collapse-text"
                        aria-expanded={opentwo}
                      >
                        Learn More
                      </Button>
                      <Collapse in={opentwo}>
                        <div id="collapse-text">
                          We get details of your destination and use a model to
                          determine the time of travel
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center product-style">
            <h2>All products</h2>
            {products.map((item) => {
              const { id, name, price } = item;
              return (
                <Card style={{ width: "18rem" }} key={id}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

