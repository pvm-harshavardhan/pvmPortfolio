import React from "react";
import PortfolioImage from '../assets/portfolio/Portfolio Image.png'
import StudentManagementSystem from '../assets/portfolio/student management system.png'
import DiceGame from '../assets/portfolio/dice game.jpg'
import DrumKit from '../assets/portfolio/drum kit.jpg'
import Calculator from '../assets/portfolio/Calculator.jpg'
import ecommerce from '../assets/portfolio/frontend ecommerce.png'
import { FaGithub } from "react-icons/fa6";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: ecommerce,
            name: "E-commerce Website",
            link: "https://github.com/pvm-harshavardhan/frontend_ecommerce"
        }, 
        {
            id: 2,
            src: PortfolioImage,
            name: "Portfolio Website",
            link: "https://github.com/pvm-harshavardhan/pvmPortfolio"
        },
        {
            id: 3,
            src: StudentManagementSystem,
            name: "Student Management System",
            link: "https://github.com/pvm-harshavardhan/school_management_system_CLI"
        },
        {
            id: 4,
            src: Calculator,
            name: "Web Calculator",
            link: "https://github.com/pvm-harshavardhan/calculator"
        },
        {
            id: 5,
            src: DiceGame,
            name: "Dice Challenge",
            link: "https://github.com/pvm-harshavardhan/dicechallenge"
        },
        {
            id: 6,
            src: DrumKit,
            name: "Drum kit",
            link: "https://github.com/pvm-harshavardhan/drumkit"
        },
    ];

    return (
        <div
            name="Portfolio"
            className="bg-gradient-to-b from-stone-950 via-stone-950 to-cyan-950 w-full pb-5 min-h-screen text-white flex items-center justify-center"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6 text-stone-400 text-lg">Explore my latest projects below, where passion, skill converge to create impactful digital experiences.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, name, link }) => (
                        <div
                            key={id}
                            className="group relative shadow-md shadow-gray-600 rounded-xl duration-200 hover:scale-105"
                        >
                            <div className="h-64 w-full overflow-hidden rounded-xl">
                                <img
                                    src={src}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute h-full w-full 
                                bg-gradient-to-b from-cyan-900/50 via-cyan-500/50 to-cyan-500/0 s
                                flex items-center justify-center 
                                top-0 left-0 
                                rounded-xl
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300">
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" text-black px-4 transition-colors bg-cyan-700/40 rounded-2xl"
                                >
                                    <span className=" text-xl font-bold ">View Code</span> <FaGithub className="flex justify-center items-center m-auto mt-2 md:flex-row" size={40} />
                                </a>
                            </div>

                            <div className="flex items-center justify-center text-xl px-6 py-3 m-4 duration-200 hover:scale-105 h-12 text-center">
                                {name}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-10 text-right text-lg font-bold text-stone-400">To know more about my work...<a className="text-2xl text-blue-200 pt-2 pb-2 hover:text-blue-700" href="https://github.com/pvm-harshavardhan" target="_blank" rel="noopener noreferrer">Click Me</a></p>
            </div>
        </div>
    );
};

export default Portfolio;