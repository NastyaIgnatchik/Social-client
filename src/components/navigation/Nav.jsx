import React from 'react';
import Mybutton from '../button/Mybutton.jsx';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
      <Mybutton>
        <Link to="/Profile" style={{ textDecoration: "none", color: "black" }}>
          edit profil
        </Link>
      </Mybutton>
      <Mybutton>
        <Link to="/Regpage" style={{ textDecoration: "none", color: "black" }}>
          log out
        </Link>
      </Mybutton>
        </div>
    );
};

export default Nav;