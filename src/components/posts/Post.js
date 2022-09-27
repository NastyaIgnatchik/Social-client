import styled from "styled-components";

export const Posts = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 25% 0 25%;
  padding: 5px 10px 0 10px;
  margin-bottom: 30px;
  word-wrap: break-word;
  background-color: rgb(240, 234, 253);
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
`;
export const Cross = styled.span`
  margin: 2px 7px 0 7px;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(45deg);
  font-size: 20px;
`;
export const Title = styled.h1`
  font-size: 17px;
  display: block;
  margin: 7px 0 5px 5px;
`;
export const Likes = styled.div`
  text-align: right;
  font-size: 20px;
`;
export const Heart = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 3px;
`;