import { useState, useEffect, useRef } from "react";

function AnimatedCount({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(0);

  useEffect(() => {
    setCount(0);
    startTimeRef.current = null;

    function animate(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / 1000, 1);
      const currentCount = Math.floor(progress * value);
      setCount(currentCount);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    }

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [value]);

  return (
    <p className="w-4 rounded-sm bg-[#F1F1F1] text-[10px] font-semibold text-neutral-500">
      {count}
    </p>
  );
}

export default AnimatedCount;
