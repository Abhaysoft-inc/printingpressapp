import React, { useState } from 'react';

const MobileDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-50"
                onClick={toggleDrawer}
            >
                Menu
            </button>

            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleDrawer}
            ></div>

            <div
                className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <h2 className="text-xl font-semibold">Drawer Menu</h2>
                    <ul className="mt-4">
                        <li className="py-2 border-b border-gray-200">Item 1</li>
                        <li className="py-2 border-b border-gray-200">Item 2</li>
                        <li className="py-2 border-b border-gray-200">Item 3</li>
                        <li className="py-2 border-b border-gray-200">Item 4</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileDrawer;
