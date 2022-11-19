import styled from 'styled-components';

export const Button = styled.div`
  width: 10%;
  height: 40px;
  border-radius: 7%;
  line-height: 40px;
  text-align: center;
  margin-right: 5px;
  
  background:#337BAE;
  display: ${props => props.button || 'block'};
  margin-left: ${props => props.margin || '0'};
  
  color: white;
  
  &:hover{
  border: 2px solid;
    border-color: #1A405F;}
  
`
export const AreaButton = styled(Button)`
margin: 0 0 0 66%;
  font-size: 14px;
`
export const ProfileButton = styled(Button)`
  font-size: 14px;
  margin: 40px 0 0 38%;
  width: 25%;
  
`
export const LogButton = styled(Button)`
  font-size: 16px;
  margin: 40px 0 20px 42%;
  width: 20%;
  
`
export const CommentsButton = styled(Button)`
  font-size: 14px;
  float: right;
  width: 150px;
  margin-right: 0;

`
export const ModalButton = styled(Button)`
  width: 15%;
  height: 25px;
  display: inline-block;
  line-height: 25px;
  margin-left: 10px;

`
