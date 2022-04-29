import React from "react";
import { Link } from "react-router-dom";

const RegisterBusiness = () => {
    return (
      <section>
            <h2>Login form</h2>
            <Link to={'/business/home'}>
                Home page
            </Link>
      </section>
    );
};

export default RegisterBusiness;
