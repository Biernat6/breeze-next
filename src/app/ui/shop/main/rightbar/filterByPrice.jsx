import React from 'react';
import MultiRangeSlider from "./slider/MultiRangeSlider";
import axios from 'axios';

const FilterByPrice = () => {
    const handleFilter = ({ min, max }) => {
        axios.get(`http://127.0.0.1:8000/api/findProductsByPriceRange?min_price=${min}&max_price=${max}`)
            .then(response => {
                console.log("Filtered Products:", response.data);
            })
            .catch(error => {
                console.error("Error while fetching filtered products:", error);
            });
    };

    return (
        <div>
            <h2 className='font-bold tracking-tighter text-base border-b h-[40px] border-neutral-600'>FILTER BY PRICE</h2>
            <MultiRangeSlider
                min={1}
                max={400}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                onFilter={handleFilter}
            />
        </div>
    );
};

export default FilterByPrice;
