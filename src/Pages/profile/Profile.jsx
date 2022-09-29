import React from "react";
import avatar from "../../assets/img/avatar.jpg";
import { useState } from "react";
import Mybutton from "../../components/button/Mybutton.jsx";
import { Link } from "react-router-dom";
import {Container,Text,Avatar, Form, Input, SaveProfil,Hr} from './Profile.js';

const Profil = () => {
  const [text, Settext] = useState();

  function upload(event) {
    Settext("Upload new avatar");
  }

  function cansel(event) {
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
      <Container>
        <Text>{text}</Text>

        <Avatar
          src={avatar}
          alt="avatar"
          onMouseEnter={(e) => upload(e.target)}
          onMouseLeave={(e) => cansel(e.target)}
        />

        <Hr />
        <Form>
          Name:
          <Input type="text" placeholder="Enter your name" />
          <br />
          Surname:
          <Input type="text" placeholder="Enter your surname" />
          <br />
          Age:
          <Input type="number" placeholder="Enter your age" />
          <br />
          Email:
          <Input type="email" placeholder="Enter your email" />
          <br />
          Change password:
          <Input type="password" placeholder="Enter your password" />
          <br />
        </Form>
        <SaveProfil type="submit">Save profile</SaveProfil>
      </Container>
    </div>
  );
};

export default Profil;
