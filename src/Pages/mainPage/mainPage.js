import React, { useState } from 'react';
import { useEffect } from 'react';
import Mymodal from '../../components/modal/Mymodal.jsx';
import Post from '../../components/posts/Post.jsx';
import Nav from '../../components/navigation/Nav.jsx';
import Myinput from '../../components/input/Myinput.jsx';

function MainPage() {
    const [text, setText] = useState('');

    const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('name');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(posts));
  }, [posts]);

  function AddPost(e) {
    e.preventDefault();
    const obj = {
      text,
    };
    setPosts([...posts, obj]);
    setText('');
  }





  function del(index) {
    console.log(index);
    setPosts([...posts.slice(0, index), ...posts.slice(index + 1)]);

  }

function keyboard (e){
  if (e.code=== "Enter") {
    AddPost(e);
}
  }



  return (
    <div>
      <Nav />
      <Myinput
        type="submit"
        value={text}
        onchange={(e) => setText(e.target.value)}
        onclick={AddPost}
        onkey={keyboard}
      />
      {posts
        .map((e, index) => (
          <Post
            key={index}
            text={e.text}
            del={() => del(index)}

          />
        ))
        .reverse()}


    </div>
  );
}

export default MainPage;
