import React, { useMemo, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default function Exam2UseMemoMain() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const incrementA = () => {
    setCountA(countA + 1);
  };

  const incrementB = () => {
    setCountB(countB + 1);
  };
  /* 
    TODO: if you will render ComponentA in place of memoComponentA then 
    ComponentA will render always
  */
  const memoComponentA = useMemo(() => {
    return <ComponentA />;
  }, []);

  return (
    <div className="App">
      <h1>UseMemo Example 2</h1>
      <button onClick={incrementA}> increase A +1</button>
      <button onClick={incrementB}> increase B +1</button>
      <h2>Start {countA}</h2>
      {memoComponentA}
      <ComponentA count={countA} />
      <ComponentB count={countB} />
    </div>
  );
}
