import styled from 'styled-components';

export const Logo = styled.img`
width: 45px;
  height: 45px;
  border-radius: 25%;
  position: fixed;
  top:7px;
  left:5px;
  
  
`
export const Navbar = styled.div`
width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  background:#337BAE;
  height: 60px;
  z-index: 999;
`

export const Input = styled.input`
width: 17%;
  height: 35px;
  border-radius: 3%;
  outline: none;
  border: none;
  background-color: #FCFCFA;
  display: ${({display}) => display ? 'none' : 'block'};
  
  
`
