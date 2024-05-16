"use client"
import React from 'react';
import reviewbg from '../../../../../public/img/bg/testimonial_bg.jpg';
import reviewBgBot from '../../../../../public/img/bg/testimonial_bottom_shape.png';
import reviewBgTop from '../../../../../public/img/bg/testimonial_top_shape.png';
import Image from 'next/image';
import { ReviewsSlider } from "./reviewsSlider.jsx";

const Reviews = () => (
    <div className="relative flex flex-col items-center justify-center py-24 bg-cover bg-center h-[671px] overflow-hidden" style={{ backgroundImage: `url(${reviewbg.src})` }}>
        <div className='-z-1' style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: '#0A0A0A',
            opacity: 0.85
        }}></div>
        <div className="absolute top-0 left-0 w-full">
            <Image src={reviewBgTop} alt="testimonial_top_shape" />
        </div>
        {/* Review */}
        <div style={{ width: '100%', height: '100%' }}>
            <ReviewsSlider />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
            <Image src={reviewBgBot} alt="testimonial_bottom_shape" />
        </div>
    </div >
);

export default Reviews;