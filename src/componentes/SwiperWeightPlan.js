import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LogoPlan from "../assets/Premium-icon.svg";
import WeightPlan from '../componentes/WeightPlan';
import { Navigation } from "swiper";
import whPlan from "../assets/girltraining.jpg"

const SwiperWeightPlan = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className="container px-8">

            <Swiper
                slidesPerView={innerWidth > 768 ? 3 : 1}
                spaceBetween={20}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper m-auto "
            >
                <SwiperSlide>
                    <WeightPlan
                        hideCart
                        title="Weight loss plan"
                        logo={LogoPlan}
                        text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds"
                        img={whPlan}
                        precio="150 $ " />
                </SwiperSlide>
                <SwiperSlide>
                    <WeightPlan
                        hideCart
                        title="Weight loss plan"
                        logo={LogoPlan}
                        text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds"
                        img={whPlan}
                        precio="150 $ " />
                </SwiperSlide>
                <SwiperSlide>
                    <WeightPlan
                        hideCart
                        title="Weight loss plan"
                        logo={LogoPlan}
                        text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds"
                        img={whPlan}
                        precio="150 $ " />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperWeightPlan;