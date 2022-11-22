import React, {useMemo, useState} from 'react';
import { useEffect } from 'react';
import Post from '../../components/posts/Post.jsx';
import Navigation from '../../components/navigation/Nav.jsx';
import Textarea from '../../components/textarea/Textarea.jsx';


function MainPage() {
    const [text, setText] = useState('');
    const [query,setQuery] = useState();
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
      if(!text) {
          return;
      }
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

  const AllPosts = useMemo(() => {
        if (query ) {

                const search = posts.filter((post) => {
                    return post.text.includes(query);

                });
                return search;


        } else {
            return posts;

        }
    }, [posts, query])


  return (
    <div >
      <Navigation value={query} onchange={(e) => setQuery(e.target.value)} />
      <Textarea
        type="submit"
        value={text}
        onchange={(e) => setText(e.target.value)}
        onclick={AddPost}
        onkey={keyboard}
      />
        <div style={{ marginTop:"200px"}}>

            {AllPosts
        .map((e, index) => (
          <Post
            key={index}
            text={e.text}
            del={() => del(index)}
            id={index+1}

          />
        ))
        .reverse()}
        </div>

    </div>
  );
}

export default MainPage;
