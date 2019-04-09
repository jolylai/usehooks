import React, { useRef, useState } from "react";
import "./App.css";
import useOnClickOutside from "./useOnClickOutside";

const App = () => {
  const ref = useRef();
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
};

export default App;
