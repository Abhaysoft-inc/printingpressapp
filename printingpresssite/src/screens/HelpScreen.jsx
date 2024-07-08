import React from 'react'
import NewNav from '../components/NewNav'
import HelpSection from '../components/HelpSection'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

export default function HelpScreen() {
    return (
        <>
            <Helmet>
                <title>Help Center - Karvi Printing</title>
                <meta name='description' content='We are committed to making your printing experience smooth and successful. Let the Karvi Printing Help Center be your partner in achieving stunning print results!' />
            </Helmet>

            <NewNav />
            <HelpSection />
            <Footer />


        </>
    )
}
