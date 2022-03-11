import React, { useState, useRef } from 'react';
import './App.css'
import Post from './components/Post';
import Button from './components/UI/button/Button';
import Input from './components/UI/input/Input';
import AddPost from './components/AddPost';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'js', body: 'some info' },
    { id: 2, title: 'js22', body: 'some info' },
    { id: 3, title: 'js', body: 'some info' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <AddPost create={createPost} />
      {posts.map((post, index) =>
          <Post remove={removePost} number={index + 1} post={post} key={post.id} />
        )}
    </div>
  );
}

export default App;
