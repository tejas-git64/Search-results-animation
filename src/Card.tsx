import {
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Tabs, { type Result } from "./components/Tabs/Tabs";

export default function Card() {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Result[] | null>(null);
  const deferredQuery = useDeferredValue(query);
  const memoizedData = useMemo(() => {
    const all = data
      ? data.filter((d) => {
          return (
            d.location.toLowerCase().includes(deferredQuery) ||
            d.name.toLowerCase().includes(deferredQuery)
          );
        })
      : null;
    const files = data
      ? data.filter(
          (d) =>
            !["user", "folder"].includes(d.type) &&
            (d.location.toLowerCase().includes(deferredQuery) ||
              d.name.toLowerCase().toLowerCase().includes(deferredQuery)),
        )
      : null;
    const people = data
      ? data.filter(
          (d) =>
            d.type === "user" &&
            (d.location.toLowerCase().includes(deferredQuery) ||
              d.name.toLowerCase().includes(deferredQuery)),
        )
      : null;
    const chats: Result[] | null = null;
    return { all, files, people, chats };
  }, [data, deferredQuery]);

  function close() {
    startTransition(() => {
      setQuery("");
      setIsExpanded(false);
    });
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch("/sample.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const allData = await res.json();
      if (allData) {
        setData(allData);
      }
    }
    if (!data) getData();
  }, [data]);

  return (
    <div
      className={`w-[440px] ${
        isExpanded ? "max-h-[440px]" : "max-h-[64px]"
      } flex h-auto flex-col items-start justify-start overflow-hidden overflow-y-hidden rounded-2xl border border-[#CDCDCD] bg-white pb-4 drop-shadow-lg transition-[440px] duration-1000 ease-in-out`}
    >
      <SearchBar
        query={query}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setQuery={setQuery}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        close={close}
      />
      <Tabs
        query={deferredQuery}
        isLoading={isLoading}
        isExpanded={isExpanded}
        setIsLoading={setIsLoading}
        {...memoizedData}
      />
    </div>
  );
}
