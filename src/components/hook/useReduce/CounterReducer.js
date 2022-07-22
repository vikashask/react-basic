import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREMENT":
      return { count: state.count - 1, showText: state.showText };
    case "RESET":
      return { count: 0, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div className="Layout">
      Count : {state.count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        0
      </button>
      {state.showText && <p>Text is here</p>}
    </div>
  );
};

export default CounterReducer;
