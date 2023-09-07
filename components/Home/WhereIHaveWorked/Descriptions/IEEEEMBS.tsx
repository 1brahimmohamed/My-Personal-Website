import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IEEEMBS() {
  const tasks = [
    {
      text: "Reactivated the student chapter after years of inactivity.",
      keywords: ["Reactivated"],
    },
    {
      text: "Put the chapter on the right track to be one of the best student and leading chapters in Egypt.",
      keywords: ["right track", "leading chapters"],
    },
    {
      text: "Embraced the chapter with the right culture and values to match the IEEE EMBS vision.",
      keywords: ["culture", "values"],
    },
    {
      text: "Strengthened the relationship between mainstream and credit hours programs students.",
      keywords: ["Strengthened"]
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Vice <span className="text-AAsecondary">Chairman</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jul 2023 - Present</span>
          <span
              className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
              // set text size on style attribute
              style={{ fontSize: "0.6rem" }}
              onClick={() => window.open("https://edu.ieee.org/eg-cu-embs/", "_blank")}
          >
            www.edu.ieee.org/eg-cu-embs
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
