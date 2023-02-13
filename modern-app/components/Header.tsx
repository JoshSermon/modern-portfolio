import React from 'react';
import { SocialIcon } from 'react-social-icons';
interface Props {
    
}

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <div className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon 
            url="https://www.youtube.com/joshhitech" 
            fgColor="gray" 
            bgColor="transparent" />
            <SocialIcon 
            url="https://www.youtube.com/joshhitech" 
            fgColor="gray" 
            bgColor="transparent" />
            <SocialIcon 
            url="https://www.youtube.com/joshhitech" 
            fgColor="gray" 
            bgColor="transparent" />
             <SocialIcon 
            url="https://www.youtube.com/joshhitech" 
            fgColor="gray" 
            bgColor="transparent" />
        </div>

        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon 
            className="cursor-pointer"
            network="email"
            fgColor="gray" 
            bgColor="transparent" 
            />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
        Contact Me
        </p>
        </div>
        </header>
    );
}
