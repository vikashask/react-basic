import React, { useEffect } from "react";

let renderCount = 0;
const ComponentA = () => {
  useEffect(() => {
    renderCount++;
  });
  return <div>render count {renderCount}</div>;
};

export default ComponentA;
