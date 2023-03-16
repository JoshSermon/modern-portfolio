import * as React from 'react';
import { motion } from "framer-motion";


interface Props {}

function TechnicalSkillsTwo({}: Props) {
    return (    
<div className="group relative flex">
        <motion.img
        initial={{ 
            opacity: 0,
         }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }} 
         src="/images/React-icon.png"
         className="rounded-none w-24 h-24 xl:w-32 xl:h-32 
         filter transition duration-300 ease-in-out"/>
</div>
    )
}

export default TechnicalSkillsTwo;
