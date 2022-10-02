import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/mainPage/mainPage.js';
import Regpage from '../Pages/registration/Regpage.jsx';
import Login from '../Pages/Login/Login.jsx';
import Profile from '../Pages/profile/Profile.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Regpage" element={<Regpage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
