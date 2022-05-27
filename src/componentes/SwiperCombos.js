import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardRecipes from "../componentes/CardRecipes";
import "swiper/css";
import Collage from "../assets/ImgCombos.jpeg";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";;


const SwiperCombos = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (
        <>
            <Swiper
                slidesPerView={innerWidth > 768 ? 3 : 1}
                spaceBetween={90}
                loop={true}
                navigation={true}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardRecipes
                        texto="Combos Pierde Peso"
                        parrafo="Anya Taylor"
                        title=""
                        foto={Collage}
                        hideButtons
                        hideCart />
                </SwiperSlide>

                <SwiperSlide>
                    <CardRecipes
                        texto="Combos Pierde Peso"
                        parrafo="Anya Taylor"
                        title=""
                        foto={Collage}
                        hideButtons
                        hideCart />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperCombos;