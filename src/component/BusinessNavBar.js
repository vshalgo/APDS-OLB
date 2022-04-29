import React from "react";

const BusinessNavBar = () => {
  const [showLinks, setShowLinks] = React.useState(false);
  return (
    <nav>
      <div className="container">
        <div className="nav-header">
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/register/business">Register My Business</Link>
            </li>
            <li className="nav-item">
              <Link to="/track-orders">Track My orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavBar;
