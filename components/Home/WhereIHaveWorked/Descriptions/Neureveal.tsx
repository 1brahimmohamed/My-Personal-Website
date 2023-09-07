import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Neureveal() {
  const tasks = [
    // {
    //   text: "Worked on the front-end development in the web3 domain using Next.js, Alchemy, Tailwind CSS, Wagmi, Web3.js, Moralis, Ethers.js",
    //   keywords: ["Alchemy", "Wagmi", "Web3.js", "Moralis", "Ethers.js"],
    // },
    {
      text: "Studied and transform data science projects",
      keywords: ["implementation", "data science"],
    },
    {
      text: "Research and implement appropriate machine learning algorithms for computer vision application such as object" +
          " detection, key point detection, object segmentation & anomaly detection",
      keywords: ["Machine Learning", "computer vision", "object detection", "key point detection", "object segmentation", "anomaly detection"],
    },
    {
      text: "Support MLOps efforts Design machine learning systems with optimized system pipeline design, training and runtime performance",
      keywords: ["MLOps","pipeline design", "training", "runtime performance"],
    },
    {
      text: " Apply Image processing techniques on medical images and apply statistical analysis.",
      keywords: ["Image processing", "medical images", "statistical analysis"],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            AI Software Engineer <span className="text-AAsecondary">Intern</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://neureveal.ai/", "_blank")}
          >
            www.neureveal.ai
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
