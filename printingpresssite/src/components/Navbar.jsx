import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import '../Navbar.css'; // Assuming you have a CSS file for Navbar styles
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="navbar lg:flex lg:justify-between bg-blue-950 py-1">
                <ul className="brand">
                    <li className="text-center text-white text-xl font-[600] font-Poppins">Welcome to Karvi Printing!</li>

                </ul>

                <ul className="hidden">
                </ul>
            </div>
            {/* Lower navbar */}
            <div className="lowernav flex justify-between p-1 py-3 px-8 bg-gray-100">
                <div className="flex">
                    <a href="/">
                        <img src="/images/logo2.png" alt="" className="w-14 h-12" /></a>
                    <p className="my-2 ml-3 text-lg font-[700] font-Poppins">Karvi Printing</p>
                </div>
                {isMenuOpen ? <RxCross2 size={40} onClick={toggleMenu} /> : <IoMdMenu size={40} onClick={toggleMenu} />}
                {/* <IoMdMenu size={40} onClick={toggleMenu} /> */}
            </div>

            {/* Collapsible menu */}
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mx-2 py-3">
                    <li className="hover:bg-gray-300">Home</li>
                    <li><a href=''>Services </a></li>
                    <li><a href=''>Enquiry </a></li>
                    <li><a href='/login'>Login </a></li>
                    <li><a href=''>Contact </a></li>
                </ul>
            </div>
        </>
    );
}
