import React from 'react';
import heart from '../../assets/img/heart.png';
import { useState } from 'react';
import { Posts, Cross, Title, Likes, Heart } from './Post.js';
import Mymodal from '../modal/Mymodal.jsx';



const Post = (props) => {
  const [likes, setLikes] = useState(0);

  function liking() {
    setLikes(likes + 1);
    console.log(likes);

  }
  const Tit = localStorage.getItem('title');
  const tit = JSON.parse(Tit);
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };


  return (
    <Posts>
      <Cross onClick={toggleClass}>+</Cross>
      <Title>{tit}</Title>
      <span>{props.text}</span>
      <Likes>
        <Heart onClick={liking} src={heart} alt="heart" /> {likes}
      </Likes>
      <Mymodal isActive={isActive}  del={props.del} tog={toggleClass}  />
    </Posts>

  );
};

export default Post;
