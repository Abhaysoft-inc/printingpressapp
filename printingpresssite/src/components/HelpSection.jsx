import React from 'react'
import { BiSupport } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";

export default function HelpSection() {
    return (
        <>

            {/* <div className="help mt-10 mb-16">
                <h2 className="about text-center text-3xl font-Poppins font-semibold mt-14">Help Center</h2>
                <div className="flex justify-between mx-44 mt-16 space-x-6">

                    <div className="box1 ">
                        <div className="flex justify-center">
                            <BiSupport size={160} /></div>
                        <p className="text-center font-[600] text-lg mt-1">Call us for queries</p>
                        <p className="text-center text-[#666666]">Helpdesk: +91 99999999</p>
                        <p className="text-center text-[#666666]">(Mon - Sat: 10:00 AM - 7:00 PM)</p>

                    </div>
                    <div className="box2 ">
                        <div className="flex justify-center">
                            <MdOutlineEmail size={160} /></div>
                        <p className="text-center font-[600] text-lg mt-1">E-Mail us</p>
                        <p className="text-center text-[#666666]">Sales enquiries and customer support:</p>
                        <p className="text-center text-[#666666]">Karviprinting.helpcare@gmail.com</p>
                    </div>
                    <div className="box1 ">
                        <div className="flex justify-center">
                            <IoIosPin size={160} /></div>
                        <p className="text-center font-[600] text-lg mt-1">Postal address</p>
                        <p className="text-center text-[#666666]">Karvi Printing Press Pvt. Ltd.
                        </p>
                        <p className="text-center text-[#666666]">Narayan Puram Colony, Padari Bazar, <br /> Gorakhpur Uttar Pradesh - 273014</p>
                    </div>

                </div>

            </div> */}


            <div className="help mt-10 mb-16">
                <h2 className="about text-center text-3xl font-Poppins font-semibold mt-14 text-gray-800">
                    Help Center
                </h2>
                <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-44 mt-16 space-y-6 md:space-y-0 md:space-x-6">
                    <div className="box1">
                        <div className="flex justify-center">
                            <BiSupport className="w-20 h-20 md:w-40 md:h-40" />
                        </div>
                        <p className="text-center font-semibold text-lg mt-1 text-gray-800">Call us for queries</p>
                        <p className="text-center text-gray-600">Helpdesk: <b> +91 9696745350</b></p>
                        <p className="text-center text-gray-600">(Mon - Sat: 10:00 AM - 7:00 PM)</p>
                    </div>
                    <div className="box2">
                        <div className="flex justify-center">
                            <MdOutlineEmail className="w-20 h-20 md:w-40 md:h-40" />
                        </div>
                        <p className="text-center font-semibold text-lg mt-1 text-gray-800">E-Mail us</p>
                        <p className="text-center text-gray-600">Sales enquiries and customer support:</p>
                        <p className="text-center text-gray-600">Karviprinting.helpcare@gmail.com</p>
                    </div>
                    <div className="box1">
                        <div className="flex justify-center">
                            <IoIosPin className="w-20 h-20 md:w-40 md:h-40" />
                        </div>
                        <p className="text-center font-semibold text-lg mt-1 text-gray-800">Postal address</p>
                        <p className="text-center text-gray-600">Karvi Printing Press Pvt. Ltd.</p>
                        <p className="text-center text-gray-600">
                            Narayan Puram Colony, Padari Bazar, <br />
                            Gorakhpur Uttar Pradesh - 273014
                        </p>
                    </div>
                </div>
            </div>






        </>
    )
}
