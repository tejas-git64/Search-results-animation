import { memo, startTransition, useEffect, useRef } from "react";
import loading from "../../assets/icons8-loading.gif";
import search from "../../assets/search-4-svgrepo-com.svg";

const SearchBar = memo(
  ({
    query,
    setQuery,
    isLoading,
    setIsLoading,
    isExpanded,
    setIsExpanded,
    close,
  }: {
    query: string;
    isExpanded: boolean;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    close: () => void;
  }) => {
    const searchEl = useRef<HTMLInputElement>(null);
    function toggleLoadingState(e: React.ChangeEvent<HTMLInputElement>) {
      startTransition(() => {
        setQuery(String(e.target.value));
        if (e.target.value.trim() === "") {
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        } else {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        }
        setIsExpanded(true);
      });
    }

    useEffect(() => {
      function focusSearch(e: KeyboardEvent) {
        if (e.key.toLowerCase() === "s") {
          if (document.activeElement !== searchEl.current) e.preventDefault();
          searchEl.current?.focus();
        }
      }
      window.addEventListener("keydown", focusSearch);
      return () => window.removeEventListener("keydown", focusSearch);
    }, []);

    return (
      <div className="flex h-16 w-full shrink-0 items-center justify-around pr-2.5 pl-1">
        <div className="flex w-full items-center justify-start">
          <img
            src={isLoading ? loading : search}
            alt="search-icon"
            className={`${isLoading ? "mt-[1px] mr-[10.35px] ml-[13px] w-[22px] opacity-50" : "mt-[5px] mr-1 ml-2 w-9.5"}`}
          />
          <input
            type="search"
            ref={searchEl}
            value={query}
            onFocus={(e) => (e.target.placeholder = "")}
            onChange={toggleLoadingState}
            tabIndex={0}
            onBlur={(e) =>
              (e.currentTarget.placeholder = "Searching is easier")
            }
            className={`w-full ${
              !isExpanded ? "animate-fadein" : ""
            } h-full pr-2 text-lg font-medium tracking-tight outline-none placeholder:font-normal placeholder:tracking-normal placeholder:text-neutral-400`}
            placeholder="Searching is easier"
          />
        </div>
        <div className="flex w-auto shrink-0 items-center justify-center px-2">
          {isExpanded ? (
            <button
              className={`border-b text-xs leading-3.5 outline-0 duration-500 ${
                isExpanded ? "animate-fadein" : "animate-fadeinout"
              } font-medium text-black`}
              onClick={() => {
                close();
                setIsLoading(false);
              }}
            >
              Clear
            </button>
          ) : (
            <div className="animate-fadein flex h-full w-auto items-center justify-center text-xs text-neutral-500 duration-300">
              <div className="mt-0.5 mr-2 flex w-min items-center justify-center rounded-lg border-[0.5px] border-neutral-300 pb-0.5">
                <p className="text-extrabold rounded-md border-b-[0.5px] border-neutral-200 px-2 py-1">
                  s
                </p>
              </div>
              <p className="text-extrabold border-neutral-600 pb-0.5">
                quick access
              </p>
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default SearchBar;
