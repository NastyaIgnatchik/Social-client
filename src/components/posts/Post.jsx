import React from "react";
import heart from "../../assets/img/heart.png";
import { useState } from "react";
import './Post.css'

const Post = (props) => {

  const [likes, setLikes] = useState(0);

  function liking() {
    setLikes(likes + 1);
    console.log(likes);
  }

  return (
    <div className="Post">
      <span className="delete" onClick={props.del}>+</span>
      <h1>Cody</h1>
      <span>{props.text}</span>

      <div className="likes">
        <img onClick={liking} className="heart" src={heart} alt="heart" />
        {likes}
      </div>
    </div>
  );
};

export default Post;
