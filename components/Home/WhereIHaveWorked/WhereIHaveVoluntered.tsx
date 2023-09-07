import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import SiemensEDA from "./Descriptions/SiemensEDA";
import FGS from "./Descriptions/FGS";
import Canon from "./Descriptions/Canon";
import SiemensHealth from "./Descriptions/SiemensHealth";
import CURT from "./Descriptions/CURT";
import IEEECUSB from "./Descriptions/IEEECUSB";
import Neureveal from "./Descriptions/Neureveal";
import IEEEYP from "./Descriptions/IEEE YP";
import IEEEMBS from "./Descriptions/IEEEEMBS";
import CUFESC from "./Descriptions/CUFESC";
export default function WhereIHaveVolunteered() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      default:
        return <IEEECUSB />;
      case "CURT":
        return <CURT />;
      case "IEEE EMBS CUSB":
        return <IEEEMBS />;
      case "IEEE YP":
        return <IEEEYP />;
      case "CUFE SC":
        return <CUFESC />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("ENSVision");
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Previous Extracurriculars
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        {/* // ? Description for The job */}
        {GetDescription()}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />

      </section>
    </div>
  );
}

const CompaniesBar = props => {
  const [barPosition, setBarPosition] = React.useState<Number>(-16); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);
  const CompanyButton = props => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? Companies name as buttons */}

      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">

          <CompanyButton
              ButtonOrderOfcompanyNameBackgroundColorGreen={2}
              CompanyName="Cairo University Racing Team"
              BarPosition={15}
              BarAvobePosition={257}
              DescriptionJob="CURT"
              CompanyNameBackgroundColorGreen={[false,false, true, false, false]}
              setDescriptionJob={props.setDescriptionJob}
          />

          <CompanyButton
              ButtonOrderOfcompanyNameBackgroundColorGreen={4}
              CompanyName="IEEE EMBS Cairo University SB"
              BarPosition={75}
              BarAvobePosition={513}
              DescriptionJob="IEEE EMBS CUSB"
              CompanyNameBackgroundColorGreen={[false, false, false, false, true ]}
              setDescriptionJob={props.setDescriptionJob}
          />

          <CompanyButton
              ButtonOrderOfcompanyNameBackgroundColorGreen={0}
              CompanyName="IEEE Cairo University SB"
              BarPosition={140}
              BarAvobePosition={1}
              DescriptionJob="IEEE CUSB"
              CompanyNameBackgroundColorGreen={[true,false, false, false, false, false]}
              setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
              ButtonOrderOfcompanyNameBackgroundColorGreen={1}
              CompanyName="IEEE YP Egypt"
              BarPosition={195}
              BarAvobePosition={129}
              DescriptionJob="IEEE YP"
              CompanyNameBackgroundColorGreen={[false,true, false, false, false, false]}
              setDescriptionJob={props.setDescriptionJob}
          />

          <CompanyButton
              ButtonOrderOfcompanyNameBackgroundColorGreen={3}
              CompanyName="CUFE Student Club"
              BarPosition={240}
              BarAvobePosition={385}
              DescriptionJob="CUFE SC"
              CompanyNameBackgroundColorGreen={[false, false, false, true, false ]}
              setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div animate={{ x: barAbovePosition }} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>

      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[297px] translate-y-1 md:w-0.5
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>

    </div>
  );
};
