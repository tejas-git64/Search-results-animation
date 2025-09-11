import { useState } from "react";

export default function Menu({
  showChats,
  showFiles,
  showPeople,
  showLists,
  setShowChats,
  setShowFiles,
  setShowPeople,
  setShowLists,
}: {
  showChats: boolean;
  showFiles: boolean;
  showPeople: boolean;
  showLists: boolean;
  setShowFiles: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPeople: React.Dispatch<React.SetStateAction<boolean>>;
  setShowChats: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLists: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-auto h-auto mr-[5.5px] pb-2.5 relative z-10">
      <button
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        className="cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-neutral-500 ${
            showMenu ? "rotate-90" : "rotate-0"
          } transition-transform duration-150 ease-in`}
        >
          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
      <div
        className={`w-40 h-auto absolute bg-white right-0 shadow-sm space-y-1 shadow-neutral-200 rounded-lg flex flex-col items-center justify-start p-2 border transition-all ease-in duration-150 border-neutral-200 ${
          showMenu ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full h-auto flex items-center justify-between p-1">
          <div className="w-auto flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                showFiles ? "stroke-neutral-500" : "stroke-neutral-400"
              } transition-colors ease-in duration-150 mr-2`}
            >
              <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
            </svg>
            <p
              className={`${
                showFiles ? "text-black" : "text-neutral-400"
              } w-auto text-xs font-medium transition-colors ease-in duration-150`}
            >
              Files
            </p>
          </div>
          <div
            role="button"
            onClick={() => setShowFiles(!showFiles)}
            className={`${
              showFiles ? "bg-black" : "bg-neutral-300"
            } pt-0.5 px-0.5 w-5 h-3 rounded-full`}
          >
            <div
              className={`w-[9px] h-[9px] bg-white rounded-full transition-transform ease-in duration-150 ${
                showFiles ? "translate-x-2" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-between p-1">
          <div className="w-auto flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                showPeople ? "stroke-neutral-500" : "stroke-neutral-400"
              } transition-colors ease-in duration-150 mr-1.5`}
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p
              className={`${
                showPeople ? "text-black" : "text-neutral-400"
              } w-auto text-xs font-medium transition-colors ease-in duration-150`}
            >
              People
            </p>
          </div>
          <div
            role="button"
            onClick={() => setShowPeople(!showPeople)}
            className={`${
              showPeople ? "bg-black" : "bg-neutral-300"
            } pt-[1.5px] px-0.5 w-5 h-3 rounded-full`}
          >
            <div
              className={`w-[9px] h-[9px] bg-white rounded-full transition-transform ease-in duration-150 ${
                showPeople ? "translate-x-2" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-between p-1">
          <div className="w-auto flex items-center justify-start">
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
                    showChats ? "stroke-neutral-500" : "stroke-neutral-400"
                  }`}
                ></path>
              </g>
            </svg>
            <p
              className={`${
                showChats ? "text-black" : "text-neutral-400"
              } w-auto text-xs font-medium transition-colors ease-in duration-150`}
            >
              Chats
            </p>
          </div>
          <div
            role="button"
            onClick={() => setShowChats(!showChats)}
            className={`${
              showChats ? "bg-black" : "bg-neutral-300"
            } pt-0.5 px-0.5 w-5 h-3 rounded-full`}
          >
            <div
              className={`w-[9px] h-[9px] bg-white -mt-[0.5px] rounded-full transition-transform ease-in duration-150 ${
                showChats ? "translate-x-2" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-between p-1">
          <div className="w-auto flex items-center justify-start">
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#8e8e8e"
              className="transition-colors ease-in duration-150 mr-1.5 ml-[1px]"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#8e8e8e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-colors ease-in duration-150 ${
                    showLists ? "stroke-neutral-500" : "stroke-neutral-400"
                  }`}
                ></path>
              </g>
            </svg>
            <p
              className={`${
                showLists ? "text-black" : "text-neutral-400"
              } w-auto text-xs font-medium transition-colors ease-in duration-150`}
            >
              Lists
            </p>
          </div>
          <div
            role="button"
            onClick={() => setShowLists(!showLists)}
            className={`${
              showLists ? "bg-black" : "bg-neutral-300"
            } pt-[1.5px] px-0.5 w-5 h-3 rounded-full`}
          >
            <div
              className={`w-[9px] h-[9px] bg-white rounded-full transition-transform ease-in duration-150 ${
                showLists ? "translate-x-2" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
