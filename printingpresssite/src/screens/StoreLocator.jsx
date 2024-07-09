import React from 'react'
import { Helmet } from 'react-helmet'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'

export default function StoreLocator() {
    return (
        <>

            <Helmet>
                <title>Store Locator - Karvi Printing Gorakhpur</title>
            </Helmet>
            <NewNav />

            {/* Search */}

            <div className="mx-28   my-10">
                <p className="font-semibold text-lg">Find My Store</p>
                <input type="text" placeholder='Pincode' className='border rounded-md px-3 mt-2 py-2 w-96 border-slate-400' />
            </div>





            {/* <Footer /> */}


        </>
    )
}
