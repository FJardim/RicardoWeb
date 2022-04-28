import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperHome = () => {
    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{ clickable: true, }}
                navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img className="w-full h-72" src={img1} alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-72" src={img2} alt="img2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-72" src={img3} alt="imh3" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default SwiperHome; 