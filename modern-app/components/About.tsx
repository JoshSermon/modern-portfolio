import * as React from 'react';
import { motion } from "framer-motion";

interface Props {};

function About({}: Props) {
    return (
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-100 text-2xl">
            About
            </h3>


            <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://ca.slack-edge.com/T02QUCP5J-U02JH3N6WPM-465398917323-512"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[350px]"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{''} background</h4>
                <p className="text-base">
                Hi, I'm Josh HiTech!
                I'm a Front End Developer who creates successful websites that meet customer needs. 
                I have experience producing impactful, innovative websites that engage customers and deliver business results. 
                In addition, I am solution-driven to fix bugs that will allow websites to run efficiently.
                </p>
            </div>
        </motion.div>
    )
}

export default About
