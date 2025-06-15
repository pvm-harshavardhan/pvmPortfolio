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
                        I’m an undergraduate in Computer Science with a strong interest in web development, software engineering, 
                        and AI/ML. I like building interactive, user-focused applications and finding out how smart systems can solve 
                        real-world problems. Through my personal and class projects, I've built a solid foundation in both frontend and 
                        backend development, along with practical experience in deep learning.                        
                    </p>

                    <p className="mb-10">
                        I’m a motivated learner who enjoys challenges. I’m always eager to explore new technologies, contribute to 
                        meaningful projects, and grow through teamwork. Outside of my studies, I regularly work on personal projects 
                        that enhance my skills and show my passion for continuous improvement.
                    </p>
                </div>

                

                <div className="flex flex-col md:flex-row md:justify-center md:gap-6">
                    <div className="bg-cyan-800/40 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[600px] mx-auto my-5 md:my-0">
                        <div className="pb-4">
                            <p className="text-xl font-bold inline border-b-4 text-sky-100 border-gray-500">
                                Research Intern
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] sm:grid-rows-2 gap-1 sm:gap-2 text-stone-400">
                            <div className="flex items-center font-semibold text-sm sm:text-base">
                                <span>Image Processing and Deep Learning</span>
                            </div>
                            <div className="flex items-center justify-start sm:justify-end text-sm sm:text-base">
                                
                            </div>
                            <div className="text-xs sm:text-sm flex items-center">
                                <span>National Institute of Technology, Warangal</span>
                            </div>
                            <div className="flex items-center justify-start sm:justify-end text-xs sm:text-sm ml-0">
                                <span>Dec 2024–Mar 2025</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-cyan-800/40 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[600px] mx-auto my-5 md:my-0">
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
                                <span className="font-bold italic">CGPA: 8.68</span>
                            </div>
                            <div className="text-xs sm:text-sm flex items-center">
                                <span>Jawaharlal Nehru Technological University</span>
                            </div>
                            <div className="flex items-center justify-start sm:justify-end text-xs sm:text-sm">
                                <span>2021–2025</span>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default About;
