import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function CUFESC() {
  const tasks = [
    {
      text: "Co-founded the Cairo University Faculty of Engineering Student Magazine (CUFE Student Magazine) after long time of absence to be " +
          "changed after 3 years to CUFE Student Club",
      keywords: ["Co-founded", "Magazine"],
    },
    {
      text: "Assist the President in providing leadership and guidance to the club team. Take on leadership responsibilities in the absence of the President.",
      keywords: ["Assist", "leadership", "guidance"],
    },
    {
      text: "Contribute to content creation by providing visual designs, maintain website & Edit and review articles submitted by other team members.",
      keywords: ["content creation", "visual designs", "website",],
    },
    {
      text: " Ensure the quality, consistency, and style of content published in the club meet established standards.",
      keywords: ["quality", "consistency"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Vice <span className="text-AAsecondary">President</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Apr 2020 - Aug 2022</span>
          <span
              className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
              // set text size on style attribute
              style={{ fontSize: "0.6rem" }}
              onClick={() => window.open("https://www.cufestudentclub.com/", "_blank")}
          >
            www.cufestudentclub.com
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
