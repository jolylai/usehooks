import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { isMobile } from "../utils/exenv";

const index = ref => {
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log("rect: ", rect);
      const curRefWidth = rect.width;
      console.log("curRefWidth: ", curRefWidth);
      const curRefHeight = rect.height;

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
        background: var(--color-ripple);
        top:${posMouseY - curRefHeight}px;
        left:${posMouseX - curRefWidth}px;
        pointer-events: none;
        transform:scale(1);
        background: red`;

        rippleEffect.style.cssText = baseCSS;

        // ref.current.style.overflow = 'hidden'
        ref.current.style.position = "relative";
        ref.current.appendChild(rippleEffect);

        setTimeout(() => {
          rippleEffect.style.cssText =
            baseCSS + `transform:scale(1); opacity: 0;`;
        }, 5);

        // setTimeout(function() {
        //   rippleEffect.remove();
        // }, 700);
      };

      ref.current.addEventListener("click", handleClick);
    }
  }, []);
};

index.propTypes = {};

export default index;
