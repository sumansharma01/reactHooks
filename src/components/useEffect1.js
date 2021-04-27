import React, { useEffect, useState } from "react";

function useEffect1() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevValue) => prevValue + 1);
  };
  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  }, [count]);
  return (
    <div>
      <button onClick={handleClick}>Click {count}</button>
    </div>
  );
}

export default useEffect1;
