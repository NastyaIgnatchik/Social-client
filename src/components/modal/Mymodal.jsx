import React from "react";
import './Mymodal.css'

const Mymodal = (props) => {

  return (

    <div className={props.isActive ? "bgr" : "close"}>
      <div className="modal">
        <div>Вы действительно хотите удалить пост?</div>
        
        <button className="butt" onClick={props.del}>Да</button>
        <button className="butt"> Нет</button>
      </div>
    </div>
  );
};

export default Mymodal;
