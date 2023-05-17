import React, { useReducer, useState } from "react";
function Reducer(state, action) {
  switch (action.type) {
    case "increament":
      return { counter: state.counter + 1 };
    case "decreament":
        return { counter: state.counter - 1 };
    default:
      return state;
  }
}
export default function UseReduce() {
  const [state, dispatch] = useReducer(Reducer, { counter: 0 });
  const [count, setcount] = useState(0);

  const increamentHandler = () => {
    dispatch({ type: "increament" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decreament" });
  };
  return (
    <div>
      <button onClick={increamentHandler} className="btn btn-success">
        increament
      </button>
      <p>{state.counter}</p>
      <button onClick={decrementHandler} className="btn btn-danger">
        decreament
      </button>
    </div>
  );
}
