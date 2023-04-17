import * as React from 'react';
import { motion } from "framer-motion";

interface Props {};

function ExperienceCardTwo({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] 
        md:w-[600px] xl:w-[900px] snap-center p-5 transition-opacity duration-200 overflow-hidden">
          <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            />
          <img className="w-24 h:24 md:w-48 md:h-48 !mt-0 rounded-full xl:w-[200px] object-cover object-center mt-0"
          src="https://media.licdn.com/dms/image/C4E0BAQHrv722D7WD0A/company-logo_200_200/0/1519864784368?e=1686787200&v=beta&t=ucyqG82saoqjMjfsYyIBHJ4_HdSMM8sY2P6iJMxwwLY"
          alt=""
          />

        <div className="px-0 md:px-10">
            <h4 className="font-bebas-neue text-2xl md:text-4xl font-light text-center">RESOLVVE</h4>
            <p className="font-bebas-neue font-bold text:lg md:text-2xl mt-1 text-center">Front End Engineer</p>
            <div className="flex space-x-2 my-2 justify-center">
                <img className="h-14 w-14"
                src="/images/React-icon.png"
                alt="" 
                />
                <img className="h-14 w-14"
                src="/images/bootstrap-logo.png"
                alt="" 
                />
                <img className="h-14 w-14"
                src="/images/javascript-logo.png"
                alt="" 
                />
            </div>
            <p className="uppercase py-5 text-gray-300 text-xs md:text-xl text-center">Started work Aug 2020 - Ended Oct 2021</p>

            <ul className="font-bebas-neue list-disc space-y-4 ml-5 text-sm md:text-lg w-5/6 text-center md:text-left md:w-full">
                <li>Develop new UI functionality for multithreaded user-facing applications running on touchscreen devices, using React.js and Bootstrap.</li>
                <li>Contributed to web development projects from initial design through the completion, optimizing all cross-browser and multi-platform compatibility.</li>
                <li className="hidden lg:list-item">Worked in an agile environment with weekly stand-ups, kept of user stories/bugs in Trello, and conducted sprint planning.</li>
            </ul>

            </div>
        </article>
    )
}

export default ExperienceCardTwo;
