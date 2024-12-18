import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: <FaLinkedin size={30} />,
            href: "https://www.linkedin.com/in/pvmharsha-vardhan",
            hover: "hover:text-blue-900 hover:scale-110 hover:shadow-2xl hover:shadow-blue-900",
        },
        {
            id: 2,
            child: <FaGithub size={30} />,
            href: "https://github.com/pvm-harshavardhan",
            hover: "hover:text-gray-400 hover:scale-110 hover:shadow-2xl hover:shadow-blue-900",
        },
        {
            id: 3,
            child: <HiOutlineMail size={30} />,
            href: "mailto:pvmharshavardhan2023@gmail.com",
            hover: "hover:text-red-800 hover:scale-110 hover:shadow-2xl hover:shadow-blue-900",
        },
        {
            id: 4,
            child: <FaXTwitter size={30} />,
            href: "https://x.com/pvm_harsha",
            hover: "hover:text-blue-600 hover:scale-110 hover:shadow-2xl hover:shadow-blue-900",
        },
    ];

    return (
        <div>
            <ul className="flex space-x-4 justify-center sm:justify-start sm:space-x-4 md:space-x-6 sm:items-center sm:my-10">
                {links.map((link) => (
                    <li key={link.id} className=" px-1 sm:px-2">
                        <a
                            href={link.href ? link.href : "/"}
                            className={`flex justify-center items-center sm:text-4xl ${link.hover} transition-all duration-300`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
