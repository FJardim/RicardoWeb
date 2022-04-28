import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CategorySectionCard from '../componentes/CategorySectionCard';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function SwaInfo() {
    return (
        <>
            <Swiper
                slidesPerView={2} spaceBetween={20} loop={true} pagination={{ clickable: true, }}
                navigation={true} modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CategorySectionCard titulo="POPULAR RECIPES" img="https://api.tubeneficiosi.com/uploads/users/1632409630532-445581901.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategorySectionCard titulo="POPULAR MEAL PLANNERS" img="http://tubeneficiosi.com/static/media/monitos.cc60357c.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}