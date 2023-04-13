import * as React from "react";
import { Fade } from "react-awesome-reveal";
import Background from "components/Background";
import Link from "next/link";



type Props = {};

export default function Hero({}: Props) {
    
    <div>
    </div>
    
    return (
        <div className="h-screen flex flex-col space-y-1 md:space-y-8 items-center justify-center text-center overflow-hidden mt-20 mt-0">
        <h2 className="w-max text-xs lg:text-lg uppercase pb-2 tracking-[5px] lg:tracking-[15px]">Front End Engineer</h2>
        <Fade direction="up">
         <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 ">Josh HiTech</h1>
        </Fade>
        <img className="relative rounded h-72 w-672 mx-auto object-cover" src="https://ca.slack-edge.com/T02QUCP5J-U02JH3N6WPM-465398917323-512" alt="" ></img>


    <div className="pt-1 lg:pt-5 space-x-3.5 md:space-x-3.5 z-20">
    <Link href="#about">
        <button className="heroButton">About</button>
    </Link>

    <Link href="#youtube">
        <button className="heroButton">YouTube</button>
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
