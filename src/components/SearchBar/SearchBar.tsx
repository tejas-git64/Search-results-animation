import { startTransition, useEffect, useRef, useState } from "react";
import loading from "../../assets/icons8-loading.gif";
import search from "../../assets/search-4-svgrepo-com.svg";

export default function SearchBar({
  query,
  setQuery,
  isExpanded,
  setIsExpanded,
  close,
}: {
  query: string;
  isExpanded: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
}) {
  const searchEl = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  function toggleLoadingState(e: React.ChangeEvent<HTMLInputElement>) {
    startTransition(() => {
      setQuery(String(e.target.value));
      if (e.target.value.trim() === "") {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
      setIsExpanded(true);
    });
  }

  useEffect(() => {
    function focusSearch(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "s") {
        e.preventDefault();
        searchEl.current?.focus();
      }
    }
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  return (
    <div className="w-full h-16 flex items-center shrink-0 justify-around pr-2 pl-1">
      <div className="w-full flex items-center justify-start">
        <img
          src={isLoading ? loading : search}
          alt="search-icon"
          className={`${isLoading ? "w-5 mr-2 ml-3" : "w-8 mr-1 ml-2"}`}
        />
        <input
          type="search"
          ref={searchEl}
          value={query}
          onFocus={(e) => (e.target.placeholder = "")}
          onChange={toggleLoadingState}
          tabIndex={0}
          onBlur={(e) => (e.currentTarget.placeholder = "Searching is easier")}
          className="w-full pb-0.5 placeholder:text-neutral-400 placeholder:tracking-normal placeholder:font-medium h-full font-medium outline-none tracking-tight pr-2"
          placeholder="Searching is easier"
        />
      </div>
      <div className="w-auto shrink-0 px-2 flex items-center justify-center">
        {isExpanded ? (
          <button
            className="outline-0 text-xs font-semibold underline cursor-pointer"
            onClick={() => {
              close();
              setIsLoading(false);
            }}
          >
            Clear
          </button>
        ) : (
          <div className="w-auto text-xs h-full text-neutral-500 flex items-center justify-center">
            <div className="w-min border-[0.5px] mt-0.5 rounded-lg pb-0.5 border-neutral-300 flex mr-2 items-center justify-center">
              <p className="border-neutral-200 px-2 border-b-[0.5px] pb-0.5 text-extrabold pt-0.5 rounded-md">
                s
              </p>
            </div>
            <p className="border-neutral-600 pb-0.5 text-extrabold">
              quick access
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
