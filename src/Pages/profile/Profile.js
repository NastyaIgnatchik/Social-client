import styled from "styled-components";

export const Container = styled.div`
  background: white;
  width: 60%;
  margin: 0 20% 0 20%;
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
export const Form = styled.form`
  width: 50%;
  margin: 30px 25% 0 25%;
  line-height: 47px;
`;
export const Input = styled.input`
  float: right;
  margin: 10px 0 10px 0;
  width: 30%;
`;
export const SaveProfil = styled.button`
  width: 20%;
  margin: 30px 40% 30px 40%;
  height: 30px;
  background: rgb(212, 197, 247);
  cursor: pointer;
`;
export const Hr = styled.hr`
  width: 80%;
`;
