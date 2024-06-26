import React from 'react'
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
    return (
        <>
            {/* top navbar */}

            <div className="navbar lg:flex lg:justify-between bg-blue-950 py-1">
                <ul className="brand">
                    <li className="text-center text-white text-xl font-[600] font-Poppins">Welcome to Karvi Printing!</li>

                </ul>

                <ul className="hidden">
                </ul>
            </div>
            {/* lower navbar */}

            <div className="lovernav flex justify-between p-1 py-3 px-8 bg-gray-100">

                <div className="flex">
                    <img src="/images/logo2.png" alt="" className='w-14 h-12' />
                    <p className="my-2 ml-3 text-lg font-[700] font-Poppins">Karvi Printing</p>

                </div>
                <IoMdMenu size={40} />
            </div>


        </>
    )
}
