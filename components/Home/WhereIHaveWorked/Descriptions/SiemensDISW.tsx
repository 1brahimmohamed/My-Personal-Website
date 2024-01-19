import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SiemensDISW() {
  const tasks = [
    {
      text: "Effective coding using best practices (Clean Code / Error Handling / TDD, Unit test",
      keywords: ["effective", "best"],
    },
    {
      text: "Code Reviews / Debugging / Logging / Memory Performance & Problems / Static & Shared Libs",
      keywords: [],
    },
    {
      text: "Data Structures efficient usage / Advanced Algorithms",
      keywords: ["efficient"],
    },
    {
      text: "Working Under Linux / Version Management / Build Systems",
      keywords: ["Linux"],
    },
    {
      text: "System Design/  Software Development Life Cycle / Software Models / Software Documentation",
      keywords: ["Linux"],
    },
    {
      text: "Sneak Peak on Spring Boot / Spring Boot Security / Microservices with Spring Boot",
      keywords: ["Spring"],
    },
    {
      text: "Introduction to Angular Framework",
      keywords: ["Angular"],
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
