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
          <img className="w-24 h:24 md:w-48 md:h-48 rounded-full !mt-0 xl:w-[200px] object-cover object-center"
          src="https://media.licdn.com/dms/image/C4E0BAQG1W7IM12V7cA/company-logo_200_200/0/1644873692106?e=1684972800&v=beta&t=iLb-POOyFy4PV0yBQspwaGkAI8MtHJIFK-ZjVnW9yn4"
          alt=""
          />

        <div className="px-0 md:px-5">
            <h4 className="text-2xl md:text-4xl font-light text-center">LUCKIE</h4>
            <p className="font-bold text:lg md:text-2xl mt-1 text-center">Front End Engineer</p>
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

            <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg w-5/6 text-center md:w-full w-5/6 text-center md:text-left md:w-full">
            <li>Contributed to implementing scalable functionality for clients that increased web performance using JavaScript and SASS. Built the logic for a streamlined ad-serving platform. </li>
            <li>Designed and implemented several web applications for projects using a content management system Adobe Experience Manager.</li>
            <li className="hidden lg:block">Created and maintained front-end code for 5+ healthcare websites (re-designs, seasonal updates, production work).</li>
            </ul>

            </div>
        </article>
    )
}

export default ExperienceCard;
