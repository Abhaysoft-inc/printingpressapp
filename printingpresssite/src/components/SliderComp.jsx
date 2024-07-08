import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderComp() {
    return (
        <>

            <div className="slidercomp ">


                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false

                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide he><img src="/webp/g3.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/webp/g1.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/webp/g2.webp" alt="" /></SwiperSlide>


                </Swiper>

            </div>




        </>
    );
}
