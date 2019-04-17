import React, { useReducer, useRef } from "react";

import useRipple from "./useRipple";

import "./App.css";
const App = () => {
  const ref = useRef();
  useRipple(ref);

  return (
    <div ref={ref} style={{ padding: 8, margin: 8, background: "#eee" }}>
      button
    </div>
  );
};

export default App;
