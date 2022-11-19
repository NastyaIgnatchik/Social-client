import styled from 'styled-components';

export const Area = styled.textarea`
  width: ${({width}) => width ? '100%' : '51%'};
 margin: 20px 24% 0 25%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  background-color: #FCFCFA;
  resize: none;
  height: 60px;
  font-size: 14px;
  outline: none;
  border: none;
`;

export const Form = styled.form`
  width: 100%;
  top: 60px;
  height: 135px;
  border: none;
  background: #FFBEBD;
  position: fixed;
  z-index: 999;
`

