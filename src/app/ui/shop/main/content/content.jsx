"use client"
import React from 'react';
import Image from 'next/image';
import Sort from "./sort.jsx";
import ProductList from "./productList.jsx"

const Content = () => (
    <div className=' w-3/4 mr-10 mt-24'>
        <Sort />
        <ProductList />
    </div >
);

export default Content;