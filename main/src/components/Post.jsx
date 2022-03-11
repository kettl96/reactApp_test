import React from 'react'
import './../App.css'
import Button from './UI/button/Button'


const Post = (props) => {
console.log(props);

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{props.number}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <Button onClick={()=> props.remove(props.post)} >delete</Button>
    </div>
  )
}

export default Post