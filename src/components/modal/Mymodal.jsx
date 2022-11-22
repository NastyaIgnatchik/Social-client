import React from 'react';
import { Open, Modal, Butt, Close } from './MyModal.js';
import {Button, ModalButton} from "../button/MyButton.js";

const Mymodal = (props) => {
let Active = props.isActive;


function func (){
  props.del();
  props.tog();
}

  return (
    <div>
      {Active  ? (
        <Open onClick={props.tog} >
          <Modal>
            Вы действительно хотите удалить пост?
            <ModalButton onClick={func} > Да</ModalButton>
            <ModalButton onClick={props.tog}> Нет</ModalButton>
          </Modal>
        </Open>
      ) : (
     <Close/>
      )}
    </div>
  );
};

export default Mymodal;
