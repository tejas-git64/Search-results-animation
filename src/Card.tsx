import { startTransition, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Tabs from "./components/Tabs/Tabs";

export default function Card() {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  function close() {
    startTransition(() => {
      setQuery("");
      setIsExpanded(false);
    });
  }

  return (
    <div
      className={`w-[435px] ${
        isExpanded ? "max-h-96 h-96" : "max-h-16 h-16"
      } overflow-hidden transition-[400px] flex flex-col ease-in-out duration-400 items-start justify-start border-[#CDCDCD] border drop-shadow-lg bg-white rounded-2xl pb-4`}
    >
      <SearchBar
        query={query}
        setQuery={setQuery}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        close={close}
      />
      <Tabs />
    </div>
  );
}
