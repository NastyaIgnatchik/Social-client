import React, { useState } from "react";
import { useEffect } from "react";
import Mymodal from "../../components/modal/Mymodal.jsx";
import Post from "../../components/posts/Post.jsx";
import Nav from "../../components/navigation/Nav.jsx";
import Myinput from "../../components/input/Myinput";

function MainPage() {
  const [text, setText] = useState("");

  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(posts));
  }, [posts]);

  function AddPost(e) {
    e.preventDefault();
    const obj = {
      text,
    };
    setPosts([...posts, obj]);
  }

  function del(index) {
    console.log(index);
    setPosts([...posts.slice(0, index), ...posts.slice(index + 1)]);
  }

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <Nav />
      <Myinput
        value={text}
        onchange={(e) => setText(e.target.value)}
        onclick={AddPost}
      />

      {posts.map((e, index) => (
        <Post
          key={index}
          text={e.text}
          del={() => del(index)}
          tog={toggleClass}
        />
      ))}

      <Mymodal isActive={isActive} posts={posts} del={del} />
    </div>
  );
}

export default MainPage;
