import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SiemensDISW() {
  const tasks = [
    {
      text: "Write effective code, using appropriate data structures and algorithms on the professional SW development level.",
      keywords: ["effective", "professional"],
    },
    {
      text: "Developing Industrial web applications using Angular & Spring Boot with the use of advanced design patterns & architectures.",
      keywords: ["Angular", "Spring Boot", "design patterns"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineering <span className="text-AAsecondary">Trainee</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Oct 2023 - Present</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://eda.sw.siemens.com/en-US/", "_blank")}
          >
            www.eda.sw.siemens.com
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
