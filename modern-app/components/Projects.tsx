import * as React from 'react';
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";



interface Props {};

function Projects({}: Props) {
    const projects = [1];
    return (
        <motion.div className="h-screen relative flex overflow-hidden flex-column 
        text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="font-orbitron absolute top-24 uppercase tracking-[20px] text-gray-100 text-2xl pl-6 md:pl-0">Projects 
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden 
            snap-x snap-mandatory z-20 scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#94a3b8]/80">
            {projects.map((project, i) => (
                <div 
                key={i}
                className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-10 md:p-44 h-screen mt-28 md:mt-none ">
                <Fade direction="down">
                <a href="https://joshsermon.github.io/inspire/" target="_blank" rel="noreferrer">
                <img src="/images/mexico-project.png"
                className="rounded-none border w-72 h-48 xl:w-96 xl:h-72"
                alt="">
                </img>
                </a>
                </Fade>

            <div className="space-y-4 px-0 md:px-10 max-w-6xl">
                <h4 className="font-bebas-neue drop-shadow-xl text-3xl font-semibold text-center">
                    <span>
                    Mexico City  
                    </span>  
                </h4>
                <p className="text-md lg:text-xl text-center w-fit lg:w-full font-bebas-neue">
                Recently, I created this website to celebrate Cinco de Mayo. I was inspired by history of Mexico and wanted to create a website that gave a positive representation of the capital. This website is reflective of the Mexican flag and has multiple animations to provide an authentic user experience.
                </p>


            </div>
        </div>
            ))}
        </div>

            {/* <div className="w-full absolute top-[30%] bg-[#FFFFFF]/10 left-0 h-[500px] skew-y-12">
            </div> */}
        </motion.div>
    )
}

export default Projects
