import React, { Component } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { PiShippingContainerFill } from "react-icons/pi";
import { RiUser5Fill } from "react-icons/ri";
import { PiSealQuestionFill } from "react-icons/pi";

export default class NewNav extends Component {
    render() {
        return (
            <>

                {/* top menu */}

                <div className="tpmnu hidden lg:flex justify-between text-sm font-[400] font-Poppins bg-slate-100">
                    <ul className="ml-10">
                        <p className="brand p-[.5rem] flex "> <PiShippingContainerFill size={21} className='mr-2' /> Track Order</p>

                    </ul>

                    <ul className="flex space-x-5 mr-16">
                        <a className="p-[.5rem] text-violet-900 flex" href=''><FaLocationDot size={18} className='mr-2' /> Store Locator</a>
                        <a href='' className="p-[.5rem]">Sample Kit</a>
                        <a href='' className="h-full bg-orange-600 p-[.5rem] text-white">Business Solutions</a>

                    </ul>

                </div>

                {/* lower menu */}


                <div className="lowermnu sticky top-0  flex px-2 py-4 justify-between bg-white">

                    <div className="flex">
                        <a href="/">
                            <img src="/images/logo2.png" alt="" className="w-14 h-12 ml-6" />
                        </a>
                        <p className="my-2 ml-3 text-lg font-[700] font-Poppins">Karvi Printing</p>
                        {/* Search box */}
                        <form action="" className="relative ml-9">
                            <IoMdSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                            <input
                                type="text"
                                className="border my-1.5 rounded-md py-2 pl-10 pr-3 border-slate-400 w-64"
                                placeholder="Search"
                            />
                        </form>
                    </div>

                    <div className="flex p-[.5rem] space-x-7 mr-16">
                        <a className="flex" href=''><PiSealQuestionFill size={24} className='mr-2' /> Help Center</a>
                        <a href='/login' className="flex"><RiUser5Fill size={24} className='mr-2' /> Login / Signup</a>
                        <a href='' className=""><FaCartShopping size={24} className='mt-1' /></a>
                    </div>



                </div>

            </>
        )
    }
}
