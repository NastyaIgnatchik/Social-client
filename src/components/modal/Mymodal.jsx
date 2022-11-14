import React from 'react';
import { Open, Modal, Butt, Close } from './myModal.js';

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
            <Butt onClick={foo} > Да</Butt>
            <Butt onClick={props.tog}> Нет</Butt>
          </Modal>
        </Open>
      ) : (
     <Close/>
      )}
    </div>
  );
};

export default Mymodal;
