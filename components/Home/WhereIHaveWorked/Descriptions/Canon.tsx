import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Canon() {
  const tasks = [
    {
      text: "Learned about the XRay machines concepts, components, installation and maintenance.",
      keywords: ["Xray"],
    },
    {
      text: "Learned about the Ultrasound machines concepts, components, installation and maintenance.",
      keywords: ["Ultrasound"],
    },
    {
      text: "Dived in XRay and Ultrasound machines Service Engineering reading the service & installation manuals.",
      keywords: ["Xray", "Ultrasound", "manuals"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Xray & Ultrasound Engineering <span className="text-AAsecondary">Intern</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">July - July 2022</span>
          <span
              className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
              // set text size on style attribute
              style={{ fontSize: "0.6rem" }}
              onClick={() => window.open("https://global.medical.canon/", "_blank")}
          >
            www.global.medical.canon
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
