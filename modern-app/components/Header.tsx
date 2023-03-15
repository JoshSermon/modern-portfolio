import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';



type Props = {};

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">

        <motion.div
        initial={{
            x: 0,
            opacity: 1,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            ease: "easeOut",
            duration: 1,
          }}
        className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon 
            url="https://www.youtube.com/joshhitech" 
            fgColor="white" 
            bgColor="transparent" />
            <SocialIcon 
            url="https://www.twitter.com/joshhitech" 
            fgColor="white" 
            bgColor="transparent" />
            <SocialIcon 
            url="https://www.linkedin.com/joshhitech" 
            fgColor="white" 
            bgColor="transparent" />
             <SocialIcon 
            url="https://www.github.com/joshsermon" 
            fgColor="white" 
            bgColor="transparent" />
        </motion.div>


        <motion.div 
           initial={{
            x: 0,
            opacity: 1,
            scale: 0.5,
        }}
         animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            ease: "easeOut",
            duration: 1, 
          }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon 
            url="#contact"
            className="cursor-pointer"
            network="email"
            fgColor="white" 
            bgColor="transparent" 
            />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-100">
        Contact Me
        </p>
        </motion.div>
        </header>
    );
}
