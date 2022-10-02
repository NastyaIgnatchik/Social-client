import React from 'react';
import { Area, Button } from './myInput.js';

const Myinput = (props) => {
  return (
    <form>
      <Area
        value={props.value}
        placeholder="create post"
        onChange={props.onchange}
      />
      <Button onClick={props.onclick}>Publish</Button>
    </form>
  );
};

export default Myinput;
