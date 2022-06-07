import React, { useEffect } from "react";

let renderCount = 0;
const ComponentA = () => {
  useEffect(() => {
    renderCount++;
  });
  return <div>Component A : render count {renderCount}</div>;
};

export default ComponentA;
