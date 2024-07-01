import React, { Component } from 'react'
import { IoMdSearch } from 'react-icons/io'

export default class NewNav extends Component {
    render() {
        return (
            <>

                {/* top menu */}

                <div className="tpmnu hidden lg:flex justify-between text-sm font-[400] font-Poppins bg-slate-100">
                    <ul className="ml-10">
                        <p className="brand p-[.5rem]">Track Order</p>

                    </ul>

                    <ul className="flex space-x-5 mr-16">
                        <p className="p-[.5rem] text-violet-900">Store Locator</p>
                        <p className="p-[.5rem]">Sample Kit</p>
                        <p className="h-full bg-orange-600 p-[.5rem] text-white">Business Solutions</p>

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

                    <div className="flex p-[.5rem] space-x-4 mr-16">
                        <p className="">Help Center</p>
                        <p className="">Login/Signup</p>
                        <p className="">Cart</p>
                    </div>



                </div>

            </>
        )
    }
}