import * as React from 'react';
import { motion } from "framer-motion";
interface Props {};

function ExperienceCard({}: Props) {
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

        <div className="px-0 md:px-5">
            <h4 className="font-bebas-neue text-2xl md:text-4xl font-light text-center md:mt-16">LUCKIE</h4>
            <p className="font-bebas-neue font-bold text:lg md:text-2xl mt-1 text-center">Front End Engineer</p>
            <div className="flex space-x-2 my-2 justify-center">
                <img className="h-14 w-14"
                src="/images/aem-logo.png"
                alt="" 
                />
                <img className="h-14 w-14"
                src="images/sass.png"
                alt="" 
                />
                <img className="h-14 w-14"
                src="/images/javascript-logo.png"
                alt="" 
                />
            </div>
            <p className="uppercase py-5 text-gray-300 text-xs md:text-xl text-center">Started work Oct 2021 - Current</p>

            <ul className="font-bebas-neue list-disc space-y-4 ml-5 text-sm md:text-lg w-5/6 text-center md:w-full w-5/6 text-center md:text-left md:w-full">
            <li>Contributed to implementing scalable functionality for clients that increased web performance using JavaScript and SASS. Built the logic for a streamlined ad-serving platform. </li>
            <li>Designed and implemented several web applications for projects using a content management system Adobe Experience Manager.</li>
            <li className="hidden lg:list-item">Created and maintained front-end code for 5+ healthcare websites (re-designs, seasonal updates, production work).</li>
            </ul>

            </div>
        </article>
    )
}

export default ExperienceCard;
