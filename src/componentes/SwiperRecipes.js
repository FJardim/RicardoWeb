import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Recipes from '../componentes/Recipes';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Pasticho from '../assets/pasticho.png';
import Bebida from '../assets/bebida.png';
import { Navigation } from "swiper";

const SwiperRecipes = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className="p-8">
            <Swiper
                slidesPerView={innerWidth > 768 ? 2 : 1}
                spaceBetween={40}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper m-auto"
            >
                <SwiperSlide>
                    <Recipes
                        title="Lasagna"
                        descsh="Space for a small product description"
                        cost="$36.99"
                        desccost="Pescription cost"
                        level="Expert"
                        time="60-80 Minutes"
                        ing="5 pcs"
                        img={Pasticho}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Recipes
                        title="Margarita"
                        descsh="Space for a small product description"
                        cost="$6.99"
                        desccost="Pescription cost"
                        level="Easy"
                        time="6-8 Minutes"
                        ing="3 pcs"
                        img={Bebida}
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default SwiperRecipes;