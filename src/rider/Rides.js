import React from 'react'

const Rides = () => {
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
      <h2>My rides</h2>
    </section>
  );
}

export default Rides