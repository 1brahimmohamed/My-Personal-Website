import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function CURT() {
  const tasks = [
    {
      text: "Lead the autonomous driving process as director in Formula Student Competition",
      keywords: ["director", "formula student competition"],
    },
    {
      text: "Participated in Shell Virtual Competition where I helped in building the map using VLP16 LIDAR and ROS as SLAM Engineer.",
      keywords: ["Shell Virtual Competition", "vlp16 LIDAR", "ROS" ],
    },
    {
      text: "Worked with GMapping, laser-scan-matcher packages to accomplish Simulation's Localization & Mapping (SLAM)",
      keywords: ["GMapping", "SLAM"],
    },
    {
      text: "Implemented SLAM Techniques and Algorithms (Kalman filter, EKF, Particle filter)",
      keywords: ["SLAM", "Kalman filter", "EKF", "Particle filter"],
    },
    {
      text: "Implemented Path-planing \Algorithms (A*, Hybrid A*, RRT) as Path-planing Team Lead",
      keywords: ["Path-planing", "Hybrid A*", "RRT"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Autonomous Driving Systems <span className="text-AAsecondary">Director</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Sep 2022 - Present</span>
        <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://cu-eco.org/", "_blank")}
        >
            cu-eco.org
          </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
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
  );
}
