import { useState, useEffect } from "react";

// React Hook
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  // WHAT
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

export default function MouseTracker() {
  const { x, y } = useMousePosition();
  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
}
