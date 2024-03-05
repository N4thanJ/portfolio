"use client"

import React, { useState } from "react";
import HamburgerButton from "./Hamburger";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-secondary h-[80px] flex justify-end sm:justify-between items-center px-[5%] text-white font-bold">
                <h1 className="text-xl font-black tracking-wide hidden sm:block ">Nathan Jordens</h1>
                <ul className={`gap-4 uppercase hidden md:flex`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="md:hidden">
                    <HamburgerButton onClick={toggleMenu} />
                </div>
            </nav>
            {isMenuOpen && (
                <nav className="bg-secondary h-[calc(100vh-80px)] flex items-center text-white font-semibold">
                    <ul className="uppercase w-full text-center">
                        <li><a className="block w-full py-4" href="#">Home</a></li>
                        <li><a className="block w-full py-4" href="#">About</a></li>
                        <li><a className="block w-full py-4" href="#">Skills</a></li>
                        <li><a className="block w-full py-4" href="#">Work</a></li>
                        <li><a className="block w-full py-4" href="#">Contact</a></li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Navbar;
