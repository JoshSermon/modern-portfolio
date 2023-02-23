import * as React from "react";
import { Fade } from "react-awesome-reveal";
import Background from "components/Background";
import Link from "next/link";



type Props = {};

export default function Hero({}: Props) {
    
    <div>
    </div>
    
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Front End Engineer</h2>
        <Fade direction="up">
         <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 ">Josh HiTech</h1>
        </Fade>
        <Background />
        <img className="relative rounded h-32 w-32 mx-auto object-cover" src="https://lh3.googleusercontent.com/a/AEdFTp7kj4hhYKhTAbAG5k24ZyO0_OoK49QfgGFd6_7wfg=s288" alt="" ></img>


    <div className="pt-5 z-20">
    <Link href="#about">
        <button className="heroButton">About</button>
    </Link>

    <Link href="#experience">
        <button className="heroButton">Experience</button>
    </Link>

    <Link href="#skills">
        <button className="heroButton">Skills</button>
    </Link>

    <Link href="#projects">
        <button className="heroButton">Projects</button>
    </Link>
    </div>
</div>  
    )
}


// Stopped at 1:05:48