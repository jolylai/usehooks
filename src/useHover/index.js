import { useEffect, useRef, useState } from "react";

const index = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const hnadleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", hnadleMouseOut);
      return () => {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", hnadleMouseOut);
      };
    }
  }, [ref.current]);
  return [ref, value];
};

export default index;
