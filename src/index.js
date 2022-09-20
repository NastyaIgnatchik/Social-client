import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Profile from './Pages/profile/Profile.jsx';
// import Regpage from './Pages/registration/Regpage';
// import Login from './Pages/Login/Login';
import Router from "./routes/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
