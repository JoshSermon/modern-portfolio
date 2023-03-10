import * as React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

interface Props {};

function Contact({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:hitechcodebase@gmail.com?subject={formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className="h-screen relative flex overflow-hidden flex-column 
        text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-100 text-2xl">Contact 
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-3xl font-semibold text-center">
                   I'm the perfect person for the job.{" "}
                   <span className="decoration-[#FFFFFF]/50 underline">Let's Discuss</span>  
                </h4>


                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#94a3b8] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">hitechcodebase@gmail.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register('name')} placeholder="Name" className="contactInput" type="text"/>
                        <input {...register('email')} placeholder="Email" className="contactInput" type="email"/>
                    </div>

                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text"/>
                    <textarea {...register('message')} placeholder="Message" className="contactInput" />
                    <button type="submit" className="bg-slate-800 py-5 px-10 rounded-md text-white font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
