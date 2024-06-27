import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import '../Navbar.css'; // Assuming you have a CSS file for Navbar styles

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Lower navbar */}
            <div className="lowernav flex justify-between p-1 py-3 px-8 bg-gray-100">
                <div className="flex">
                    <img src="/images/logo2.png" alt="" className="w-14 h-12" />
                    <p className="my-2 ml-3 text-lg font-[700] font-Poppins">Karvi Printing</p>
                </div>
                <IoMdMenu size={40} onClick={toggleMenu} />
            </div>

            {/* Collapsible menu */}
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mx-2 py-3">
                    <li className="hover:bg-gray-300">Home</li>
                    <li>Services</li>
                    <li>Enquiry</li>
                    <li>Login</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    );
}
