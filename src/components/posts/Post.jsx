import React from 'react';
import heart from '../../assets/img/heart.png';
import { useState } from 'react';
import {CommentsHr, Comments,Posts, Cross, Title, Likes, Heart } from './Post.js';
import Mymodal from '../modal/Mymodal.jsx';
import UseComments from "../myHooks/UseComments";
import {Area} from "../textarea/Textarea";
import {CommentsButton} from "../button/MyButton.js";




const Post = (props) => {
  const [likes, setLikes] = useState(0);
 const id = props.id;
  function liking() {
    setLikes(likes + 1);
    console.log(likes);

  }
  const UserName = localStorage.getItem('user');
  const UserN = JSON.parse(UserName);



  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };


    const [com, setComm] = useState( [{name:""}]);

    const [addCom, setaddCom] =useState(false);
    const [open,setOpen] = useState(true);
    const [val, setVal] =useState();
  async function server () {
        setOpen(!open)
        setaddCom(!addCom)

        const response = await UseComments(id);

        if(open){
            setComm(response.data);
            console.log(com) ;
        }else{
            setComm([{name:''}])
        }


    }
    function AddValue (e){
        e.preventDefault();
        const obj = {
            val,
        };

        setComm([...com,{email: '@naste4ka'},{name:val}]);


    }




  return (
    <Posts>
      <Cross onClick={toggleClass}>+</Cross>
      <Title>{UserN}</Title>
      <span>{props.text}</span>
      <Likes>
          <CommentsHr/>
          <Comments  onClick={server}>comments</Comments>
          <Heart onClick={liking} src={heart} alt="heart" /> {likes}

      </Likes>

        {
            com.map((e) => <div style={{marginLeft: "10px"}}><div style={{fontWeight:"bold"}}> { e.email}</div> <div>{e.name}  </div>  </div>  )
        }
        {
            addCom?  <div style={{margin: "10px"}}> <Area width style={{margin: "0"}}  type="text"  value={val} onChange={(event) => {setVal(event.target.value)}} /> <CommentsButton onClick={AddValue}> Let's to comment </CommentsButton>  </div> : ''
        }
      <Mymodal isActive={isActive}  del={props.del} tog={toggleClass}  />
    </Posts>

  );
};

export default Post;
