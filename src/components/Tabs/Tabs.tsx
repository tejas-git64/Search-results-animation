import { useState } from "react";
import Menu from "../Menu/Menu";
import ListItem from "../ListItem/ListItem";

export type Result = {
  name: string;
  image: string;
  type: string;
  last_activity: string;
  location: string;
};

export default function Tabs({
  query,
  all,
  files,
  people,
  chats,
}: {
  query: string;
  all: Result[] | null;
  files: Result[] | null;
  people: Result[] | null;
  chats: Result[] | null;
}) {
  const [index, setIndex] = useState(1);
  const [showFiles, setShowFiles] = useState(true);
  const [showPeople, setShowPeople] = useState(true);
  const [showChats, setShowChats] = useState(true);
  const [showLists, setShowLists] = useState(false);

  return (
    <div className="w-full h-auto flex flex-col items-start justify-start shrink-0">
      <div className="w-full flex items-center justify-between px-2">
        <ul className="w-auto flex items-center justify-start space-x-1 ml-2">
          <li
            role="button"
            onClick={() => setIndex(1)}
            className={`flex items-center justify-start cursor-pointer border-b-3 transition-colors ease-in duration-200 px-1.5 pr-3 pb-2.5 ${
              index === 1 ? "border-black" : "border-white"
            }`}
          >
            <p
              className={`${
                index === 1 ? "text-black" : "text-neutral-500"
              } text-[14px] ml-1 mr-2 transition-colors ease-in duration-150`}
            >
              All
            </p>
            <p className="text-[12px] w-3 text-black bg-[#F1F1F1] text-bold px-1.5 rounded-md">
              {all ? all.length : 0}
            </p>
          </li>
          <li
            role="button"
            onClick={() => setIndex(2)}
            className={`flex items-center justify-start space-r-3 transition-all cursor-pointer ease-in duration-200 border-b-3 px-1.5 pb-2.5 ${
              index === 2 ? "border-black" : "border-white"
            } ${
              showFiles ? "visible opacity-100" : "opacity-0 invisible"
            } space-l-1`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                index === 2 ? "stroke-black" : "stroke-neutral-500"
              } transition-colors ease-in mr-0.5 duration-150`}
            >
              <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
            </svg>
            <p
              className={`${
                index === 2 ? "text-black" : "text-neutral-500"
              } text-[14px] ml-0.5 mr-2 transition-colors ease-in duration-150`}
            >
              Files
            </p>
            <p className="text-[12px] w-3 text-black bg-[#F1F1F1] text-bold px-1.5 rounded-md">
              {files ? files.length : 0}
            </p>
          </li>
          <li
            role="button"
            onClick={() => setIndex(3)}
            className={`flex items-center justify-start space-r-3 border-b-3 transition-all ease-in duration-200 cursor-pointer px-1.5 pb-2.5 ${
              index === 3 ? "border-black" : "border-white"
            } ${
              showPeople ? "visible opacity-100" : "opacity-0 invisible"
            } space-l-1 text-neutral-500`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                index === 3 ? "stroke-black" : "stroke-neutral-500"
              } transition-colors ease-in duration-150`}
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p
              className={`${
                index === 3 ? "text-black" : "text-neutral-500"
              } text-[14px] transition-colors ease-in duration-150 ml-0.5 mr-2`}
            >
              People
            </p>
            <p className="text-[12px] w-3 text-black bg-[#F1F1F1] px-1.5 rounded-md text-bold">
              {people ? people.length : 0}
            </p>
          </li>
          <li
            role="button"
            onClick={() => setIndex(4)}
            className={`flex items-center justify-start space-r-3 border-b-3 transition-all ease-in duration-200 cursor-pointer px-1.5 pb-2.5 ${
              index === 4 ? "border-black" : "border-white"
            } ${
              showChats ? "visible opacity-100" : "opacity-0 invisible"
            } space-l-1 text-neutral-500`}
          >
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
              className="transition-colors ease-in duration-150 mr-1.5"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 3C5.11765 3 3 4.64706 3 10C3 13.7383 4.0328 15.6692 7 16.4939V21L11.0124 16.9876C11.3301 16.996 11.6592 17 12 17C18.8824 17 21 15.3529 21 10C21 4.64706 18.8824 3 12 3Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-colors ease-in duration-150 ${
                    index === 4 ? "stroke-black" : "stroke-neutral-500"
                  }`}
                ></path>
              </g>
            </svg>
            <p
              className={`${
                index === 4 ? "text-black" : "text-neutral-500"
              } text-[14px] transition-colors ease-in duration-150 ml-0.5 mr-2`}
            >
              Chats
            </p>
            <p className="text-[12px] w-3 text-black bg-[#F1F1F1] px-1.5 rounded-md text-bold">
              {chats ? chats.length : 0}
            </p>
          </li>
        </ul>
        <Menu
          showChats={showChats}
          showFiles={showFiles}
          showPeople={showPeople}
          showLists={showLists}
          setShowFiles={setShowFiles}
          setShowPeople={setShowPeople}
          setShowChats={setShowChats}
          setShowLists={setShowLists}
        />
      </div>
      <div className="w-full h-80 max-h-auto [scrollbar-width:none] overflow-y-scroll flex flex-col items-start justify-start space-y-1 pt-3 pb-14 scroll-smooth">
        {index === 1 &&
          all?.map((d: Result, i) => (
            <ListItem key={`${d.name}-${i}`} query={query} {...d} />
          ))}
        {index === 2 &&
          files?.map((d: Result, i) => (
            <ListItem key={`${d.name}-${i}`} query={query} {...d} />
          ))}
        {index === 3 &&
          people?.map((d: Result, i) => (
            <ListItem key={`${d.name}-${i}`} query={query} {...d} />
          ))}
        {index === 4 &&
          chats?.map((d: Result, i) => (
            <ListItem key={`${d.name}-${i}`} query={query} {...d} />
          ))}
        {all?.length === 0 && <Fallback name="results" />}
      </div>
    </div>
  );
}

function Fallback({ name }: { name: string }) {
  return (
    <div className="w-full h-72 flex items-center justify-center">
      <p className="text-sm text-neutral-500">No {name} found</p>
    </div>
  );
}
