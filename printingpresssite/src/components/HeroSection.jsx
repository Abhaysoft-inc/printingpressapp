import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className="relative bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-20 md:py-32 md:flex md:items-center md:justify-between">
                    {/* Left side (text content) */}
                    <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
                            Join Our Dealership
                        </h2>
                        <p className="text-xl text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi interdum mollis sapien id feugiat.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg uppercase tracking-wider text-sm transition duration-300 ease-in-out"
                        >
                            <FaPhoneAlt className="inline-block mr-2 text-xl" /> Contact Us
                        </a>
                    </div>
                    {/* Right side (image) */}
                    <div className="md:w-1/2">
                        <img
                            className="mx-auto md:mx-0 w-full md:max-w-lg rounded-lg shadow-lg"
                            src="https://via.placeholder.com/600x400"
                            alt="Hero"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
