import { memo, useState } from "react";
import Menu from "../Menu/Menu";
import ListItem from "../ListItem/ListItem";
import Loading from "./Loading";
import AnimatedCount from "../AnimatedCount/AnimatedCount";

export type Result = {
  name: string; //can be the username or the file/folder name
  image: string; // only provided for users
  type: string; // type of the data obj - user | audio | video | image | folder
  last_activity: string; // is Added / Edited for files / folders, and Active for user
  location: string; // path of the obj as string for folder / file types
};

const Tabs = memo(
  ({
    query,
    isLoading,
    isExpanded,
    all,
    files,
    people,
    chats,
  }: {
    query: string;
    isLoading: boolean;
    isExpanded: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    all: Result[] | null;
    files: Result[] | null;
    people: Result[] | null;
    chats: Result[] | null;
  }) => {
    const [index, setIndex] = useState(1);
    const [showFiles, setShowFiles] = useState(true);
    const [showPeople, setShowPeople] = useState(true);
    const [showChats, setShowChats] = useState(false);
    const [showLists, setShowLists] = useState(false);

    return (
      <div className="flex h-auto w-full shrink-0 cursor-none flex-col items-start justify-start pt-1">
        <div
          style={{
            animationDuration: "800ms",
          }}
          className={`flex w-full items-center justify-between border-b-2 border-[#0001] pr-3 pl-5 ${
            isExpanded ? "animate-fadein" : "animate-fadeout"
          }`}
        >
          <ul className="flex w-[350px] items-center justify-start transition-transform duration-500 ease-in-out">
            <li
              role="button"
              onClick={() => setIndex(1)}
              className={`-mb-2.5 flex items-center justify-start border-b-2 px-2 pb-2.5 transition-colors duration-200 ease-in ${
                index === 1 ? "border-black" : "border-transparent"
              }`}
            >
              <p
                className={`${
                  index === 1 ? "text-black" : "text-neutral-500"
                } mr-2 ml-1 text-xs transition-colors duration-150 ease-in`}
              >
                All
              </p>
              <AnimatedCount value={all && !isLoading ? all.length : 0} />
            </li>
            <li
              role="button"
              onClick={() => setIndex(2)}
              className={`space-r-3 -mb-2.5 flex items-center justify-start border-b-2 px-1.5 pb-2.5 ${
                index === 2 ? "border-black" : "border-transparent"
              } ${showFiles ? "animate-fadein" : "hidden"} space-l-1`}
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
                } mr-0.5 transition-colors duration-150 ease-in`}
              >
                <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
              </svg>
              <p
                className={`${
                  index === 2 ? "text-black" : "text-neutral-500"
                } mr-2 ml-0.5 text-xs transition-colors duration-150 ease-in`}
              >
                Files
              </p>
              <AnimatedCount value={files && !isLoading ? files.length : 0} />
            </li>
            <li
              role="button"
              onClick={() => setIndex(3)}
              className={`space-r-3 -mb-2.5 flex items-center justify-start border-b-2 px-1.5 pb-2.5 transition-all duration-200 ease-in ${
                index === 3 ? "border-black" : "border-transparent"
              } ${
                showPeople ? "animate-fadein" : "hidden"
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
                } transition-colors duration-150 ease-in`}
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <p
                className={`${
                  index === 3 ? "text-black" : "text-neutral-500"
                } mr-2 ml-0.5 text-xs transition-colors duration-150 ease-in`}
              >
                People
              </p>
              <AnimatedCount value={people && !isLoading ? people.length : 0} />
            </li>
            <li
              role="button"
              onClick={() => setIndex(4)}
              className={`space-r-3 -mb-2.5 flex items-center justify-start border-b-2 px-1.5 pb-2.5 transition-all duration-200 ease-in ${
                index === 4 ? "border-black" : "border-transparent"
              } ${
                showChats ? "animate-fadein" : "hidden"
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
                className="mr-1.5 transition-colors duration-150 ease-in"
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
                    className={`transition-colors duration-150 ease-in ${
                      index === 4 ? "stroke-black" : "stroke-neutral-500"
                    }`}
                  ></path>
                </g>
              </svg>
              <p
                className={`${
                  index === 4 ? "text-black" : "text-neutral-500"
                } mr-2 ml-0.5 text-xs transition-colors duration-150 ease-in`}
              >
                Chats
              </p>
              <AnimatedCount value={chats && !isLoading ? chats.length : 0} />
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
        <div
          className={`h-auto w-full ${
            isExpanded ? "animate-tab-fadein" : "animate-tab-fadeout"
          } duration-300`}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <div
              style={{
                animationDuration: "500ms",
              }}
              className={`h-84 w-full [scrollbar-width:none] ${
                isExpanded ? "animate-fadein" : "animate-fadeout"
              } flex flex-col items-start justify-start overflow-y-scroll scroll-smooth px-5 pt-[10px] pb-14`}
            >
              {index === 1 &&
                all?.map((d: Result, i) => (
                  <ListItem
                    key={`${d.name}-${i}`}
                    query={query}
                    isExpanded={isExpanded}
                    {...d}
                    i={i}
                  />
                ))}
              {index === 2 &&
                files?.map((d: Result, i) => (
                  <ListItem
                    key={`${d.name}-${i}`}
                    query={query}
                    isExpanded={isExpanded}
                    {...d}
                    i={i}
                  />
                ))}
              {index === 3 &&
                people?.map((d: Result, i) => (
                  <ListItem
                    key={`${d.name}-${i}`}
                    query={query}
                    isExpanded={isExpanded}
                    {...d}
                    i={i}
                  />
                ))}
              {index === 4 &&
                chats?.map((d: Result, i) => (
                  <ListItem
                    key={`${d.name}-${i}`}
                    query={query}
                    isExpanded={isExpanded}
                    {...d}
                    i={i}
                  />
                ))}
              {all?.length === 0 && <Fallback name="results" />}
            </div>
          )}
        </div>
      </div>
    );
  },
);
export default Tabs;

function Fallback({ name }: { name: string }) {
  return (
    <div className="flex h-72 w-full items-center justify-center">
      <p className="text-sm text-neutral-500">No {name} found</p>
    </div>
  );
}
