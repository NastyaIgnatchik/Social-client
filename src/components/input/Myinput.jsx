import React from "react";
import {Area,Button} from './myInput.js'

const Myinput = React.forwardRef((props,ref) => {
  return (
    <form>
      <Area
        ref={ref}
        value={props.value}
        placeholder="create post"
        onChange={props.onchange}
      />
      <Button onClick={props.onclick}>Publish</Button>
    </form>
  );
});

export default Myinput;
