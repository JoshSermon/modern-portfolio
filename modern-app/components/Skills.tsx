import * as React from 'react';
import { motion } from "framer-motion";
import TechnicalSkills from "components/TechnicalSkills";


interface Props {}

function Skills({}: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen items-center flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
         xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-100 text-2xl">Skills</h3>

            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-100 text-sm">Hover over a skill for currency proficiency</h3>

            <div className="grid grid-cols-4 gap-5"> 
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
                <TechnicalSkills />
            </div>
        </motion.div>
    )
}

export default Skills
