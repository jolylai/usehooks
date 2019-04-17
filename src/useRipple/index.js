import { useEffect } from "react";

import { isMobile } from "../utils/exenv";

const index = ref => {
  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const curRefWidth = rect.width;
    const curRefHeight = rect.height;

    const originOverflow = ref.current.style.overflow;
    const originPosition = ref.current.style.position;

    const handleClick = e => {
      let posMouseX = 0;
      let posMouseY = 0;

      if (isMobile) {
        posMouseX = e.changedTouches[0].pageX - rect.left;
        posMouseY = e.changedTouches[0].pageY - rect.top;
      } else {
        posMouseX = e.pageX - rect.left;
        posMouseY = e.pageY - rect.top;
      }

      const rippleEffect = document.createElement("div");

      const baseCSS = `position: absolute;
        width: ${curRefWidth * 2}px;
        height: ${curRefHeight * 2}px;
        transition: all linear 700ms;
        transition-timing-function:cubic-bezier(0.250, 0.460, 0.450, 0.940);
        border-radius: 50%;
        background: rgba(255,255,255,0.8);
        top:${posMouseY - curRefHeight}px;
        left:${posMouseX - curRefWidth}px;
        pointer-events: none;
        transform:scale(0);`;

      rippleEffect.style.cssText = baseCSS;

      ref.current.style.overflow = "hidden";
      ref.current.style.position = "relative";
      ref.current.appendChild(rippleEffect);

      setTimeout(() => {
        rippleEffect.style.cssText =
          baseCSS + `transform:scale(1); opacity: 0;`;
      }, 5);

      setTimeout(function() {
        rippleEffect.remove();
      }, 700);
    };

    ref.current.addEventListener("click", handleClick);
    return () => {
      ref.current.style.overflow = originOverflow;
      ref.current.style.position = originPosition;
      ref.current.removeEventListener("click", handleClick);
    };
  }, [ref]);
};

export default index;
