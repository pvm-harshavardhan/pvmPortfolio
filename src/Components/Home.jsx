import React from "react";
import HeroImage from "../assets/heroImage.png";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import SocialLinks from "./SocialLinks";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name="Home"
            className="pt-20 w-full min-h-screen bg-gradient-to-b from-stone-950 via-stone-950 to-cyan-950 flex items-center justify-center pb-5"
        >
            <div className="max-w-screen-lg w-full px-0 mx-0 flex flex-col sm:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
                <div className="w-full md:w-2/3 text-center sm:pl-4 sm:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6 leading-tight text-center md:text-left">
                        Hi there!<span className="select-none inline-block">&#128075;</span><br />
                        <span className="text-sky-700 block pt-2 mx-0">I'm a Web Developer</span>

                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                        Welcome! As a passionate web developer, I specialize in creating highly functional and visually stunning websites that provide seamless and engaging user experiences.
                    </p>

                    <div className="mb-8 text-white">
                        <SocialLinks />
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
                        <button
                            className="group text-white px-4 sm:px-6 py-2 sm:py-3 flex items-center rounded-md 
                            bg-gradient-to-r from-cyan-950 to-sky-700
                            hover:scale-105 transition-all duration-300"
                        >
                            <Link
                                to="Contact"
                                smooth={true}
                                duration={900}
                                offset={-70}
                                className="group cursor-pointer"
                            >
                                Connect
                            </Link>
                            <span className="group-hover:rotate-90 duration-500 ml-2">
                                <RiArrowRightDoubleFill className="text-base sm:text-xl" />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="select-none rounded-full w-1/2 md:w-full max-w-xs object-cover shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;