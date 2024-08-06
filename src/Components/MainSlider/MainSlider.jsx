import React from 'react';
import slid1 from "../../Assets/images/slider-image-1.jpeg";
import slid2 from "../../Assets/images/slider-image-2.jpeg";
import slid3 from "../../Assets/images/slider-image-3.jpeg";
import blog1 from "../../Assets/images/grocery-banner-2.jpeg";
import blog2 from "../../Assets/images/grocery-banner.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
export default function MainSlider() {
    return (
        < >
            <div className="container">
                <div className="row gx-1  my-4">
                    <div className="col-md-9">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            modules={[Pagination, Autoplay, A11y]}
                            autoplay={{
                                delay: 4000,
                            }}
                            pagination={{ clickable: true }}
                            Autoplay
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide><img className='w-100' height={400} src={slid1} alt="" /></SwiperSlide>
                            <SwiperSlide><img  className='w-100' height={400} src={slid2} alt="" /></SwiperSlide>
                            <SwiperSlide><img  className='w-100' height={400} src={slid3} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-md-3">
                                <img height={200} className='w-100 ' src={blog1} alt="" />
                                <img height={200} className='w-100' src={blog2} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
