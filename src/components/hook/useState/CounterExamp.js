import React, { useState } from "react";

const CounterExamp = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const decrement = () => {
    setCount(count - 1);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="Layout">
      Count {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={decrement}>-1</button>
      <br></br>
      <input placeholder="enter name" onChange={onChangeName} />
      Name : {name}
    </div>
  );
};

export default CounterExamp;
