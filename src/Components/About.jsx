import React from "react";

const About = () => {
    return (
        <div name="About" className="w-full h-screen bg-gradient-to-b from-cyan-950 via-cyan-950 to-stone-950 text-white flex items-center justify-center">
            <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full">
                <div className="pb-5">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <div className="  text-gray-300 sm:text-lg md:text-xl  mt-5 md:mt-8">
                    <p className="mb-6">
                        I am a passionate Computer Science student with a keen interest in web development
                        and software engineering. Currently pursuing my B.Tech in CSE at JNTU Anantapur,
                        I've maintained a strong academic record while actively developing my technical skills.
                    </p>

                    <p className="mb-10">
                        Beyond academics, I enjoy working on personal projects that challenge my abilities
                        and contribute to my growth as a developer. I'm always eager to collaborate on
                        innovative projects and learn from fellow developers in the community.
                    </p>
                </div>

                <div className=" bg-cyan-800/40 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[600px] mx-auto">
                    <div className="pb-4">
                        <p className="text-xl font-bold inline border-b-4 text-sky-100 border-gray-500">
                            Education Qualification
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] sm:grid-rows-2 gap-1 sm:gap-2 text-stone-400">
                        <div className="flex items-center font-semibold text-sm sm:text-base">
                            <span>Bachelors in Computer Science</span>
                        </div>
                        <div className="flex items-center justify-start sm:justify-end text-sm sm:text-base">
                            <span>CGPA: 8.44</span>
                        </div>
                        <div className="text-xs sm:text-sm flex items-center">
                            <span>Jawaharlal Nehru Technological University</span>
                        </div>
                        <div className="flex items-center justify-start sm:justify-end text-xs sm:text-sm">
                            <span>2021-2025</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;
