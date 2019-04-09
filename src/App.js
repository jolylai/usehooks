import React from "react";
import "./App.css";

import useLockBody from "./useLockBody";

const App = () => {
  useLockBody();

  return (
    <div className="App">
      <h1>useHooks</h1>
    </div>
  );
};

export default App;
