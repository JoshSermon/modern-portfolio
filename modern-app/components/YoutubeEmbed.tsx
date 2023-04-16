import * as React from 'react';
import { motion } from "framer-motion";


interface Props {};

export default function YoutubeEmbed({}: Props) {

    return (
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="font-orbitron absolute top-24 uppercase tracking-[20px] text-gray-100 text-2xl pl-6 md:pl-0">
        YouTube
        </h3>
        <iframe className=" w-full h-1/4 md:w-full md:h-2/4 lg:w-11/12 lg:h-2/3 mt-20 aspect-video hover:aspect-square" src="https://youtube.com/embed/GUq0r7RtNJ4" title="YouTube Video" allowFullScreen></iframe>
        </motion.div>
    )
} 