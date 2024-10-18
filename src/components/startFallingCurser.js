import React, { useEffect } from "react";

const StarCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const star = document.createElement("div");
      star.classList.add("star");
      document.body.appendChild(star);

      star.style.left = `${event.pageX}px`;
      star.style.top = `${event.pageY}px`;

      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default StarCursor;
