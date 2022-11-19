import styled from 'styled-components';

export const Container = styled.div`
  background: #FCFCFA;
  width: 60%;
  margin: 100px 20% 50px 20%;
  padding-bottom: 30px;
  position: relative;
`;
export const Text = styled.div`
  text-align: center;
  position: absolute;
  left: 38%;
  top: 25%;
  font-size: 20px;
`;
export const Avatar = styled.img`
  width: 40%;
  margin: 15px 30% 0 30%;
  &:hover {
    opacity: 0.4;
  }
`;
export const ProfileForm = styled.form`
  width:  ${({width}) => width ? '70%' : '55%'};
  margin-left:  ${({width}) => width ? '17%' : '25%'};
  margin-right:  ${({width}) => width ? '17%' : '25%'};
  margin-top: 30px;
  line-height: 47px;
  
`;
export const ProfileInput = styled.input`
  float: right;
  margin: 0 0 5px 0;
  width: 52%;
  height: 35px;
  outline: none;
`;

export const Hr = styled.hr`
  width: 80%;
  margin: 20px 10% 20px 10%;
`;
