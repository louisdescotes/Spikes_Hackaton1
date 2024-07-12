import React from "react";
import NewPlatform from "../components/Buttons/NewPlatform";
import EmailInput from "../components/Buttons/EmailInput";
import Try from "../components/Buttons/Try";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <main className=" overflow-hidden text-center">
      <div className="relative">
        <img
          className=" absolute -z-10 w-max"
          src="/Grid.png"
          alt=""
        />
      </div>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          ease: [0.25, 1, 0.5, 1],
          opacity: { duration: 0.3 },
        }}
        className=" absolute top-12 -left-3 md:right-32 -z-20 rounded-full blur-custom bg-[#92C4FE] w-[220px] h-[220px] md:w-[430px] md:h-[430px]"
      ></motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          ease: [0.25, 1, 0.5, 1],
          opacity: { duration: 0.3, delay: .2 },
        }}
        className=" absolute top-1/4 left-1/4  md:-left-15 -z-20 rounded-full blur-custom bg-[#FEA49280] w-[220px] h-[220px] md:w-[430px] md:h-[430px]"
      ></motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          ease: [0.25, 1, 0.5, 1],
          opacity: { duration: 0.3, delay: .4 },
        }}
        className=" absolute md:top-2/4 top-1/2 left-14 md:left-[45%] -z-20 rounded-full blur-custom bg-[#AE92FE] w-[270px] h-[270px]"
      ></motion.div>

      <section className="py-16">
        <NewPlatform />
        <aside className="w-full flex flex-col justify-center items-center py-6 gap-2">
          <div className=" w-10/12 flex flex-col gap-5 justify-center items-center py-6 overflow-hidden">
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: "5rem" }}
              transition={{
                ease: [0.25, 1, 0.5, 1],
                y: { duration: 0.4, delay: 1 },
                opacity: { duration: 0.3, delay: 1 },
              }}
              className="text-5xl dela-regular max-w-screen-sm"
            >
              Best way to sell your digital product
            </motion.h1>
            <p className="text-sm dm-medium text-[#626262] w-10/12 md:w-6/12 ">
              Go from Zero to Hero with simple platform that helps creators like
              you sell their digital products online.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-7/12 justify-center">
            <EmailInput />
            <Try>Try it out</Try>
          </div>
          <div className="flex gap-[10px] my-4 justify-center">
              <img src="/profilUser.png" alt="" />
            <div className="md:w-3/6 ">
              <p className="text-[#00000080] text-[10px] dm-medium text-start">
                <span className="text-[#000000]">More than 100+ </span>users are
                selling their products online with simple & easy ways
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
