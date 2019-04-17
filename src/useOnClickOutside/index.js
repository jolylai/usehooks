import { useEffect } from "react";

const index = (ref, handler) => {
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };

    // window 和 document
    // 不是监听 click
    // click 相当于 mousedown 和 mouseup 依次触发后才会触发
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default index;
