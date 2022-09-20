import React from "react";
import "./Profile.css";
import avatar from "../../assets/img/avatar.jpg";
import { useState } from "react";
import Mybutton from "../../components/button/Mybutton";
import { Link } from "react-router-dom";

const Profil = () => {
  const [mouseMove, SetmouseMove] = useState(false);
  const [text, Settext] = useState();

  function upload(event) {
    SetmouseMove(!mouseMove);
    Settext("Upload new avatar");
  }

  function cansel() {
    SetmouseMove(!mouseMove);
    Settext("");
  }

  return (
    <div>
      <Mybutton>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          main page
        </Link>
      </Mybutton>
      <Mybutton>
        <Link to="/Regpage" style={{ textDecoration: "none", color: "black" }}>
          log out
        </Link>
      </Mybutton>
      <div className="container">
        <div className="text"> {text} </div>
        <img
          className={mouseMove ? "opacity" : "avatar"}
          src={avatar}
          alt="avatar"
          onMouseEnter={upload}
          onMouseLeave={cansel}
        />
        <hr />
        <form className="form">
          Name:
          <input type="text" placeholder="Enter your name" /> <br />
          Surname:
          <input type="text" placeholder="Enter your surname" />
          <br />
          Age:
          <input type="number" placeholder="Enter your age" />
          <br />
          Email:
          <input type="email" placeholder="Enter your email" />
          <br />
          Change password:
          <input type="password" placeholder="Enter new password" />
          <br />
        </form>
        <button className="saveProfile" type="submit">
          Save profile
        </button>
      </div>
    </div>
  );
};

export default Profil;
