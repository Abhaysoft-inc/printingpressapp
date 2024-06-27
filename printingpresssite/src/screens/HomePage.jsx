
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

            <div className="about-section mx-6 mt-10 mb-5 bg-pink-200 rounded-lg">
                <img src="/images/banner.png" className='rounded-lg' alt="" />
                <div className="dec mt-4 p-3">
                    <p className="text-2xl mt-4 font-semibold font-Poppins">Karvi Printing</p>
                    <p className=" mt-3">Karvi Printing is a printing company in Gorakhpur offering the full range of printing services to various clients’ operations across many different industries and sectors. We are a one-stop shop for all your print requirements. Our customized solutions are tailored specifically to your individual needs, ensuring the best result every time through our preparation, printing, finishing, and binding process.</p>

                </div>



            </div>


        </>
    )
}

