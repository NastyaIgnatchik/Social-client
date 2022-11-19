import React from 'react';
import { Area,Form } from './Textarea.js';
import {AreaButton} from "../button/MyButton.js";

const Textarea = (props) => {
  return (

    <Form>
      <Area width={props.width}
        value={props.value}
        placeholder="create post"
        onChange={props.onchange}
        onKeyPress={props.onkey}
      />
        <AreaButton onClick={props.onclick} >Create post</AreaButton>
    </Form>
  );
};

export default Textarea;
