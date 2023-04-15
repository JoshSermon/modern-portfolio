import * as React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceCardTwo from "./ExperienceCardTwo";


interface Props {};

function Experience({}: Props) {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
         className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full pl-4 md:px-10 justify-evenly mx-auto items-center ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-100 text-2xl pl-2 md:pl-0">
                Experience
            </h3>

        <div className="w-full h-min md:pb-10 flex space-x-5 overflow-x-scroll pt-28 md:pt-56 snap-x snap-mandatory scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#94a3b8]/80">
            <ExperienceCard />
            <ExperienceCardTwo />
        </div>
    </motion.div>
    )
}

export default Experience
