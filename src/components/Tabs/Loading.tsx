export default function Loading() {
  return (
    <div className="animate-fadeinout h-80 w-full px-5 pt-[11px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            animationDelay: `${i * 100}ms`,
            animationDuration: "1000ms",
          }}
          className="flex h-12 w-full shrink-0 animate-pulse items-center justify-start border-b border-neutral-100 bg-white"
        >
          <div className="mr-3 h-7 w-7 shrink-0 rounded-md bg-neutral-200"></div>
          <div className="flex flex-col items-start justify-center space-y-[6px]">
            <div className="h-2 w-48 rounded-sm bg-neutral-200"></div>
            <div className="h-2 w-28 rounded-sm bg-neutral-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
