import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerReg, Title, LinkA } from './Login.js';
import {ProfileForm, ProfileInput} from "../profile/Profile";
import {LogButton} from "../../components/button/MyButton.js";

const Login = () => {
  return (
    <ContainerReg>
      <Title>Log in</Title>
      <ProfileForm>
        Email:
        <ProfileInput type="email" placeholder="Email" />
        <br />
        Password:
        <ProfileInput type="password" placeholder="Password" />
        <br />
      </ProfileForm>
      <LogButton>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          log in
        </Link>
      </LogButton>
      <LinkA>
        <Link to="/Regpage" style={{ textDecoration: 'none', color: 'black' }}>
          You don't have an account yet
        </Link>
      </LinkA>
    </ContainerReg>
  );
};

export default Login;
