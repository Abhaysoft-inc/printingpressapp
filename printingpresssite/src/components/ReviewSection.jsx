import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const apiKey = 'AIzaSyDmXMl2qGDoiVWu2IyQAVuepV7sqAIiHXg'; // Replace with your Google API key
const placeId = 'ChIJfZpxTL1bkTkRtCGp13DTl3M'; // Replace with your Google Maps Place ID

const ReviewsSection = () => {
    const [reviews, setReviews] = useState([]);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: ['places'],
    });

    useEffect(() => {
        if (isLoaded) {
            const service = new window.google.maps.places.PlacesService(document.createElement('div'));
            const request = { placeId, fields: ['reviews'] };

            service.getDetails(request, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && place.reviews) {
                    setReviews(place.reviews);
                }
            });
        }
    }, [isLoaded]);

    return (
        <div className="reviews-section mx-6 mt-10 mb-5">
            <h2 className="text-center mt-6 text-2xl font-Poppins font-semibold">Our Reviews</h2>
            <div className="reviews-cards mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card bg-white shadow-lg rounded-lg p-4">
                        <p className="text-lg font-semibold">{review.author_name}</p>
                        <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                        <p className="mt-2">{review.text}</p>
                        <div className="flex items-center mt-2">
                            {[...Array(review.rating)].map((star, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.921a1 1 0 00.95.691h4.144c.97 0 1.371 1.24.588 1.81l-3.36 2.442a1 1 0 00-.363 1.118l1.27 3.92c.3.922-.755 1.688-1.54 1.117l-3.36-2.442a1 1 0 00-1.176 0l-3.36 2.442c-.784.571-1.84-.195-1.54-1.117l1.27-3.92a1 1 0 00-.363-1.118L2.81 9.348c-.783-.57-.383-1.81.588-1.81h4.144a1 1 0 00.95-.691l1.27-3.92z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;
