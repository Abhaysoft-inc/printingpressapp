import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default class SignUpPage extends Component {
    render() {
        return (

            <>

                <Navbar />

                <div className="loginbar flex justify-center items-center">

                    <div className="mt-16 loginbox m-auto bg-blue-950 w-96 h-[690px] rounded-lg text-white mb-10 ">

                        <p className="mt-9 font-Poppins text-center text-3xl font-bold">Signup</p>
                        <form action="/api/" method="post">
                            <div className="mt-16 mx-16">
                                <p className='text-lg mb-1 mx-1 font-Poppins'>Full Name</p>
                                <input type="text" className='text-lg rounded-md text-black p-1 font-semibold  active:border-white' name="fullName" id="" />

                                <p className='text-lg mt-3 mb-1 mx-1 font-Poppins'>Email</p>
                                <input type="text" className='text-lg rounded-md text-black p-1 font-semibold  active:border-white' name="email" id="" />

                                <p className='text-lg mt-3 mb-1 mx-1 font-Poppins'>Phone No.</p>
                                <input type="text" className='text-lg rounded-md text-black p-1 font-semibold  active:border-white' name="phoneNumber" id="" />

                                <p className='text-lg mt-3 mb-1 mx-1 font-Poppins'>Address</p>
                                <input type="text" className='text-lg rounded-md text-black p-1 font-semibold  active:border-white' name="address" id="" />

                                <p className='text-lg mb-1 mt-3 mx-1 font-Poppins'>Password</p>
                                <input type="password" className='text-lg rounded-md text-black p-1 font-semibold mb-1.5' name="password" id="" />

                                <a href="/login" className='text-sm text-yellow-300'>Already have an account? Login here</a>

                                <button type="submit" className='text-center mt-10 mx-12 bg-white text-blue-950 font-bold font-Poppins px-10 text-xl py-1.5 rounded-full hover:bg-slate-100'>Signup</button>

                            </div>
                        </form>


                    </div>


                </div>


            </>

        )
    }
}
