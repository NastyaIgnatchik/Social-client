import React from "react";
import { Link } from "react-router-dom";
import {
  ContainerReg,
  Title,
  FormReg,
  Input,
  Button,
  LinkA,
} from "./Login.js";

const Login = () => {
  return (
    <ContainerReg>
      <Title>Log in</Title>
      <FormReg>
        Email:
        <Input type="email" placeholder="Email" />
        <br />
        Password:
        <Input type="password" placeholder="Password" />
        <br />
      </FormReg>
      <Button>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          log in
        </Link>
      </Button>
      <LinkA>
        <Link to="/Regpage" style={{ textDecoration: "none", color: "black" }}>
          You don't have an account yet
        </Link>
      </LinkA>
    </ContainerReg>
  );
};

export default Login;
