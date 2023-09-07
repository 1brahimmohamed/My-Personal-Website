import React from "react";
import { Link as ReactScrollLink } from "react-scroll";

import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
          initial={{
              y: -40,
              opacity: 0,
          }}
          animate={{
              y: 0,
              opacity: 1,
          }}
          transition={{
              type: "spring",
              duration: props.finishedLoading ? 0 : 1.2,
              delay: props.finishedLoading ? 0 : 4.8,
          }}
        className=" relative h-12 w-96 "
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute h-full w-full flex justify-center items-center text-2xl font-bold text-white"
        >
                <ReactScrollLink to="homeSection" spy={true} smooth={true} offset={0} duration={200}>
                    <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
                        Ibrahim Mohamed
                    </span>
                </ReactScrollLink>
        </motion.span>
      </motion.div>
    </>
  );
}
