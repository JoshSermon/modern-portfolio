import * as React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";


interface Props {};

function Experience({}: Props) {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
         className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-100 text-2xl">
                Experience
            </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll pt-44 snap-x snap-mandatory scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#94a3b8]/80">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
    )
}

export default Experience
