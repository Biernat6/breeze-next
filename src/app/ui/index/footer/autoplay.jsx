"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import { useMediaQuery } from 'react-responsive';
import Post1 from "../../../../../public/img/others/instagram_post01.jpg";
import Post2 from "../../../../../public/img/others/instagram_post02.jpg";
import Post3 from "../../../../../public/img/others/instagram_post03.jpg";
import Post4 from "../../../../../public/img/others/instagram_post04.jpg";
import Post5 from "../../../../../public/img/others/instagram_post05.jpg";
import Post6 from "../../../../../public/img/others/instagram_post06.jpg";
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

export function Autoplay() {
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
        slidesToShow: extraSmall ? 2 : large ? 5 : 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3800,
        cssEase: 'linear'
    };
    return (
        <div className="slider-container  mx-auto max-w-[300px] md:max-w-[700px] xl:max-w-[1330px] ">
            <Slider {...settings} className="flex gap-10 flex-col top-24" >
                <div className="mx-2">
                    <Image src={Post1} className='' alt="Post1" />
                </div>
                <div className="mx-2"><Image src={Post2} className='' alt="Post2" /></div>
                <div className="mx-2"><Image src={Post3} className='' alt="Post3" /></div>
                <div className="mx-2"><Image src={Post4} className='' alt="Post4" /></div>
                <div className="mx-2"><Image src={Post5} className='' alt="Post5" /></div>
                <div className="mx-2"><Image src={Post6} className='' alt="Post6" /></div>

            </Slider>
        </div>
    );
}
