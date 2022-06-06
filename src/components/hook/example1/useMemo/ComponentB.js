import React, { useEffect } from "react";

let renderCount = 0;
const ComponentB = () => {
  useEffect(() => {
    renderCount++;
  });
  return <div>render count {renderCount}</div>;
};

export default ComponentB;
