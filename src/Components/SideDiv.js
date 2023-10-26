import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function TextAnimation() {
  const textRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '<span style="font-size: 40px;">Hey! Check out our new <b>Blogs 🌠</b></span>',
        '<span style="font-size: 40px;">Hey! Check out our new <b>Articles ✏️</b></span>',
        '<span style="font-size: 40px;">Hey! Check out our new <b>Posts 🤩</b></span>',
        '<span style="font-size: 40px;">Hey! Check out our new <b>News 📰</b></span>',
      ],
      typeSpeed: 30,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      smartBackspace: true,
    };

    typedInstance.current = new Typed(textRef.current, options);

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return <span ref={textRef}></span>;
}

export default TextAnimation;
