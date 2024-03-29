import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SiemensHealth() {
  const tasks = [
    {
      text: "Medical Equipment Installation and maintenance.",
      keywords: ["maintenance"],
    },
    {
      text: "System operations on diagnostic imaging modalities & laboratory systems",
      keywords: ["operations","diagnostic imaging modalities", "laboratory systems"],
    },
    {
      text: "Worked on solving network and connection issues between imaging modalities and PACS server of hospitals.",
      keywords: ["network", "PACS server"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Hardware Engineering <span className="text-AAsecondary">Trainee</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Sep - Oct 2021</span>
          <span
              className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
              // set text size on style attribute
              style={{ fontSize: "0.6rem" }}
              onClick={() => window.open("https://www.siemens-healthineers.com/", "_blank")}
          >
            www.siemens-healthineers.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
