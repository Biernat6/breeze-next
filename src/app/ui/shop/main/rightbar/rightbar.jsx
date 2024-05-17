"use client"
import React from 'react';
import Image from 'next/image';
import FilterByPrice from "./filterByPrice.jsx";
import Categories from "./categories.jsx";
import LatestProducts from "./latestProducts.jsx";

const RightBar = () => (
    <div className='h-[700px] w-1/4 mt-24'>
        <FilterByPrice />
        <Categories />
        <LatestProducts />
    </div >
);

export default RightBar;