import React from "react";
import useCount from "./cusHook/useCount";
const ComponentA = () => {
  const [count, increment, decrement, reset] = useCount(10);
  return (
    <div>
      <p>Component A</p>

      <button onClick={increment}> increase +1</button>
      <button onClick={decrement}> increase -1</button>
      <button onClick={reset}> Reset 0</button>

      <p>{count}</p>
    </div>
  );
};

export default ComponentA;
