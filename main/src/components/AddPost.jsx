import React, { useState, useRef } from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';


const AddPost = ({create}) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <Input
        type='text'
        placeholder='post title'
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <Input
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='disruption' />
      <Button onClick={addNewPost}>create post</Button>
    </form>
  )
}

export default AddPost;