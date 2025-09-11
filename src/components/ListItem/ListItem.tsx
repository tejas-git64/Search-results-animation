import link from "../../assets/link.svg";
import folder from "../../assets/folder-svgrepo-com.svg";
import imageIcon from "../../assets/image-svgrepo-com.svg";
import audio from "../../assets/audio-svgrepo-com.svg";
import video from "../../assets/play-svgrepo-com.svg";
import type { Result } from "../Tabs/Tabs";
import HightlightedText from "../HighlightedText/HighlightedText";

export default function ListItem({
  name,
  query,
  image,
  last_activity,
  type,
  location,
}: Result & { query: string }) {
  function getUserStatusColor() {
    if (last_activity === "Active") return "bg-green-500";
    if (last_activity === "Busy") return "bg-red-500";
    else return "bg-yellow-500";
  }

  return (
    <div className="w-full flex group/list items-center justify-between transition-colors ease-in duration-150 border-y border-neutral-100 py-1.5 px-4">
      <div className="w-32 h-full flex items-center justify-start">
        {type === "user" && (
          <>
            <div className="w-auto h-auto relative shrink-0 mr-3">
              <img
                src={image}
                alt="img"
                className="h-7 w-7 border border-neutral-200 text-xs rounded-md overflow-hidden"
              />
              <div
                className={`w-2.5 h-2.5 absolute -bottom-0.5 -right-0.5 border-white border-2 ${getUserStatusColor()} rounded-full`}
              ></div>
            </div>
            <div className="w-24 flex flex-col items-center justify-start text-left">
              <HightlightedText query={query} value={name} key={name} />
              <p className="w-full text-[10px] text-neutral-400 tracking-wide whitespace-nowrap">
                {last_activity}
              </p>
            </div>
          </>
        )}
        {type === "image" && (
          <>
            <div className="w-7 h-7 rounded-md group-hover/list:bg-neutral-200 bg-white flex items-center justify-center shrink-0 mr-3 transition-colors ease-in duration-150">
              <img src={imageIcon} alt="img" className="w-[11px] h-[11px]" />
            </div>
            <div className="w-24 flex flex-col items-center justify-start">
              <HightlightedText query={query} value={name} key={name} />
              <p className="w-full text-[10px] text-neutral-500 tracking-wide whitespace-nowrap">
                in {location} <span className="text-[#C4C4C4]">&bull;</span>{" "}
                {last_activity}
              </p>
            </div>
          </>
        )}
        {type === "audio" && (
          <>
            <div className="w-7 h-7 p-1 shrink-0 mr-3 group-hover/list:bg-neutral-200 bg-white flex items-center justify-center rounded-md transition-colors ease-in duration-150">
              <img src={audio} alt="img" className="w-2.5 h-2.5" />
            </div>
            <div className="w-24 flex flex-col items-center whitespace-nowrap justify-start">
              <HightlightedText query={query} value={name} key={name} />
              <p className="w-full text-[10px] text-neutral-500 tracking-wide whitespace-nowrap">
                in {location} <span className="text-[#C4C4C4]">&bull;</span>{" "}
                {last_activity}
              </p>
            </div>
          </>
        )}
        {type === "video" && (
          <>
            <div className="w-7 h-7 p-1 shrink-0 mr-3 group-hover/list:bg-neutral-200 bg-white flex items-center justify-center rounded-md transition-colors ease-in duration-150">
              <img src={video} alt="img" className="w-3 h-3" />
            </div>
            <div className="w-24 flex flex-col items-center justify-start">
              <HightlightedText query={query} value={name} key={name} />
              <p className="w-full text-[10px] text-neutral-500 tracking-wide whitespace-nowrap">
                in {location} <span className="text-[#C4C4C4]">&bull;</span>{" "}
                {last_activity}
              </p>
            </div>
          </>
        )}
        {type === "folder" && (
          <>
            <div className="w-7 h-7 p-1 shrink-0 mr-3 group-hover/list:bg-neutral-200 bg-white flex items-center justify-center rounded-md transition-colors ease-in duration-150">
              <img src={folder} alt="img" className="w-2.5 h-2.5" />
            </div>
            <div className="w-24 flex flex-col items-center justify-start">
              <HightlightedText query={query} value={name} key={name} />
              <p className="w-full text-[10px] text-neutral-500 tracking-wide whitespace-nowrap">
                in {location} <span className="text-[#C4C4C4]">&bull;</span>
                {last_activity}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="bg-white shrink-0 opacity-0 group-hover/list:opacity-100 transition-opacity ease-in duration-150 flex items-center">
        <div className="p-1.5 w-auto h-auto mr-1 hover:bg-neutral-200 rounded-md">
          <img
            src={link}
            alt="link-icon"
            className="w-4 h-4 invert-60 hover:invert-20"
          />
        </div>
        <div className="w-auto flex items-center justify-center group/link transition-colors ease-in duration-150">
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
            className="mr-1 stroke-neutral-400 group-hover/link:stroke-neutral-600"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
          <p className="text-[11px] font-medium text-neutral-400 group-hover/link:text-neutral-500">
            New Tab
          </p>
        </div>
      </div>
    </div>
  );
}
