
import React from 'react'

import NewNav from '../components/NewNav'

import SliderComp from '../components/SliderComp'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import ServicesSection from '../components/ServicesSection';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Karvi Printing - Gorakhpur's Fastest Printing Service: Brochures, Flyers & More
                </title>
                <meta name="description" content="High-quality, affordable printing for businesses & individuals. Brochures, flyers, business cards & more. Fast turnaround, free quotes. Call now!" />
                <meta name='keywords' content='printing services in Gorakhpur, Gorakhpur printing company, Gorakhpur print shop, near me printing press Gorakhpur, best printing press in Gorakhpur, top printers Gorakhpur, high-quality printing services in Gorakhpur for businesses, affordable printing for individuals in Gorakhpur, custom printing solutions near me, large format printing for events in Gorakhpur, eco-friendly printing company in Gorakhpur' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>

            <NewNav />
            <SliderComp />

            <img src="/images/g4.JPG" className='mt-2' alt="" />

            <div className="flex justify-center mt-6">

            </div>


            {/* Services */}
            <ServicesSection />



            {/* about us */}
            <h2 className="about text-center text-2xl font-Poppins font-semibold mt-26">About us</h2>

            <div className="about-section mx-6 mt-10 mb-5 bg-slate-100 shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center lg:items-start">
                <img src="/webp/banner.webp" className='rounded-lg w-full lg:w-1/2' alt="" />
                <div className="dec mt-4 lg:mt-0 lg:ml-6 p-3 lg:w-1/2">
                    <p className="text-2xl font-semibold font-Poppins">Karvi Printing</p>
                    <p className="mt-3">
                        Karvi Printing is a printing company in Gorakhpur offering the full range of printing services to various clients’ operations across many different industries and sectors. We are a one-stop shop for all your print requirements. Our customized solutions are tailored specifically to your individual needs, ensuring the best result every time through our preparation, printing, finishing, and binding process.
                    </p>
                </div>
            </div>




            <Footer />






        </>
    )
}

