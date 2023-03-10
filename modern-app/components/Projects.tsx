import * as React from 'react';
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";



interface Props {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div className="h-screen relative flex overflow-hidden flex-column 
        text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-100 text-2xl">Projects 
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden 
            snap-x snap-mandatory z-20 scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#94a3b8]/80">
            {projects.map((project, i) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen">
                <Fade direction="down">
                <img src="https://www.ashimamittal.com/wp-content/uploads/2022/08/Netflix-on-multiple-devices.png"
                alt="">
                </img>
                </Fade>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-3xl font-semibold text-center">
                    <span className="underline decoration-[#FFFFFF]/50">
                    Case Study {i + 1} of {projects.length}: Mexico City  
                    </span>  
                </h4>
                <p className="text-lg text-center md:text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dignissimos provident sint reiciendis rerum cumque distinctio eos repellendus necessitatibus numquam laborum quaerat culpa, 
                    nam voluptatibus ipsa obcaecati. Nisi in dolorem nesciunt?
                </p>


            </div>
        </div>
            ))}
        </div>

            <div className="w-full absolute top-[30%] bg-[#FFFFFF]/10 left-0 h-[500px] skew-y-12">
            </div>
        </motion.div>
    )
}

export default Projects
