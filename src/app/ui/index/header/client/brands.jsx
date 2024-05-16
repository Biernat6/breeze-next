"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import { useMediaQuery } from 'react-responsive';
import brand1 from "../../../../../../public/img/brand/brand_01.png";
import brand2 from "../../../../../../public/img/brand/brand_02.png";
import brand3 from "../../../../../../public/img/brand/brand_03.png";
import brand4 from "../../../../../../public/img/brand/brand_04.png";
import brand5 from "../../../../../../public/img/brand/brand_05.png";
import brand6 from "../../../../../../public/img/brand/brand_06.png";
import Image from "next/image";


function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}

export function Brands() {
    // const slidesToShow = responsiveSlides;


    const extraSmall = useMediaQuery('(max-width: 600px)');
    const small = useMediaQuery('(min-width: 600px)');
    const medium = useMediaQuery('(min-width: 768px)');
    const large = useMediaQuery('(min-width: 992px)');
    const extraLarge = useMediaQuery('(min-width: 1200px)');

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: extraSmall ? 3 : large ? 6 : 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1800,
        autoplaySpeed: 4000,
        cssEase: 'linear'
    };
    return (
        <div className="slider-container  mx-auto max-w-[300px] md:max-w-[700px] xl:max-w-[1300px] ">
            <Slider {...settings} className="flex gap-10 flex-col top-12" >
                <div className="mx-2">
                    <Image src={brand1} className='' alt="brand1" />
                </div>
                <div className="mx-2">
                    <Image src={brand2} className='' alt="brand2" />
                </div>
                <div className="mx-2">
                    <Image src={brand3} className='' alt="brand3" />
                </div>
                <div className="mx-2">
                    <Image src={brand4} className='' alt="brand4" />
                </div>
                <div className="mx-2">
                    <Image src={brand5} className='' alt="brand5" />
                </div>
                <div className="mx-2">
                    <Image src={brand6} className='' alt="brand6" />
                </div>

            </Slider>
        </div>
    );
}
