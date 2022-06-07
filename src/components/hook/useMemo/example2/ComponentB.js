import React, { useEffect } from "react";

let renderCount = 0;
const ComponentB = (props) => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      Component B render {renderCount} times Counter:{props.count}
    </div>
  );
};

export default ComponentB;
