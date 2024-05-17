import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import features_product01 from '../../../../../../public/img/products/features_product01.png';
import { RiShoppingBasket2Line } from "react-icons/ri";
import Image from 'next/image';
import { fetchAllProducts } from '@/services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // const products = fetchAllProducts();
    // console.log(products);
    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetchAllProducts();
            console.log("odp;", response)
            setProducts(response)

        }

        loadProducts();


    }, [])

    console.log(products)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {products.map((product, index) => (
                <div key={index} className="shadow-lg p-10 rounded-md relative group">
                    <div className="flex justify-center">
                        <Image src={product?.image} alt={product.name} className="h-[200px] w-auto" />
                    </div>

                    <div className="mt-4 text-base font-semibold">
                        <p className="text-gray-600">{product.category}</p>
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="font-bold text-xl mt-3">${product.price}</p>
                        {product.rating && product.numReviews && (
                            <div className="flex items-center mt-3">
                                <div className="flex">
                                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                                        <FaStar key={i} className="text-orange-400 text-lg" />
                                    ))}
                                    {product.rating % 1 !== 0 && <FaRegStarHalfStroke className="text-orange-400 text-lg" />}
                                </div>
                                <p className="text-gray-600 ml-1">({product.numReviews})</p>
                            </div>
                        )}
                        <div className="flex items-center mt-4">
                            <div className="bg-green-600 rounded-full p-3">
                                <RiShoppingBasket2Line className="text-white text-2xl" />
                            </div>
                            <button className="product-button ml-4 bg-amber-500 text-white py-3 px-8 rounded-[1000px] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
