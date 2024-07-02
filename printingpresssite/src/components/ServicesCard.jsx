import React from 'react';

export default function ServicesCard({ title, img }) {
    return (
        <div className="box1 shadow-lg border border-slate-50 w-full h-64 p-3 rounded-md text-xl flex flex-col items-center">
            <p className="text-center font-semibold font-Poppins mt-2">{title}</p>
            <img
                src={img}
                className="w-full h-44 object-cover mt-2 rounded-md"
                alt=""
            />
        </div>
    );
}
