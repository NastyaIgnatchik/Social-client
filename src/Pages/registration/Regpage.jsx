import React from "react";
import "./Regpage.css";
import { Link } from "react-router-dom";

const Regpage = () => {

  return (
    <div>
      <div className="containerReg">
        <p className="title"> Sign in </p>
        <form className="formReg">
          Email:
          <input type="email" placeholder="Email" />
          <br />
          Password:
          <input type="password" placeholder="Password" />
          <br />
          Confirm password:
          <input type="password" placeholder="Password" />
          <br />
        </form>
        <button className="saveProfile enter"> Enter </button>
        <p className="link">
          <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
            You already have an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regpage;
