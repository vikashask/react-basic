import { useState } from 'react';

const useCount = (intialCouter=0)=>{
    const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return [count,increment,decrement,reset]
}

export default useCount