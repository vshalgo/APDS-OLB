import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Products = () => {
  const url = "http://localhost:6060/products";

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const getProducts = {
      number: number,
      name: name,
      price: price,
      status: status,
    };
    try {
      await axios({
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: url,
        data: getProducts,
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

  //get products from the database
  const p_url = "http://localhost:6060/products/all";
  const [product, setProduct] = useState([]);

  async function fetchProducts() {
    const report = await axios.get(p_url).then((res) => res.data);
    return report;
  }

  useEffect(() => {
    fetchProducts().then((res) => setProduct(res));
  }, []);

  fetchProducts();

  return (
    <section className="container-fluid">
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
                <a href="/products" className="nav-link">
                  <span data-hover="My Products">My Products</span>
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
        <h2>My Products</h2>
        {/* show added products */}
        <div className="stories">
            {product.map((item) => {
              const { id, name, price, status, number } = item;
                return (
                  <Card body key={id} className='product-style'>
                      <h5>Product name: {name}</h5>
                      <p>Product number: {number}</p>
                      <p>Product price: {price}</p>
                      <p>Status: {status}</p>
                  </Card>
                );
            })}
        </div>
        {/* add a product form */}
        <div className="card-products">
          <h4>Add a product</h4>

          <form className="container" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                required
                type="text"
                className="form-control"
                placeholder="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <label>Product Number</label>
              <span className="text-danger"></span>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Product Name</label>
              <span className="text-danger"></span>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                type="text"
                className="form-control "
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="price"
              />
              <label>Amount</label>
              <span className="text-danger"></span>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                type="text"
                className="form-control "
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="status"
              />
              <label>Status</label>
              <span className="text-danger"></span>
            </div>
            <div className="d-grid">
              <button
                className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                type="submit"
              >
                add product
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Products;
