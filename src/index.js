import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";
import img from "./assets/img/bg.jpg";
import pop from "./assets/fonts/Poppins-Regular.ttf";

const Global = createGlobalStyle`
*{
    font-family: 'Poppins';
}
body{
    background-image: url(${img});
}
`;
const Fontf = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url(${pop}) ;
        
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global />
    <Fontf />
    <Router />
  </>
);
