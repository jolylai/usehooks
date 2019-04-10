import React, { useReducer } from "react";

const initialState = { count: 0 };

const init = initState => initState;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(initialState);
    default:
      break;
  }
};

const index = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      Count:{state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default index;
