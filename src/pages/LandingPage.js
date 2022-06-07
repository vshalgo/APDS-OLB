import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [openone, setOpenone] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  return (
    <section>
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
            <div className="col-lg-5 col-md-12 col-12"></div>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>Choose your avatar</h2>
              </div>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../images/user.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>Customer</Card.Title>
                      <Link to={"/login"}>
                        <Button
                          variant="primary"
                          aria-controls="collapse-text"
                          aria-expanded={open}
                        >
                          Let's go
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../images/user.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>Business Owner</Card.Title>
                      <Link to={"/login/business"}>
                        <Button
                          variant="primary"
                          aria-controls="collapse-text"
                          aria-expanded={open}
                        >
                          Let's go
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../images/user.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>Delivery Person</Card.Title>
                      <Link to={"/rider/login"}>
                        <Button
                          variant="primary"
                          aria-controls="collapse-text"
                          aria-expanded={open}
                        >
                          Let's go
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
