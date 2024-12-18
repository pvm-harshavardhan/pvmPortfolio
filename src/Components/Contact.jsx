import React from "react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
    return (
        <div
            name="Contact"
            className="min-h-screen w-full flex flex-col items-center justify-between bg-gradient-to-b from-stone-950 via-stone-900 to-cyan-950 p-4 pt-0 text-white"
        >
            <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 flex-grow flex items-center">

                <div className="flex flex-col justify-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 self-start">
                        Contact
                    </p>
                    <p className="py-6 text-lg">
                        Reach out to me to connect and collaborate to create something amazing together by combining our strengths.
                    </p>
                    <SocialLinks />
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/bqoowdlb"
                        method="POST"
                        className="flex flex-col w-full md:w-3/4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="5"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                        ></textarea>

                        <button className="text-white bg-gradient-to-r from-cyan-900 via-cyan-900 to-sky-700 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>

            <div className="select-none w-full bg-stone-900 flex justify-center items-center mt-5 sm:mt-0 py-5 border-t-4 border-gray-600">
                <p className="text-sm sm:text-base text-gray-400">
                    &copy; 2024 P VM Harsha Vardhan. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Contact;