import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useCombos from "../hooks/useCombos";
import SystemInfo from "../util/SystemInfo";
import CardRecipes from "../componentes/CardRecipes";

const SwiperCombos = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [{ combos }] = useCombos();

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
                className="mySwiper m-auto"
            >
                {combos.map(combo => <SwiperSlide>
                    <CardRecipes
                        key={combo.id}
                        texto={combo.name}
                        price={`${combo?.price}$`}
                        bolsaIng={"2"}
                        cestaIng={"2"}
                        timePre={"2"}
                        nameSellers={"hola"}
                        title={combo.name}
                        foto={`${SystemInfo?.api}${combo?.images?.[0]?.path}`}
                        hideCart
                        hideClock
                        hideButtons
                    //hideBag

                    />
                </SwiperSlide>)}
            </Swiper>

        </>
    );
}

export default SwiperCombos;