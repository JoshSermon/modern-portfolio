import * as React from "react";
import { Fade } from "react-awesome-reveal";
import Background from "components/Background";



type Props = {};

export default function Hero({}: Props) {
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <Fade direction="up">
         <p>Josh HiTech</p>
        </Fade>

        <Background />
        </div>
    )
}
