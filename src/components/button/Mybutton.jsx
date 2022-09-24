import React from 'react';
import styled from 'styled-components'; 

const But = styled.button`
display: inline;
float: right;
margin: 0 10px 0 0 ;
background:rgb(212, 197, 247);
width: 8%;
height: 30px;
`
const Mybutton = (props) => {

return (
    <But>{props.children} </But>
    );
};

export default Mybutton;