import React from 'react';
import heart from '../../assets/img/heart.png';
import { useState } from 'react';
import { Posts, Cross, Title, Likes, Heart } from './Post.js';



const Post = (props) => {
  const [likes, setLikes] = useState(0);

  function liking() {
    setLikes(likes + 1);
    console.log(likes);

  }
  const Tit = localStorage.getItem('title');
  const tit = JSON.parse(Tit);





  return (
    <Posts>
      <Cross onClick={props.del}>+</Cross>
      <Title>{tit}</Title>
      <span>{props.text}</span>
      <Likes>
        <Heart onClick={liking} src={heart} alt="heart" /> {likes}
      </Likes>
    </Posts>
  );
};

export default Post;
