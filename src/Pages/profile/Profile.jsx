import React from "react";
import avatar from "../../assets/img/avatar.jpg";
import { useState } from "react";
import Mybutton from "../../components/button/Mybutton";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  width: 60%;
  margin: 0 20% 0 20%;
  position: relative;
`;
const Text = styled.div`
  text-align: center;
  position: absolute;
  left: 38%;
  top: 25%;
  font-size: 20px;
`;
const Avatar = styled.img`
  width: 40%;
  margin: 15px 30% 0 30%;
  &:hover {
    opacity: 0.4;
  }
`;
const Form = styled.form`
  width: 50%;
  margin: 30px 25% 0 25%;
  line-height: 47px;
`;
const Input = styled.input`
  float: right;
  margin: 10px 0 10px 0;
  width: 30%;
`;
const SaveProfil = styled.button`
  width: 20%;
  margin: 30px 40% 30px 40%;
  height: 30px;
  background: rgb(212, 197, 247);
  cursor: pointer;
`;
const Hr = styled.hr`
  width: 80%;
`;

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
