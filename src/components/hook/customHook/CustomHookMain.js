import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default function CustomHookMain() {
  const [count, setCount] = useState(0);

  /* 
  Below function will be called from custom hook only inside compoent A and B
  */
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Custome Hook</h1>
      <ComponentA />
      <ComponentB />
    </div>
  );
}
