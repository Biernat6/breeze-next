"use client"
import React from 'react';
import Image from 'next/image';
import MultiRangeSlider from "./slider/MultiRangeSlider";

const FilterByPrice = () => (
    <div>
        <h2 className='font-bold tracking-tighter text-base border-b h-[40px] border-neutral-600'>FILTER BY PRICE</h2>
        <MultiRangeSlider
            min={1}
            max={400}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
    </div>
);

export default FilterByPrice;

