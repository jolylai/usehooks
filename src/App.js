import React from "react";
import "./App.css";
import useHover from "./useHover";
import useWindowSize from "./useWindowSize";

const App = () => {
  const [hoverRef, isHovered] = useHover();
  const windowSize = useWindowSize();
  return (
    <div>
      <div>{`with ${windowSize.width}  height${windowSize.height}`}</div>
      <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>
    </div>
  );
};

export default App;
