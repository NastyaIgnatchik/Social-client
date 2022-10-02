import React from 'react';
import { Open, Modal, Butt, Close } from './myModal.js';

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
