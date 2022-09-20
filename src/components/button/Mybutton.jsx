import React from 'react';
import './Mybutton.css'
const Mybutton = (props) => {

return (
    <button className='but'>{props.children}</button>
    
    );
};

export default Mybutton;