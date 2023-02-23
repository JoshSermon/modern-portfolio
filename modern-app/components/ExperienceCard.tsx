import * as React from 'react';
import { motion } from "framer-motion";

interface Props {};

function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] 
        md:w-[600px] xl:w-[900px] snap-start bg-[#292929] p-10 hover:opacity-100 opacity-40 
        cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            />
          <img className="w-32 h-32 rounded-full xl:w-[200px] object-cover object-center"
          src="https://lh3.googleusercontent.com/a/AEdFTp7kj4hhYKhTAbAG5k24ZyO0_OoK49QfgGFd6_7wfg=s288"
          alt=""
          />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light text-center">LUCKIE</h4>
            <p className="font-bold text-2xl mt-1 text-center">Front End Developer</p>
            <div className="flex space-x-2 my-2 justify-center">
                <img className="h-10 w-10 rounded-full"
                src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
                alt="" 
                />
                <img className="h-10 w-10 rounded-full"
                src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
                alt="" 
                />
                <img className="h-10 w-10 rounded-full"
                src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
                alt="" 
                />
            </div>
            <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary points Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary points Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary points Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary points Summary Points Summary Points Summary Points Summary Points </li>
            </ul>

            </div>
        </article>
    )
}

export default ExperienceCard;
