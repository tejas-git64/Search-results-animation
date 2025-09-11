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
  const [data, setData] = useState<Result[] | null>(null);
  const deferredQuery = useDeferredValue(query);
  const memoizedData = useMemo(() => {
    const all = data
      ? data.filter(
          (d) =>
            d.location.toLowerCase().includes(deferredQuery) ||
            d.name.toLowerCase().includes(deferredQuery)
        )
      : null;

    const files = data
      ? data.filter(
          (d) =>
            !["user", "folder"].includes(d.type) &&
            (d.location.toLowerCase().includes(deferredQuery) ||
              d.name.toLowerCase().toLowerCase().includes(deferredQuery))
        )
      : null;
    const people = data
      ? data.filter(
          (d) =>
            d.type === "user" &&
            (d.location.toLowerCase().includes(deferredQuery) ||
              d.name.toLowerCase().includes(deferredQuery))
        )
      : null;
    const chats: Result[] | null = null;
    console.log({
      all,
      files,
      people,
      chats,
    });
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
      const res = await fetch("../../sample.json", {
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
      className={`w-[435px] ${
        isExpanded ? "max-h-96 h-96" : "max-h-16 h-16"
      } transition-[400px] flex flex-col px-2 ease-in-out duration-400 items-start justify-start overflow-y-hidden border-[#CDCDCD] border drop-shadow-lg bg-white rounded-2xl pb-4`}
    >
      <SearchBar
        query={query}
        setQuery={setQuery}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        close={close}
      />
      <Tabs query={deferredQuery} {...memoizedData} />
    </div>
  );
}
