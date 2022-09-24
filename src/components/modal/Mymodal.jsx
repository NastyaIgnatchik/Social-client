import React from "react";
import styled from "styled-components";

const Open = styled.div`
  background: grey;
  position: fixed;
  width: 100%;
  height: auto;
  z-index: 999;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Close = styled.div`
  display: none;
`;
const Modal = styled.div`
  background: white;
  z-index: 999;
  margin: 30% 25% 30% 25%;
  text-align: center;
`;
const Butt = styled.button`
  margin: 10px;
  width: 50px;
`;

const Mymodal = (props) => {
  return (
    <div>
      {props.isActive ? (
        <Open>
          <Modal>
            Вы действительно хотите удалить пост?
            <Butt onClick={props.del}> Да</Butt>
            <Butt> Нет</Butt>
          </Modal>
        </Open>
      ) : (
        <Close />
      )}
    </div>
  );
};

export default Mymodal;
