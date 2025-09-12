import { useRef, useEffect } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    const shrinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("scale-90");
        cursorRef.current.classList.remove("scale-100");
      }
    };
    const enlargeCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("scale-90");
        cursorRef.current.classList.add("scale-100");
      }
    };
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", shrinkCursor);
    window.addEventListener("mouseup", enlargeCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.addEventListener("mousedown", shrinkCursor);
      window.addEventListener("mouseup", enlargeCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        transform: "translate(-50%, -50%)",
      }}
      className="ease pointer-events-none fixed z-50 h-7 w-7 scale-100 rounded-full border border-neutral-400 bg-[#0001] transition-transform duration-300"
    />
  );
}
