import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FGS() {
  const tasks = [
    {
      text: "Learned about Robotic Process Automation (RPA) and how to automate business processes.",
      keywords: ["Robotic Process Automation"],
    },
    {
      text: "Got a deep understanding of Automation annoyware robotic interface (AARI) and how to use it to automate business processes.",
      keywords: ["Automation annoyware robotic interface"],
    },
    {
      text: "Had a good understanding of the different types of Software Development Cycle for Production.",
      keywords: ["Software Development Cycle for Production"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">Intern</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">July - August 2022</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.firstgulfsolutions.com/", "_blank")}
          >
            www.firstgulfsolutions.com
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
