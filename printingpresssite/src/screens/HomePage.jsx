
import React from 'react'
import Navbar from '../components/Navbar'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <img src="/images/banner.png" className='w-screen' alt="" />

            <h1 className="text-center font-Poppins mt-6 text-2xl font-semibold"> Our Services</h1>

            <div className="servicescards px-5 space-y-6  lg:flex mt-10">
                <div className="box1 bg-gray-400 w-full h-52">

                </div>
                <div className="box1 bg-gray-400 w-full h-52">

                </div>
                <div className="box1 bg-gray-400 w-full h-52">

                </div>
            </div>

            {/* about us */}

            <h2 className="about text-center mt-6 text-2xl font-Poppins font-semibold">About us</h2>


        </>
    )
}

