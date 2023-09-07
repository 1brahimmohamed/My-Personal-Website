import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
    const router = useRouter();
    return (
        <div
            id="SomethingIveBuiltSection"
            className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
        >
            {/* // ? Title  */}
            <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
                <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"}/>
                <div className="flex-none flex-row space-x-2 items-center pr-2">
                    <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
                    <span
                        className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
                        Some Projects I&apos;ve Worked On
          </span>
                </div>
                <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
            </div>

            <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
                {/* // ?  Project  1*/}
                <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
                    {/* Left image */}
                    <div
                        className="hidden bg-AAprimary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full  content-center"
                    >
                        <div className="relative rounded w-full h-full col-span-7 ">
                            {
                                /* <Link href={"/typing"}>
                                <div
                                  // onClick={}
                                  className="absolute w-full h-full rounded bg-AAsecondary
                           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                              </Link> */
                            }

                            <a href="https://github.com/1brahimmohamed/CuOR-Website_SBE2242_Team03" target={"_blank"}
                               rel="noreferrer">
                                <div
                                    // onClick={}
                                    className="absolute w-full h-full rounded bg-AAprimary
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                            </a>

                            <Img src={"/cuor.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `}/>
                        </div>
                    </div>

                    {/* right Content */}
                    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                        {/* background for text in mobile responsive */}
                        <div className="absolute w-full h-full bg-opacity-70 z-0">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                                <Img src={"/cuor.png"} alt={"Project Screen shot"} className={`w-full h-full `}/>
                            </div>
                        </div>

                        <div
                            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
            col-span-8 flex flex-col items-start md:items-end space-y-3"
                        >
                            <div className="flex flex-col space-y-1 md:items-end z-10">
                                <span className="text-AAsecondary text-base">Management System Website </span>
                                <a href="https://github.com/1brahimmohamed/CuOR-Website_SBE2242_Team03" target="_blank"
                                   rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Cairo University Operations Room System (CuOR+)
                  </span>
                                </a>
                            </div>
                            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                                    Operation rooms system with incomparable <span className="text-AAsecondary">user experience.</span>
                                    It helps the OR Department transfer the way they offer the service they got. In the
                                    system you can have a set
                                    of nice features that <span className="text-AAsecondary">facilitates the operation process</span> for
                                    the doctors, nurses, patients and the OR
                                    department admins. <span className="text-AAsecondary">My role </span> was to build
                                    the <span className="text-AAsecondary">front-end</span> of the website using{" "}
                                    <span className="text-AAsecondary">React</span> and <span
                                    className="text-AAsecondary">MaterialUI</span>.
                                </p>
                            </div>
                            <ul
                                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
                            >
                                <span className="pr-4 z-10">React</span>
                                <span className="pr-4 z-10">MaterialUI</span>
                                <span className="pr-4 z-10">Node.JS</span>
                                <span className="pr-4 z-10">Express.JS</span>
                                <span className="pr-4 z-10">MongoDB</span>
                            </ul>
                            <div className="z-10 flex fle-row space-x-5 ">
                                <GithubIcon link="https://github.com/1brahimmohamed/CuOR-Website_SBE2242_Team03"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // ?  Project 2 */}
                <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
                    {/* Left image */}
                    <div
                        className="hidden bg-AAprimary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full  content-center "
                    >
                        <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                            <a href={"https://github.com/1brahimmohamed/Real-Estate-GP-Website"} target="_blank"
                               rel="noreferrer">
                                <div
                                    className="absolute w-full h-full rounded bg-AAprimary
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                            </a>
                            <Img src={"/realestate.png"} alt={"Project Screen shot"}
                                 className={`w-full rounded h-full `}/>
                        </div>
                    </div>

                    {/* right Content */}
                    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                        {/* background for text in mobile responsive */}
                        <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                                <Img src={"/realestate.png"} alt={"Project Screen shot"} className={`w-full h-full`}/>
                            </div>
                        </div>

                        <div
                            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
                        >
                            <div className="flex flex-col space-y-1  z-10">
                                <span className="text-AAsecondary text-base">E-Commerce Web Application</span>
                                <a href="https://github.com/1brahimmohamed/Real-Estate-GP-Website" target="_blank"
                                   rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Summits Real Estate Website
                  </span>
                                </a>
                            </div>
                            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                                <p className="text-gray-300 md:text-gray-400 text-left ">

                                    I had the chance to build this Real Estate Web Application following <span
                                    className="text-AAsecondary">MVC Architecture </span> for a friend Graduation
                                    Project.
                                    The application uses <span
                                    className="text-AAsecondary"> server side rendering </span> with <span
                                    className="text-AAsecondary">EJS</span> and <span
                                    className="text-AAsecondary">Node.JS</span> and <span
                                    className="text-AAsecondary">Express.JS</span> for the backend.
                                    The admin uses <span className="text-AAsecondary">client side rendering.</span>
                                </p>
                            </div>
                            <ul
                                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
                            >
                                <span className="pr-4 z-10">JavaScript</span>
                                <span className="pr-4 z-10">Node.JS</span>
                                <span className="pr-4 z-10">Express.JS</span>
                                <span className="pr-4 z-10">MongoDB</span>
                                <span className="pr-4 z-10">Server-Side Rendering</span>
                            </ul>
                            <div className="z-10 flex fle-row space-x-5 ">
                                <GithubIcon link="https://github.com/1brahimmohamed/Real-Estate-GP-Website"/>
                                {/*<a href="https://ubiquitous-bublanina-da84ec.netlify.app/" target={"_blank"} rel="noreferrer">*/}
                                {/*  <ExternalLink url={""} router={router} />*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* // ?  Project  3*/}
                <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
                    {/* Left image */}
                    <div
                        className="hidden bg-AAprimary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full  content-center"
                    >
                        <div className="relative rounded w-full h-full col-span-7 ">
                            <Link href={"https://github.com/1brahimmohamed/Computer-Vision-Toolkit"}>
                                <div
                                    // onClick={}
                                    className="absolute w-full h-full rounded bg-AAsecondary
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                            </Link>

                            <Img src={"/cmpv.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `}/>
                        </div>
                    </div>

                    {/* right Content */}
                    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                        {/* background for text in mobile responsive */}
                        <div className="absolute w-full h-full bg-opacity-70 z-0">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                                <Img src={"/cmpv.png"} alt={"Project Screen shot"} className={`w-full h-full `}/>
                            </div>
                        </div>

                        <div
                            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
            col-span-8 flex flex-col items-start md:items-end space-y-3"
                        >
                            <div className="flex flex-col space-y-1 md:items-end z-10">
                                <span className="text-AAsecondary text-base">Desktop Application</span>
                                <Link href={"https://github.com/1brahimmohamed/Computer-Vision-Toolkit"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Computer Vision Toolkit
                  </span>
                                </Link>
                            </div>
                            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                                    Computer vision toolkit that has various vision algorithms and techniques
                                    <span className="text-AAsecondary"> implemented from scratch</span> like noise
                                    reduction, edge detection,
                                    image histograms, frequency domains filters, hough transforms, <span
                                    className="text-AAsecondary">Active contours</span>,
                                    <span className="text-AAsecondary">SIFT features extraction </span> & <span
                                    className="text-AAsecondary">Facial Detection and recognition. </span> I had the
                                    chance to build the UI and implement
                                    computer vision algorithms from scratch
                                </p>
                            </div>
                            <ul
                                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
                            >
                                <span className="pr-4 z-10">Qt C++</span>
                                <span className="pr-4 z-10">Algorithms</span>
                                <span className="pr-4 z-10">Computer Vision</span>
                                <span className="pr-4 z-10">OpenCV</span>
                            </ul>
                            <div className="z-10 flex fle-row space-x-5 ">
                                <GithubIcon link="https://github.com/1brahimmohamed/Computer-Vision-Toolkit"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // ?  Project 4 */}
                <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
                    {/* Left image */}
                    <div
                        className="hidden bg-AAprimary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full  content-center "
                    >
                        <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                            <Link href={"https://github.com/1brahimmohamed/IRO-Paint_CMP2241_F21_Team01"}>
                                <div
                                    className="absolute w-full h-full rounded bg-AAsecondary
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                            </Link>
                            <Img src={"/paint.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `}/>
                        </div>
                    </div>

                    {/* right Content */}
                    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                        {/* background for text in mobile responsive */}
                        <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                                <Img src={"/paint.png"} alt={"Project Screen shot"} className={`w-full h-full`}/>
                            </div>
                        </div>

                        <div
                            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
                        >
                            <div className="flex flex-col space-y-1  z-10">
                                <span className="text-AAsecondary text-base">Desktop Application</span>
                                <Link href={"https://github.com/1brahimmohamed/IRO-Paint_CMP2241_F21_Team01"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  IRO Paint (Paint Application)
                  </span>
                                </Link>
                            </div>
                            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                                <p className="text-gray-300 md:text-gray-400 text-left ">
                                    <span className="text-AAsecondary"> Qt C++ </span> Desktop application that allows
                                    user
                                    to draw basic shapes like Rectangles, lines, circles and triangles and pick fill
                                    color and stroke from
                                    a color picker, save and load images and undo and redo actions. sort shapes by area
                                    and perimeter and save them in a text file.
                                    My role was to design the <span className="text-AAsecondary"> User Experience and User Interface. </span>
                                </p>
                            </div>
                            <ul
                                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
                            >
                                <span className="pr-4 z-10">Qt C++</span>
                                <span className="pr-4 z-10">Algorithms</span>
                                <span className="pr-4 z-10">Data Structures</span>
                                <span className="pr-4 z-10">CSS</span>
                                <span className="pr-4 z-10">UI/UX</span>
                            </ul>
                            <div className="z-10 flex fle-row space-x-5 ">
                                <GithubIcon link="https://github.com/1brahimmohamed/IRO-Paint_CMP2241_F21_Team01"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // ? Project 5 */}
                <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
                    {/* Left image */}
                    <div
                        className="hidden bg-AAprimary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full  content-center"
                    >
                        <div className="relative rounded w-full h-full col-span-7 ">
                            <a href="https://github.com/1brahimmohamed/Digital-Filters-Design-Suite" target={"_blank"} rel="noreferrer">
                                <div
                                    // onClick={}
                                    className="absolute w-full h-full rounded bg-AAprimary
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                            </a>


                            <Img src={"/filters.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `}/>
                        </div>
                    </div>

                    {/* right Content */}
                    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                        {/* background for text in mobile responsive */}
                        <div className="absolute w-full h-full bg-opacity-70 z-0">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                                <Img src={"/filters.png"} alt={"Project Screen shot"} className={`w-full h-full `}/>
                            </div>
                        </div>
                        <div
                            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
                        >
                            <div className="flex flex-col space-y-1 md:items-end z-10">
                                <span className="text-AAsecondary text-base">Scientific Web Application</span>
                                <a href="https://github.com/1brahimmohamed/Digital-Filters-Design-Suite" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Digital Filters Design Suite
                  </span>
                                </a>
                            </div>
                            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                                    Digital Filters Design Suite is a web application that allows the user to design
                                    their <span className="text-AAsecondary">real-time digital filters</span> using zeros
                                    and poles placements on Z complex plane
                                    and <span className="text-AAsecondary">correct the filter&apos;s phase response
                                </span> using all-pass filters through desired values
                                    of all-pass A-Value or select from multiple examples of pre-designed all pass filters.
                                    I implemented <span className="text-AAsecondary">the logic behind the UI </span> in
                                    frontend and connection between front and backend
                                </p>
                            </div>
                            <ul
                                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
                            >
                                <span className="pr-4 z-10">JavaScript</span>
                                <span className="pr-4 z-10">Konva.JS</span>
                                <span className="pr-4 z-10">Python</span>
                                <span className="pr-4 z-10">Django</span>
                                <span className="pr-4 z-10">OOP</span>
                            </ul>
                            <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                                <GithubIcon link="https://github.com/1brahimmohamed/Digital-Filters-Design-Suite"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // ?  Project 6 */}
                <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
                    {/* Left image */}
                    <div
                        className="hidden bg-AAprimary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full  content-center "
                    >
                        <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                            <a href="https://github.com/1brahimmohamed/ACC-VR-AR-Diploma/tree/master" target={"_blank"} rel="noreferrer">
                                <div
                                    className="absolute w-full h-full rounded bg-AAprimary
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                            </a>

                            <Img src={"/repair.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `}/>
                        </div>
                    </div>

                    {/* right Content */}
                    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                        {/* background for text in mobile responsive */}
                        <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                                <Img src={"/repair.png"} alt={"Project Screen shot"} className={`w-full h-full`}/>
                            </div>
                        </div>

                        <div
                            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
                        >
                            <div className="flex flex-col space-y-1  z-10">
                                <span className="text-AAsecondary text-base">Virtual Reality Game</span>
                                <a href="https://github.com/1brahimmohamed/ACC-VR-AR-Diploma/tree/master" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                   VR Medical Equipment Repair and Maintenance Game
                  </span>
                                </a>
                            </div>
                            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                                <p className="text-gray-300 md:text-gray-400 text-left ">
                                    The game is a medical equipment maintenance & repair game that enables biomedical
                                    engineering students or graduates to  <span className="text-AAsecondary">train </span>
                                    on how to fix/maintain high-cost Diagnostic Imaging modalities and laboratory systems
                                    with  <span className="text-AAsecondary">risk-free, cost-free</span> VR technology.
                                    It gives them wide choice of errors, malfunctions & ability to solve problems related
                                    to the devices. This wide choice of errors let biomedical engineers get exposed to many
                                    failures which they cannot have during their training.
                                </p>
                            </div>
                            <ul
                                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
                            >
                                <span className="pr-4 z-10">C#</span>
                                <span className="pr-4 z-10">Unity</span>
                                <span className="pr-4 z-10">Oculus Quest 2</span>
                                <span className="pr-4 z-10">Modeling</span>
                            </ul>
                            <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                                <GithubIcon link="https://github.com/1brahimmohamed/ACC-VR-AR-Diploma/tree/master"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
