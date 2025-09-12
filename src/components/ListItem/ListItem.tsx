import link from "../../assets/link.svg";
import folder from "../../assets/folder-svgrepo-com.svg";
import imageIcon from "../../assets/image-svgrepo-com.svg";
import audio from "../../assets/audio-svgrepo-com.svg";
import video from "../../assets/play-svgrepo-com.svg";
import type { Result } from "../Tabs/Tabs";
import HightlightedText from "../HighlightedText/HighlightedText";
import { memo, startTransition, useState } from "react";

const ListItem = memo(
  ({
    i,
    name,
    query,
    image,
    last_activity,
    isExpanded,
    type,
    location,
  }: Result & { query: string; i: number; isExpanded: boolean }) => {
    function getUserStatusColor() {
      if (last_activity === "Active") return "bg-green-500";
      if (last_activity === "Busy") return "bg-red-500";
      else return "bg-yellow-500";
    }

    return (
      <div
        style={{
          animationDelay: `${i * 20}ms`,
          animationDuration: "700ms",
        }}
        className={`group/list flex w-full ${
          isExpanded ? "animate-fadein" : "animate-fadeout"
        } items-center justify-between border-b border-neutral-100 px-0 py-2.5 transition-colors`}
      >
        <div className="flex h-full w-32 items-center justify-start">
          {type === "user" && (
            <>
              <div className="relative mr-3 h-auto w-auto shrink-0">
                <img
                  src={image}
                  alt="img"
                  className="-mt-0.5 h-7 w-7 overflow-hidden rounded-md text-xs"
                />
                <div
                  className={`absolute -right-1 -bottom-1 h-2.5 w-2.5 border-2 border-white ${getUserStatusColor()} rounded-full`}
                ></div>
              </div>
              <div className="flex w-24 flex-col items-center justify-start text-left">
                <HightlightedText query={query} value={name} key={name} />
                <p className="w-full text-[10px] tracking-wide whitespace-nowrap text-neutral-400">
                  {last_activity}
                </p>
              </div>
            </>
          )}
          {type === "image" && (
            <>
              <div className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white transition-colors duration-150 ease-in group-hover/list:bg-neutral-200">
                <img src={imageIcon} alt="img" className="h-[11px] w-[11px]" />
              </div>
              <div className="flex w-24 flex-col items-center justify-start">
                <HightlightedText query={query} value={name} key={name} />
                <p className="w-full text-[10px] tracking-wide whitespace-nowrap text-neutral-500">
                  in {location} <span className="text-[#C4C4C4]">&bull;</span>{" "}
                  {last_activity}
                </p>
              </div>
            </>
          )}
          {type === "audio" && (
            <>
              <div className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white p-1 transition-colors duration-150 ease-in group-hover/list:bg-neutral-200">
                <img src={audio} alt="img" className="h-2.5 w-2.5" />
              </div>
              <div className="flex w-24 flex-col items-center justify-start whitespace-nowrap">
                <HightlightedText query={query} value={name} key={name} />
                <p className="w-full text-[10px] tracking-wide whitespace-nowrap text-neutral-500">
                  in {location} <span className="text-[#C4C4C4]">&bull;</span>{" "}
                  {last_activity}
                </p>
              </div>
            </>
          )}
          {type === "video" && (
            <>
              <div className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white p-1 transition-colors duration-150 ease-in group-hover/list:bg-neutral-200">
                <img src={video} alt="img" className="h-3 w-3" />
              </div>
              <div className="flex w-24 flex-col items-center justify-start">
                <HightlightedText query={query} value={name} key={name} />
                <p className="w-full text-[10px] tracking-wide whitespace-nowrap text-neutral-500">
                  in {location} <span className="text-[#C4C4C4]">&bull;</span>{" "}
                  {last_activity}
                </p>
              </div>
            </>
          )}
          {type === "folder" && (
            <>
              <div className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white p-1 transition-colors duration-150 ease-in group-hover/list:bg-neutral-200">
                <img src={folder} alt="img" className="h-2.5 w-2.5" />
              </div>
              <div className="flex w-24 flex-col items-center justify-start">
                <HightlightedText query={query} value={name} key={name} />
                <p className="w-full text-[10px] tracking-wide whitespace-nowrap text-neutral-500">
                  in {location} <span className="text-[#C4C4C4]">&bull;</span>
                  {last_activity}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex shrink-0 items-center bg-white opacity-100 transition-opacity duration-150 ease-in">
          <InfoLink key={`${name}-${i}`} name={name} />
          <div className="group/open flex w-auto items-center justify-center transition-colors duration-150 ease-in">
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
              className="mr-1 stroke-neutral-400 group-hover/open:stroke-neutral-600"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
            <p className="text-[11px] font-medium text-neutral-400 group-hover/open:text-neutral-500">
              New Tab
            </p>
          </div>
        </div>
      </div>
    );
  },
);

function InfoLink({ name }: { name: string }) {
  const [text, setText] = useState("Copy link");
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(name);
    startTransition(() => {
      setText("✓ Link copied!");
      setTimeout(() => {
        setIsVisible(false);
      }, 400);
      setTimeout(() => {
        setText("Copy link");
      }, 800);
    });
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className={`group/link relative mr-1 h-auto w-auto cursor-none rounded-md p-1.5 hover:bg-neutral-200`}
    >
      <p
        className={`bottom-8 left-1/2 z-10 w-auto -translate-x-1/2 rounded-sm px-1.5 py-[1px] text-[10px] font-medium opacity-0 ${
          isVisible ? "opacity-100" : "opacity-0"
        } group-active/link:animate-tooltip-fadeoutin pointer-events-none absolute bg-black whitespace-nowrap text-white transition-all duration-300`}
      >
        {text}
      </p>
      <img
        src={link}
        alt="link-icon"
        loading="eager"
        fetchPriority="high"
        className={`h-4 w-4 invert-60 group-hover/link:invert-20`}
      />
    </div>
  );
}

export default ListItem;
