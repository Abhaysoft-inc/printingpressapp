import React, { useState, useEffect, useRef } from 'react';
import NewNav from '../components/NewNav';
import SliderComp from '../components/SliderComp';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import ServicesSection from '../components/ServicesSection';
import { FaWhatsapp } from 'react-icons/fa6';

export default function HomePage() {
    const [showChat, setShowChat] = useState(false);
    const chatRef = useRef(null);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    const handleClickOutside = (event) => {
        if (chatRef.current && !chatRef.current.contains(event.target)) {
            setShowChat(false);
        }
    };

    useEffect(() => {
        if (showChat) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showChat]);

    return (
        <>
            <Helmet>
                <title>Karvi Printing - Gorakhpur's Fastest Printing Service: Brochures, Flyers & More</title>
                <meta name="description" content="High-quality, affordable printing for businesses & individuals. Brochures, flyers, business cards & more. Fast turnaround, free quotes. Call now!" />
                <meta name='keywords' content='printing services in Gorakhpur, Gorakhpur printing company, Gorakhpur print shop, near me printing press Gorakhpur, best printing press in Gorakhpur, top printers Gorakhpur, high-quality printing services in Gorakhpur for businesses, affordable printing for individuals in Gorakhpur, custom printing solutions near me, large format printing for events in Gorakhpur, eco-friendly printing company in Gorakhpur' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>

            <NewNav />
            <SliderComp />

            <img src="/images/g4.JPG" className='mt-2 h-[120px] lg:h-auto md:h-auto' alt="" />

            <div className="flex justify-center mt-6">
            </div>
            {/* Services */}
            <ServicesSection />

            {/* about us */}
            <h2 className="about text-center text-2xl font-Poppins font-semibold mt-20">About us</h2>

            <div className="about-section mx-6 mt-10 mb-5 bg-slate-100 shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center lg:items-start">
                <img src="/webp/banner.webp" className='rounded-lg w-full lg:w-1/2' alt="" />
                <div className="dec mt-4 lg:mt-0 lg:ml-6 p-3 lg:w-1/2">
                    <p className="text-2xl font-semibold font-Poppins">Karvi Printing</p>
                    <p className="mt-3">
                        Karvi Printing is a printing company in Gorakhpur offering the full range of printing services to various clients’ operations across many different industries and sectors. We are a one-stop shop for all your print requirements. Our customized solutions are tailored specifically to your individual needs, ensuring the best result every time through our preparation, printing, finishing, and binding process.
                    </p>
                </div>
            </div>

            <div className="fixed bottom-3 right-6 z-30">
                <div
                    className="rounded-full bg-green-600 p-3 cursor-pointer"
                    onClick={toggleChat}
                >
                    <FaWhatsapp size={41} color='white' />
                </div>
                {showChat && (
                    <div ref={chatRef} className="absolute bottom-16 right-6 bg-white w-72 h-96 rounded-lg shadow-lg flex flex-col">
                        <div className="bg-green-600 text-white p-3 flex justify-between items-center">
                            <span>Chat with us</span>
                            <button onClick={toggleChat} className="text-white font-bold">X</button>
                        </div>
                        <div className="flex-1 p-3 overflow-y-auto">
                            <div className="bg-gray-100 p-2 rounded-lg mb-2">
                                <p className="text-sm">Hello! How can we help you?</p>
                            </div>
                            {/* Add more messages here */}
                        </div>
                        <div className="p-3 border-t border-gray-200">
                            <a
                                href="https://wa.link/ily1c3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-green-600 text-white py-2 rounded-lg"
                            >
                                Start Chat
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}
