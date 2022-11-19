import React, { useRef } from "react";
import avatar from '../../assets/img/avatar.jpg';
import { useState } from 'react';
import {ProfileButton} from "../../components/button/MyButton.js";
import {
  Container,
  Text,
  Avatar,
  ProfileForm,
  ProfileInput,
  Hr,
} from './Profile.js';
import Navigation from "../../components/navigation/Nav.jsx";



const Profil = ({props}) => {
  const [text, Settext] = useState();
  const [user,setuser] = useState();

  function upload(event) {
    Settext('Upload new avatar');
  }

  function cansel(event) {
    Settext('');
  }
 function Addtitle (e) {
   e.preventDefault();
   localStorage.setItem('user', JSON.stringify(user));
 }


  return (
    <div  >
     <Navigation link display  button="none"  bottom >Main page</Navigation>

      <Container >
        <Text>{text}</Text>
        <Avatar
          src={avatar}
          alt="avatar"
          onMouseEnter={(e) => upload(e.target)}
          onMouseLeave={(e) => cansel(e.target)}
        />
        <Hr />
        <ProfileForm >
          Name:
          <ProfileInput type="text" placeholder="Enter your name" value={user} onChange={(e) => setuser(e.target.value)} />
          <br />
          Surname:
          <ProfileInput type="text" placeholder="Enter your surname" />
          <br />
          Age:
          <ProfileInput type="number" placeholder="Enter your age" />
          <br />
          Email:
          <ProfileInput type="email" placeholder="Enter your email" />
          <br />
          Change password:
          <ProfileInput type="password" placeholder="Enter your password" />
          <br />
        </ProfileForm>
        <ProfileButton type="submit" onClick={Addtitle}>Save profile</ProfileButton>
      </Container>
    </div>
  );
};

export default Profil;
