import React, { useEffect } from "react";
import heart from "../../assets/img/heart.png";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Input } from "../../Pages/Login/Login";

const Posts = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 25% 0 25%;
  padding: 5px 10px 0 10px;
  margin-bottom: 30px;
  word-wrap: break-word;
  background-color: rgb(240, 234, 253);
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
 
`;
const Cross = styled.span`
  margin: 2px 7px 0 7px;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(45deg);
  font-size: 20px;
`;
const Title = styled.h1`
  font-size: 17px;
  display: block;
  margin: 7px 0 5px 5px;
`;
const Likes = styled.div`
  display:flex;
  flex-direction: row-reverse;
  justify-content: end;
  font-size: 20px;
  align-items: center;
`;
const Heart = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  order: -3;
  
`
const Comments = styled.div`
  margin: 0 5px;
  font-size: 15px;
  cursor: pointer;
`
const DivComments = styled.div`
 
`
const TitleComments = styled.h1`
font-size: 15px;
  margin: 0;
  
`
const AddCom = styled.div`
margin:  10px ;
`
const InputCom = styled.textarea`
  width: 100%;
 height: 50px;
  margin: 0;
`
const ButCom = styled.button`
float:right;
  background:rgb(212, 197, 247);
  
`
const Post = (props) => {
  const [likes, setLikes] = useState(0);
 const [com, setComm] = useState([{name:''}])
  const [addCom, setaddCom] =useState(false)
  function liking() {
    setLikes(likes + 1);
    console.log(likes);
  }

const [open,setOpen] = useState(true)
  async function getComments (id = props.id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
      params:{
        _id: id
      }
    } );
    return response;


  }
  console.log(open)
  async function server () {
    setOpen(!open)
    setaddCom(!addCom)

    const response = await getComments();

    if(open){
      setComm(response.data);
      console.log(com) ;
    }else{
      setComm([{name:''}])
    }


  }
 const [val, setVal] =useState()

  function AddValue (e){
    e.preventDefault();
    const obj = {
      val,
    };
    console.log(obj)
    setComm([...com,{email: 'naste4ka'},{name:val}]);
    console.log(com)
  }

  return (
    <Posts>
      <Cross onClick={props.del}>+</Cross>
      <Title>Cody </Title>
      <span>{props.text}</span>
      <Likes>

        <Heart onClick={liking} src={heart} alt="heart" /> {likes}


        <Comments  onClick={ server  }>comments</Comments>

      </Likes>
      {
        com.map((e) => <DivComments><TitleComments> { e.email}</TitleComments> <div>{e.name}  </div>  </DivComments>  )
      }
      {
        addCom?  <AddCom> <InputCom  type="text"  value={val} onChange={(event) => {setVal(event.target.value)}} /> <ButCom onClick={AddValue}> Let's to comment </ButCom>  </AddCom> : ''
      }
    </Posts>
  );
};

export default Post;
