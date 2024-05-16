"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import Image from "next/image";
import avatar01 from "../../../../../public/img/others/testi_avatar01.jpg";
import avatar02 from "../../../../../public/img/others/testi_avatar02.jpg";
import avatar03 from "../../../../../public/img/others/testi_avatar03.jpg";

const Review = ({ avatar, name, text }) => (
    <div className="text-center mx-auto max-w-[40%]">
        <div className="flex justify-center items-center mb-4">
            <div className="text-amber-500 flex">
                <FaStar className="h-6 w-auto" />
                <FaStar className="h-6 w-auto" />
                <FaStar className="h-6 w-auto" />
                <FaStar className="h-6 w-auto" />
                <FaRegStarHalfStroke className="h-6 w-auto" />
            </div>
        </div>
        <p className="text-white font-bold text-lg">"{text}„</p>
        <div className="mt-8">
            <div className="flex flex-col items-center">
                <Image src={avatar} alt="avatar" className="mx-auto mb-2 rounded-full" />
                <h5 className="text-white font-bold">{name}</h5>
            </div>
        </div>
    </div>
);

export function ReviewsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3800
    };

    const reviews = [
        {
            avatar: avatar01,
            name: "JANETA COOPER",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate magna neque, quis tincidunt est egestas at. Phasellus leo elit, laoreet quis tempus ac, bibendum a metus. Nunc ac eleifend nisi."
        },
        {
            avatar: avatar02,
            name: "LEMPOR KOOPER",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate magna neque, quis tincidunt est egestas at. Phasellus leo elit, laoreet quis tempus ac, bibendum a metus. Nunc ac eleifend nisi."
        },
        {
            avatar: avatar03,
            name: "ZONALOS NEKO",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate magna neque, quis tincidunt est egestas at. Phasellus leo elit, laoreet quis tempus ac, bibendum a metus. Nunc ac eleifend nisi."
        }
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <Review {...review} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
