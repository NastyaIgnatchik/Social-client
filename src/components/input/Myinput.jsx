import React from "react";
import {Area,Button} from './myInput.js'

const Myinput = (props) => {
  return (
    <form>
      <Area
        value={props.value}
        placeholder="введите пост"
        onChange={props.onchange}
      />
      <Button onClick={props.onclick}> создать пост</Button>
    </form>
  );
};

export default Myinput;
