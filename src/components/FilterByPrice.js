import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_PRICE } from '../queries/products';
import MultiRangeSlider from './MultiRangeSlider';
import client from '../lib/apolloClient';

const FilterByPrice = () => {
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(400);
    const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCTS_BY_PRICE, { client });

    const handleSliderChange = ({ min, max }) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

    const handleFilterClick = (min, max) => {
        getProducts({ variables: { min_price: min, max_price: max } });
    };

    useEffect(() => {
        if (data && data.products) {
            console.log("Filtered Products:", data.products);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return (
        <div>
            <h2 className='font-bold tracking-tighter text-base border-b h-[40px] border-neutral-600'>FILTER BY PRICE</h2>
            <MultiRangeSlider
                min={1}
                max={400}
                onChange={handleSliderChange}
                onFilter={handleFilterClick}
            />
        </div>
    );
};

export default FilterByPrice;
