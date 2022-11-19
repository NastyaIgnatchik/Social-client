import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import {Logo,Navbar,Input} from './nav.js'
import {Button} from "../button/MyButton.js"


const Navigation = (props) => {
    const link = props.link;
    const display = props.display;


  return (
    <div>
        <Navbar  >

                <Logo  src={logo} alt="cat"/>

                <Input type="text" display={props.display}  />

            <Button  {...props} > Search </Button>
            <Button margin="50%" >
                { link ?
                (<Link to="/" style={{ textDecoration: 'none', color: 'white',width: '100%'}}>
                    Main page
                </Link>)
                :
                (<Link to="/Profile" style={{ textDecoration: 'none', color: 'white',width: '100%'}}>
                Edit profile
            </Link>)}
            </Button>
            <Button >
                <Link to="/Regpage" style={{ textDecoration: 'none', color: 'white' }}>
                    log out
                </Link>
            </Button>
        </Navbar>

    </div>
  );
};

export default Navigation;
