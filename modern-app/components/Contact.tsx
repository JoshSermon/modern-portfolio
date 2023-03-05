import * as React from "react";


interface Props {};

function Contact({}: Props) {
    return (
        <div className="h-screen relative flex overflow-hidden flex-column 
        text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact 
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-3xl font-semibold text-center">
                   I'm the perfect person for the job.{" "}
                   <span className="decoration-[#FFFFFF]/50 underline">Let's Discuss</span>  
                </h4>
            </div>
        </div>
    )
}

export default Contact
