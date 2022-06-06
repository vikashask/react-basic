import React, { useMemo, useState } from "react";
import ComponentA from "./ComponentA";

export default function UseMemoMain() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  /* 
    TODO: if you will render ComponentA in place of memoComponentA then 
    ComponentA will render always
  */
  const memoComponentA = useMemo(() => {
    return <ComponentA />;
  }, []);

  const memoComponentAWithCount = useMemo(() => {
    return <ComponentA />;
  }, [count]);

  return (
    <div className="App">
      <h1>UseMemo</h1>
      <button onClick={increment}> increase +1</button>
      <h2>Start {count}</h2>
      {memoComponentA}
      <h2>ComponentA With Count dependency</h2>
      {memoComponentAWithCount}
    </div>
  );
}
