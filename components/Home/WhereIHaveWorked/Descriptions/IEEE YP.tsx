import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IEEEYP() {
  const tasks = [
    {
      text: "Supervising Marketing, Media, and Design Teams & Ensured the quality of the work",
      keywords: ["Supervising", "Ensured the quality"],
    },
    {
      text: "Build a strong brand identity for IEEE R8 NASYP Congress",
      keywords: ["Build a strong brand"],
    },
    {
      text: "Providing all the needed designs for events, social media posts, presentations, posters and videos",
      keywords: ["Providing"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Branding Manager <span className="text-AAsecondary">@ IEEE Region 8 NASYP 2023</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Apr 2023 - Sep 2023</span>
          <span
              className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
              // set text size on style attribute
              style={{ fontSize: "0.6rem" }}
              onClick={() => window.open("https://ieeeypegypt.org/", "_blank")}
          >
            www.ieeeypegypt.org <br />
            www.nasyp.ieee.org.eg
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
