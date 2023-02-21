import * as React from "react";
import { Fade } from "react-awesome-reveal";
import Background from "components/Background";



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
        <img className="relative rounded h-32 w-32 mx-auto object-cover" src="https://ca.slack-edge.com/T02QUCP5J-U02JH3N6WPM-465398917323-512" alt="" ></img>
        </div>
    )
}


// Stopped at 1:05:48