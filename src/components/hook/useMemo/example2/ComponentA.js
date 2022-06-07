import React, { useEffect } from "react";

let renderCount = 0;
const ComponentA = (props) => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      Component A render {renderCount} times Counter:{props.count}
    </div>
  );
};

export default ComponentA;
