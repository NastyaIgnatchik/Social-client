import React from "react";

const Myinput = (props) => {
  return (
    <form>
      <input
        value={props.value}
        placeholder="введите пост"
        onChange={props.onchange}
      />
      <button onClick={props.onclick}> создать пост</button>
    </form>
  );
};

export default Myinput;
