import styled from "styled-components";

export const Open = styled.div`
  background: grey;
  position: fixed;
  width: 100%;
  height: auto;
  z-index: 999;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Close = styled.div`
  display: none;
`;
 export const Modal = styled.div`
  background: white;
  z-index: 999;
  margin: 30% 25% 30% 25%;
  text-align: center;
`;
 export const Butt = styled.button`
  margin: 10px;
  width: 50px;
`;