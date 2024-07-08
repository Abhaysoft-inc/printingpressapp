import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'


export default function CTASection() {
    return (
        <>
            <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Contact Us Today!</p>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Have questions or need more information?
                        </p>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                            Reach out to us via WhatsApp or email:
                        </p>
                        <div className="mt-6 flex justify-center space-x-6">
                            <a
                                href="https://wa.me/your-whatsapp-number"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                            >
                                <FaWhatsapp className="-ml-1 mr-3 h-5 w-5" />
                                WhatsApp
                            </a>
                            <a
                                href="mailto:your-email@example.com"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
