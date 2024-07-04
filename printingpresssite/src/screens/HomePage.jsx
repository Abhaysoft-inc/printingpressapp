
import React from 'react'

import NewNav from '../components/NewNav'
import { Link } from 'react-router-dom'
import ServicesCard from '../components/ServicesCard'
import EnquiryPopup from '../components/EnquiryPopup'

export default function HomePage() {
    return (
        <>

            <NewNav />
            <img src="/webp/banner.webp" className='w-screen' alt="" loading='lazy' />

            <h1 className="text-center font-Poppins mt-6 text-2xl font-semibold"> Our Services</h1>

            <div className="servicescards px-5 space-y-6 lg:space-y-0 lg:space-x-6 lg:flex mt-10">
                <ServicesCard title={'Offset Printing'} img={'/images/offset.jpeg'} />
                <ServicesCard title={'Digital Printing'} img={'https://d2w577gk9zpoty.cloudfront.net/archives/127/202212/acf7b31671e2c00a18538f8218989a98153d0ee9312ebe1ace139a99d85f81ed.jpg'} />
                <ServicesCard title={'3D Printing'} img={'https://media.istockphoto.com/id/1907248074/photo/3d-printer-with-a-printed-object-on-the-table.webp?b=1&s=170667a&w=0&k=20&c=ipv14rZi3ikNXu_X8951CUKQ6yJj49NIsUrsSeoGgPc='} />

            </div>


            {/* about us */}

            <h2 className="about text-center text-2xl font-Poppins font-semibold mt-24">About us</h2>

            <div className="about-section mx-6 mt-10 mb-5 bg-slate-100 shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center lg:items-start">
                <img src="/webp/banner.webp" className='rounded-lg w-full lg:w-1/2' alt="" />
                <div className="dec mt-4 lg:mt-0 lg:ml-6 p-3 lg:w-1/2">
                    <p className="text-2xl font-semibold font-Poppins">Karvi Printing</p>
                    <p className="mt-3">
                        Karvi Printing is a printing company in Gorakhpur offering the full range of printing services to various clients’ operations across many different industries and sectors. We are a one-stop shop for all your print requirements. Our customized solutions are tailored specifically to your individual needs, ensuring the best result every time through our preparation, printing, finishing, and binding process.
                    </p>
                </div>
            </div>

            <EnquiryPopup />




        </>
    )
}

