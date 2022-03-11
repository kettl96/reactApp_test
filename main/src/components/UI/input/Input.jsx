import React from "react";
import s from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

  return (    
      <input ref={ref} className={s.input} {...props} />
  )
})

export default Input