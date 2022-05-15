import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardRecipes from "../componentes/CardRecipes";
import "swiper/css";
import Collage from "../assets/ImgCombos.jpeg";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";;


const SwiperCombos = () => {
    return (
        <>
            <Swiper
                slidesPerView={3} spaceBetween={90} loop={true}
                navigation={true} modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardRecipes
                        texto="Combos Pierde Peso"
                        parrafo="Anya Taylor"
                        title=""
                        foto={Collage}
                        hideButtons />
                </SwiperSlide>

                <SwiperSlide>
                    <CardRecipes
                        texto="Combos Pierde Peso"
                        parrafo="Anya Taylor"
                        title=""
                        foto={Collage}
                        hideButtons />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperCombos;