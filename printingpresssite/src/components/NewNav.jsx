import React, { useState } from 'react'
import { IoMdSearch, } from 'react-icons/io'
import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { PiShippingContainerFill } from "react-icons/pi";
import { RiUser5Fill } from "react-icons/ri";
import { PiSealQuestionFill } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function NewNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>

            {/* top menu */}

            <div className="tpmnu hidden lg:flex md:flex justify-between text-sm font-[400] font-Poppins bg-[#f8f9fa]">
                <ul className="ml-10">
                    <p className="brand p-[.5rem] flex "> <PiShippingContainerFill size={21} className='mr-2' /> Track Order</p>

                </ul>

                <ul className="flex space-x-5 mr-16">
                    <Link className="p-[.5rem] text-violet-900 flex" to={''}><FaLocationDot size={18} className='mr-2' /> Store Locator</Link>
                    <Link to={''} className="p-[.5rem]">Sample Kit</Link>
                    <Link tp={''} className="h-full bg-orange-600 p-[.5rem] text-white">Business Solutions</Link>

                </ul>

            </div>

            {/* pc lower menu */}


            <div className="hidden lowermnu sticky top-0  lg:flex md:flex px-2 py-4 justify-between bg-white shadow-none z-10">

                <div className="flex">
                    <Link to={"/"}>
                        <img src="/images/logo2.png" alt="" className="w-14 h-12 ml-6" />
                    </Link>
                    <Link className="my-2 ml-3 text-lg font-[700] font-Poppins" to={'/'}>Karvi Printing</Link>
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

                <div className="flex p-[.5rem] space-x-7 mr-16 text-slate-600">
                    <Link className="flex" to={''}><PiSealQuestionFill size={24} className='mr-2' /> Help Center</Link>
                    <Link to={'/login'} className="flex"><RiUser5Fill size={24} className='mr-2' /> Login / Signup</Link>

                    <Link to='' className=""><FaCartShopping size={24} className='mt-1' /></Link>
                </div>



            </div>


            {/* category menu */}

            <div className="hidden cat-menu bg-[#f8f9fa] lg:flex md:flex space-x-4 font-Poppins text-[#666666] px-14 py-2.5 text-[15px] ">

                <a href="" className='text-black'>All Products</a>
                <a href="">Business Card</a>
                <a href="">Marketing Material</a>
                <a href="">Signs & Banners</a>
                <a href="">Invitations & Stationary</a>
                <a href="">Stickers & Labels</a>
                <a href="">Letter Board</a>
                <a href="">Digital Print</a>
                <a href="">Offset Print</a>
                <a href="">Service</a>


            </div>



            {/* Mobile menu */}

            <div className="mobmenu flex justify-between items-center p-3 lg:hidden md:hidden">
                <div className="row flex flex-wrap" onClick={toggleDrawer}>
                    <IoMenuOutline size={28} className='' />
                </div>
                <Link to={"/"}>
                    <span className='flex'>
                        <img src="/images/logo2.png" className='h-9' alt="" />
                        <p className=" font-Poppins font-bold ml-2 mt-1.5">Karvi Printing</p>
                    </span>

                </Link>
                <div className="row flex flex-wrap" >
                    <IoMdSearch className="" size={24} />
                    <Link to={''} className=""><FaCartShopping size={24} className=' ml-2 mr-2' /></Link>


                </div>




            </div>

            {/* drawer */}

            <div>


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
                        <h2 className="text-xl font-semibold">Karvi Printing</h2>
                        <ul className="mt-4">
                            <li className="py-2 border-b border-gray-200"><Link to={'/'}>Home</Link></li>
                            <li className="py-2 border-b border-gray-200"><Link to={'/services'}>Services</Link></li>
                            <li className="py-2 border-b border-gray-200"><Link to={'/login'}>Login</Link></li>
                            <li className="py-2 border-b border-gray-200"><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>






        </>
    )
}

export default NewNav;

