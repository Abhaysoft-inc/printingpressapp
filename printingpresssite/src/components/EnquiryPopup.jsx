// src/components/EnquiryPopup.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnquiryPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const lastDismissed = localStorage.getItem('popupDismissedAt');
        const thirtyMinutes = 10 * 60 * 1000; // 30 minutes in milliseconds
        const now = new Date().getTime();

        if (!lastDismissed || now - lastDismissed > thirtyMinutes) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000); // 3 seconds

            return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
        }
    }, []);

    const togglePopup = () => {
        if (isOpen) {
            localStorage.setItem('popupDismissedAt', new Date().getTime());
        }
        setIsOpen(!isOpen);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        } else if (name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log('Form submitted', { name, phone });
            //getting data
            const fullName = e.target.fullName.value;
            const phoneNumber = e.target.phoneNumber.value;
            const message = e.target.message.value;

            axios.post("https://printingpressapp-production.up.railway.app/enquiry/send", { fullName, phoneNumber, message }).then(Response => {
                console.log(Response);
            }).catch(error => {
                console.log(error);
            });




            togglePopup();
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
                        <button
                            onClick={togglePopup}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            &#x2715; {/* X symbol */}
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-center">Request Pricing!</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">
                                    Full Name
                                </label>
                                <input name='fullName'
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700">
                                    Phone No.
                                </label>
                                <input name='phoneNumber'
                                    type="text"
                                    id="phone"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your Phone No."
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700">
                                    Message
                                </label>
                                <textarea name='message'
                                    id="message"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EnquiryPopup;
