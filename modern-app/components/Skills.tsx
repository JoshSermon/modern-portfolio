import * as React from 'react';
import { motion } from "framer-motion";
import TechnicalSkills from "components/TechnicalSkills";
import TechnicalSkillsTwo from "components/TechnicalSkillsTwo";
import TechnicalSkillsThree from "./TechnicalSkillsThree";
import TechnicalSkillsFour from "./TechnicalSkillsFour";
import TechnicalSkillsFive from "./TechnicalSkillsFive";
import TechnicalSkillsSix from "./TechnicalSkillsSix";
import TechnicalSkillsSeven from "./TechnicalSkillsSeven";
import TechnicalSkillsEight from "./TechnicalSkillsEight";
import TechnicalSkillsNine from "./TechnicalSkillsNine";
import TechnicalSkillsTen from "./TechnicalSkillsTen";
import TechnicalSkillsEleven from "./TechnicalSkillsEleven";
import TechnicalSkillsTwelve from "./TechnicalSkillsTwelve";

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

            <div className="grid grid-cols-4 gap-5"> 
                <TechnicalSkills />
                <TechnicalSkillsTwo />
                <TechnicalSkillsThree />
                <TechnicalSkillsFour />
                <TechnicalSkillsFive />
                <TechnicalSkillsSix />
                <TechnicalSkillsSeven />
                <TechnicalSkillsEight />
                <TechnicalSkillsNine />
                <TechnicalSkillsTen />
                <TechnicalSkillsEleven />
                <TechnicalSkillsTwelve />
            </div>
        </motion.div>
    )
}

export default Skills
