import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IEEECUSB() {
  const tasks = [
    {
      text: "Leading a team of 16 Committee & 290 member",
      keywords: ["Leading"],
    },
    {
      text: "Prepared the necessary reports for IEEE Student Services: Annual Plan & Annual Report",
      keywords: ["Annual Plan", "Annual Report"],
    },
    {
      text: "Arranged for the election of new officers & Ensured continuity",
      keywords: ["continuity"],
    },
    {
      text: "Collaborated with IEEE Egypt Section and Region Officers that enhanced my leadership skills",
      keywords: ["leadership skills"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Chairman & <span className="text-AAsecondary">CEO</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug 2021 - Aug 2022</span>
          <span
              className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
              // set text size on style attribute
              style={{ fontSize: "0.6rem" }}
              onClick={() => window.open("https://www.ieeecusb.org", "_blank")}
          >
            www.ieeecusb.org
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
