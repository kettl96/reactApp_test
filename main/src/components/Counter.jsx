import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={increment}>up</button>
      <button onClick={decrement}>down</button>
    </div>
  )
}

export default Counter