import React from "react";
import { Link } from "react-router-dom";
import {
  ContainerReg,
  Title,
  FormReg,
  Input,
  Button,
  LinkA,
} from "../Login/Login.jsx";

const Regpage = () => {
  return (
    <ContainerReg>
      <Title>Sign in</Title>
      <FormReg>
        Email:
        <Input type="email" placeholder="Email" />
        <br />
        Password:
        <Input type="password" placeholder="Password" />
        <br />
        Confirm password:
        <Input type="password" placeholder="Password" />
        <br />
      </FormReg>
      <Button>Enter</Button>
      <LinkA>
        <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
          You already have an account
        </Link>
      </LinkA>
    </ContainerReg>
  );
};

export default Regpage;
