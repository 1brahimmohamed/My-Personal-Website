import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-80 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 05.</span>
          <span className=" font-sans text-AAsecondary text-base">What&apos;s Next?</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85"><a href={"https://www.github.com/1brahimmohamed"}>View More Projects</a></span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        I&apos;m Always open for any new opportunities. You can contact me anytime, Whether you have a question or just
        want to say hi.
      </p>
      <div className="pt-4">
        <a href="mailto:ibrahim.mohamed01@eng-st.cu.edu.eg" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary
                            px-8 py-4 border-[1.5px] rounded hover:bg-ResumeButtonHover"
          >
            Get In Touch
          </button>
        </a>
      </div>
    </div>
  );
}
