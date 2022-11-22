import React from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerReg,
  Title,
  LinkA,
} from '../login/Login.js';
import {ProfileForm, ProfileInput} from "../profile/Profile";
import {LogButton} from "../../components/button/MyButton.js";

const Regpage = (props) => {
  return (
    <ContainerReg>
      <Title>Sign in</Title>
      <ProfileForm width>
        Email:
        <ProfileInput type="email" placeholder="Email" />
        <br />
        Password:
        <ProfileInput type="password" placeholder="Password" />
        <br />
        Confirm password:
        <ProfileInput type="password" placeholder="Password" />
        <br />
      </ProfileForm>
      <LogButton>Enter</LogButton>
      <LinkA>
        <Link to="/Login" style={{ textDecoration: 'none', color: 'black' }}>
          You already have an account
        </Link>
      </LinkA>
    </ContainerReg>
  );
};

export default Regpage;
