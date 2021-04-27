import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>+</button>
      {count}
      <button
        onClick={() => {
          setCount((prevValue) => prevValue - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
