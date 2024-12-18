import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { IoIosArrowDropupCircle } from "react-icons/io";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "About" },
        { id: 3, link: "Portfolio" },
        { id: 4, link: "Skills" },
        { id: 5, link: "Contact" },
    ];

    return (
        <>
            <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed z-50">
                <div>
                    <h1 className="text-5xl font-logo ml-2 hover:scale-125 duration-700 ease-in-out select-none">Harsha</h1>
                </div>
                <ul className="hidden md:flex">
                    {links.map((link) => (
                        <li
                            key={link.id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                        >
                            <Link
                                to={link.link}
                                smooth
                                duration={500}
                                offset={-70}
                                className="hover:text-gray-400 hover:px-1/2 hover:border-b-2 hover:border-gray-400 transition-colors"
                            >
                                {link.link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 md:hidden z-50 text-gray-500"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className="flex flex-col justify-center items-center 
                    fixed top-0 left-0 w-full h-screen 
                    bg-gradient-to-b from-black to-gray-800 
                    text-gray-500 z-40"
                    >
                        {links.map((link) => (
                            <li
                                key={link.id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link.link}
                                    smooth
                                    duration={500}
                                    offset={-70}
                                    className="hover:text-gray-400 hover:px-1/2 hover:border-b-2 hover:border-gray-400 transition-colors"
                                >
                                    {link.link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div >
            <Link
                to="Home"
                smooth={true}
                duration={500}
                offset={-70}
                className="fixed bottom-10 right-10 z-40 text-4xl text-white cursor-pointer hover:text-gray-400 transition-colors"
            >
                <IoIosArrowDropupCircle />
            </Link>
        </>
    );
};

export default NavBar;