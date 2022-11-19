import React from 'react';
import { Open, Modal, Butt, Close } from './myModal.js';
import {Button, ModalButton} from "../button/MyButton.js";

const Mymodal = (props) => {
let Active = props.isActive;


function foo (){
  props.del();
  props.tog();
}

  return (
    <div>
      {Active  ? (
        <Open onClick={props.tog} >
          <Modal>
            Вы действительно хотите удалить пост?
            <ModalButton onClick={foo} > Да</ModalButton>
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
