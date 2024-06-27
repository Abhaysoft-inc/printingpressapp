import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class LoginPage extends Component {

    // create constant




    render() {
        return (
            <>

                <Navbar />

                <div className="loginbar flex justify-center items-center">

                    <div className="mt-16 loginbox m-auto bg-blue-950 w-96 h-[500px] rounded-md text-white ">

                        <p className="mt-9 font-Poppins text-center text-3xl font-bold">Login</p>
                        <form action="/api/" method="post">
                            <div className="mt-16 mx-16">
                                <p className='text-lg mb-1 mx-1 font-Poppins'>Username or Email</p>
                                <input type="text" className='text-lg rounded-md text-black p-1 font-semibold  active:border-white' name="username" id="" />
                                <p className='text-lg mb-1 mt-3 mx-1 font-Poppins'>Password</p>
                                <input type="password" className='text-lg rounded-md text-black p-1 font-semibold mb-1.5' name="password" id="" />

                                <a href="/signup" className='text-sm text-yellow-300'>Didn't have an account? Create here</a>

                                <button type="submit" className='text-center mt-10 mx-12 bg-white text-blue-950 font-bold font-Poppins px-10 text-xl py-1.5 rounded-full hover:bg-slate-100'>Login</button>

                            </div>
                        </form>


                    </div>


                </div>

            </>
        )
    }
}
