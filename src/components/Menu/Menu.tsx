import { memo, useState } from "react";

const Menu = memo(
  ({
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
  }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <div className="relative z-10 mr-[5.5px] h-auto w-auto pb-2.5">
        <button type="button" onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`stroke-neutral-500 ${
              showMenu ? "rotate-60" : "rotate-0"
            } transition-transform duration-150 ease-in`}
          >
            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
        <div
          className={`absolute right-0 flex h-auto w-40 flex-col items-center justify-start overflow-hidden rounded-lg border border-neutral-200 bg-white p-1 shadow-md shadow-neutral-400 transition-all duration-200 ease-in-out ${
            showMenu ? "max-h-[125px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex h-auto w-full items-center justify-between rounded-sm p-2 py-1.5 hover:bg-neutral-100">
            <div className="flex w-auto items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${
                  showFiles ? "stroke-neutral-500" : "stroke-neutral-400"
                } mr-2 transition-colors duration-150 ease-in`}
              >
                <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
              </svg>
              <p
                className={`${
                  showFiles ? "text-black" : "text-neutral-400"
                } w-auto text-xs font-medium transition-colors duration-150 ease-in`}
              >
                Files
              </p>
            </div>
            <div
              role="button"
              onClick={() => setShowFiles(!showFiles)}
              className={`${
                showFiles ? "bg-black" : "bg-neutral-300"
              } -mr-0.5 h-3 w-5 rounded-full px-[1.5px] pt-[1.5px] transition-colors`}
            >
              <div
                className={`h-[9px] w-[9px] rounded-full bg-white transition-transform duration-150 ease-in ${
                  showFiles ? "translate-x-2" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
          <div className="flex h-auto w-full items-center justify-between rounded-sm p-1.5 hover:bg-neutral-100">
            <div className="flex w-auto items-center justify-start">
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
                  showPeople ? "stroke-neutral-500" : "stroke-neutral-400"
                } mr-1.5 ml-[1.5px] transition-colors duration-150 ease-in`}
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <p
                className={`${
                  showPeople ? "text-black" : "text-neutral-400"
                } w-auto text-xs font-medium transition-colors duration-150 ease-in`}
              >
                People
              </p>
            </div>
            <div
              role="button"
              onClick={() => setShowPeople(!showPeople)}
              className={`${
                showPeople ? "bg-black" : "bg-neutral-300"
              } h-3 w-5 rounded-full px-[1.5px] pt-[1.5px] transition-colors`}
            >
              <div
                className={`h-[9px] w-[9px] rounded-full bg-white transition-transform duration-150 ease-in ${
                  showPeople ? "translate-x-2" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
          <div className="flex h-auto w-full items-center justify-between rounded-sm p-1.5 hover:bg-neutral-100">
            <div className="flex w-auto items-center justify-start">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
                className="mr-1.5 ml-0.5 transition-colors duration-150 ease-in"
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
                      showChats ? "stroke-neutral-500" : "stroke-neutral-400"
                    }`}
                  ></path>
                </g>
              </svg>
              <p
                className={`${
                  showChats ? "text-black" : "text-neutral-400"
                } w-auto text-xs font-medium transition-colors duration-150 ease-in`}
              >
                Chats
              </p>
            </div>
            <div
              role="button"
              onClick={() => setShowChats(!showChats)}
              className={`${
                showChats ? "bg-black" : "bg-neutral-300"
              } h-3 w-5 rounded-full px-[1.5px] pt-0.5 transition-colors`}
            >
              <div
                className={`-mt-[0.5px] h-[9px] w-[9px] rounded-full bg-white transition-transform duration-150 ease-in ${
                  showChats ? "translate-x-2" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
          <div className="flex h-auto w-full items-center justify-between p-1.5 hover:bg-neutral-100">
            <div className="flex w-auto items-center justify-start">
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#8e8e8e"
                className="mr-1.5 ml-0.5 transition-colors duration-150 ease-in"
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
                    className={`transition-colors duration-150 ease-in ${
                      showLists ? "stroke-neutral-500" : "stroke-neutral-400"
                    }`}
                  ></path>
                </g>
              </svg>
              <p
                className={`${
                  showLists ? "text-black" : "text-neutral-400"
                } w-auto text-xs font-medium transition-colors duration-150 ease-in`}
              >
                Lists
              </p>
            </div>
            <div
              role="button"
              onClick={() => setShowLists(!showLists)}
              className={`${
                showLists ? "bg-black" : "bg-neutral-300"
              } h-3 w-5 rounded-full px-[1.5px] pt-[1.5px] transition-colors`}
            >
              <div
                className={`h-[9px] w-[9px] rounded-full bg-white transition-transform duration-150 ease-in ${
                  showLists ? "translate-x-2" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default Menu;
