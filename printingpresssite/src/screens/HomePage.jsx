
import React from 'react'

import NewNav from '../components/NewNav'
import ServicesCard from '../components/ServicesCard'
import SliderComp from '../components/SliderComp'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';

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
            {/* <HeroSection /> */}
            {/* <img src="/webp/banner.webp" className='w-screen' alt="" loading='lazy' /> */}
            <SliderComp />


            {/* <img src="/images/g4.JPG" className='mt-10 w-full h-36' alt="" /> */}


            {/* <div className="flex justify-center">
                <FaWhatsapp />
                <FaWhatsapp />

            </div> */}

            {/* <div className="getintouch mt-10 bg-red-">
                <p className="text-center font-bold text-2xl text-green-800">Get in Touch Direct on Whatsapp</p>
                <div className="whts flex justify-center mt-3">
                    <RiWhatsappFill color='green' size={40} className='mt-2 mr-3' />
                    <p className="text-2xl text-center mt-3 font-[1000]">9125318307, 9696745350</p>
                </div>

                <div className="whts flex justify-center mt-0   ">
                    <BiLogoGmail color='red' size={40} className='mt-2 mr-3' />
                    <p className="text-2xl text-center mt-3 font-[1000]">Karviprinting@gmail.com</p>
                </div>

                <div className="maill">

                </div>
            </div> */}

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

            {/* Help Section */}



            {/* <EnquiryPopup /> */}


            <Footer />






        </>
    )
}

