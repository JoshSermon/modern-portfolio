import * as React from 'react';
import { motion } from "framer-motion";


interface Props {}

function TechnicalSkills({}: Props) {
    return (    
<div className="group relative flex">
        <motion.img
        initial={{ 
            opacity: 0,
         }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }} 
         src="images/typescript-logo.svg"
         className="object-cover w-24 h-24 xl:w-32 xl:h-32 
         filter transition duration-300 ease-in-out"/>
         <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
         ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0">
             <div className="flex items-center justify-center h-full">
             </div>
         </div>
</div>
    )
}

export default TechnicalSkills
