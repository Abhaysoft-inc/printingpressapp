import React from 'react'
import ServicesCard from '../components/ServicesCard'

export default function ServicesSection() {
    return (
        <>

            <h1 className="text-center font-Poppins mt-6 text-2xl font-semibold"> Our Services</h1>

            <div className="servicescards px-5 space-y-6 lg:space-y-0 lg:space-x-6 lg:flex mt-10">
                <ServicesCard title={'Offset Printing'} img={'/images/offset.jpeg'} />
                <ServicesCard title={'Digital Printing'} img={'https://d2w577gk9zpoty.cloudfront.net/archives/127/202212/acf7b31671e2c00a18538f8218989a98153d0ee9312ebe1ace139a99d85f81ed.jpg'} />
                <ServicesCard title={'3D Printing'} img={'https://media.istockphoto.com/id/1907248074/photo/3d-printer-with-a-printed-object-on-the-table.webp?b=1&s=170667a&w=0&k=20&c=ipv14rZi3ikNXu_X8951CUKQ6yJj49NIsUrsSeoGgPc='} />

            </div>

        </>
    )
}
