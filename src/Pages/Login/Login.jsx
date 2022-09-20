import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div>
      <div className="containerReg">
        <p className="title"> Log in </p>
        <form className="formReg">
          Email:
          <input type="email" placeholder="Email" />
          <br />
          Password:
          <input type="password" placeholder="Password" />
          <br />
        </form>
        <button className="saveProfile enter">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            log in
          </Link>
        </button>
        <p className="link">
          <Link to="/Regpage" style={{ textDecoration: "none", color: "black" }}>
            You don't have an account yet
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
