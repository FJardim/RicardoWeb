import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularSearch from '../componentes/PopularSearch';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Popular1 from '../assets/popular1.png';
import Popular2 from '../assets/popular2.png';
import { Navigation } from "swiper";

const SwiperPopular = () => {
    return (
        <>
            <Swiper
                slidesPerView={2} spaceBetween={20} loop={true}
                navigation={true} modules={[Navigation]}
                className="mySwiper container mt-10 mb-10 grid grid-cols-2 gap-3"
            >
                <SwiperSlide>
                    <PopularSearch title="Popular Recipes" img={Popular1} />
                </SwiperSlide>

                <SwiperSlide>
                    <PopularSearch title="Popular Meal Planners" img={Popular2} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperPopular;