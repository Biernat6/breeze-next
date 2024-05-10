'use client'
import { getProducts } from '@/app/api/products';
import React, { useEffect, useState } from 'react';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const loadedProducts = await getProducts();
            setProducts(loadedProducts);
        };

        fetchProducts();
    }, []);
    return (
        <><div>ProductsList</div>{!products ? <p>loading...</p> : <ul>{products.map(product => (<li key={product.id}>{product.name}</li>))}</ul>}</>
    )
}

export default ProductsList