"use client"
import React, { useEffect, useState } from 'react';
import { fetchProductById } from '@/services/productService';
import axios from 'axios';

import 'tailwindcss/tailwind.css';
import styles from "../../../ui/shop-details/shop-details.css";

import Footer from "../../../ui/shop-details/footer/footer";
import Header from "../../../ui/shop-details/header/header";

import Products from "../../../../../public/img/products/shop-details-thumb02.png"
import Image from 'next/image';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

const ProductPage = ({ params }) => {
    const { id } = params;
    const [product, setProduct] = useState([]);
    const [prodImages, setProdImages] = useState([])

    useEffect(() => {
        const loadProduct = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/findProduct/${id}`);
            setProduct(response.data);
            return response.data;
        };


        loadProduct();

    }, [id]);

    useEffect(() => {

        const loadImages = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/findProduct/${id}/images`);
                setProdImages(response.data)
                console.log(response.data)
            } catch (error) {
                console.error("Błąd ładowania obrazów", error)
            }
        }

        loadImages();

    }, [id])

    useEffect(() => {
        console.log("prodImages:", prodImages)
        if (prodImages.length > 0) {
            console.log("prodImages URL:", prodImages[0].url);
        }
    }, [prodImages]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const [quantity, setQuantity] = useState(1);

    const [selectedTab, setSelectedTab] = useState('description');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div>
            <Header />
            <main className="mt-20">
                <div className="flex justify-center">
                    <div className="">
                        {/* TUTAJ {prodImages[0]} */}
                        {/* Główne zdjęcie */}
                        {prodImages.length > 0 &&
                            <Image src={prodImages[0].url} alt={prodImages[0].alt} width={350} height={200} />
                        }

                        {/* Inne zdjęcia */}
                        <div className="flex mt-5">
                            {prodImages.length > 0 &&
                                prodImages.map((image, index) => (
                                    index !== 0 && (
                                        <div key={index}>
                                            <Image className="mr-4" src={image.url} alt={image.alt} width={151.2} height={50} />
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                    <div className="ml-8">
                        <h1 className="max-w-[600px]" style={{ fontSize: 40, fontWeight: 800 }}>{product.name}</h1>
                        <div className="flex">
                            Brands: <p>Suxnix</p>{/* Nie ma w bazie danych */}
                            <div class="border-2 border-grey h-6 mx-4"></div>
                            <div className="flex text-amber-500">
                                <FaStar className="h-6 w-auto" />
                                <FaStar className="h-6 w-auto" />
                                <FaStar className="h-6 w-auto" />
                                <FaStar className="h-6 w-auto" />
                                <FaRegStarHalfStroke className="h-6 w-auto" />
                                <p className="ml-2 mt-0.5" style={{ color: 'black' }}>(4.5)</p>
                                {/* Nie ma w bazie danych */}
                            </div>
                            <div class="border-2 border-grey h-6 mx-4"></div>
                            ID : <span className="text-black">QZX8VGH</span>{/* Nie ma w bazie danych */}
                        </div>
                        <div className="flex">
                            <p style={{ color: 'black', fontSize: 35, fontWeight: 800 }}>${product.price}</p>
                            <p className="text-green-600 mt-4 ml-2" style={{ fontSize: 15, fontWeight: 800 }}> - IN STOCK </p>
                            {/* Logika czy jest zaopatrzenie */}
                        </div>
                        <div className="max-w-[640px]">
                            <p >{product.description}
                            </p>
                            {/* Skrócony opis */}
                        </div>
                        <div className="flex mt-4">
                            <FaArrowAltCircleRight className="text-green-600 mt-1 mr-2" />
                            <p>Type:</p>
                            <p>Supplement</p>
                            {/* Nie ma w bazie danych */}
                        </div>
                        <div className="flex mt-2">
                            <FaArrowAltCircleRight className="text-green-600 mt-1 mr-2" />
                            <p>XPD::</p>
                            <p>{product.updated_at}</p>
                        </div>
                        <div className="flex mt-2 mb-4">
                            <FaArrowAltCircleRight className="text-green-600 mt-1 mr-2" />
                            <p>CO:</p>
                            <p>Suxnix</p>
                            {/* Nie ma w bazie danych */}
                        </div>
                        <div className="flex items-center mt-4 mb-4 border border-black h-15" style={{ width: 176, borderRadius: 5 }}>

                            <div className="border border-black h-14 w-14 flex justify-center items-center" style={{}}>
                                <button onClick={handleDecrement} className="text-2xl">-</button>
                            </div>
                            <div className="ml-7 mr-7">{quantity}</div>
                            <div className="border border-black h-14 w-14 flex justify-center items-center" style={{}}>
                                <button onClick={handleIncrement} className="text-2xl">+</button>
                            </div>
                        </div>

                        <div className="flex" style={{ color: '#fff' }}>

                            <div class="border-2 border-green h-15 w-45 " style={{ backgroundColor: 'green', borderRadius: 5, width: 150, textAlign: 'center', fontWeight: 800 }}><p className="mt-3">ADD TO CART</p></div>
                            <div class="border-2 border-green h-15 w-16 ml-3" style={{ backgroundColor: 'green', borderRadius: 5, textAlign: 'center' }}><CiHeart className="ml-2.5 mt-1.5" style={{ fontSize: 40 }} /></div>
                        </div>
                        {/* <div className="flex mt-10">
                            <p>Tag : </p>
                            <div class="border border-black h-auto ml-2 pl-2 pr-2" style={{ borderRadius: 5, width: 'auto', color: '#000', textAlign: 'center' }}> Natural Vitamin </div>
                        </div> */}
                        <div className="flex mt-4">
                            <p>Categories : </p>
                            <div class="border border-black h-auto ml-2 pl-2 pr-2" style={{ borderRadius: 5, width: 'auto', color: '#000', textAlign: 'center' }}> {product.category ? product.category.name : 'Unknown'} </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-20" style={{ marginLeft: 280, fontWeight: 800 }}>
                    <p className={selectedTab === 'description' ? styles.activeTab : ''} onClick={() => handleTabChange('description')}>Description</p>
                    <p className={`ml-10 ${selectedTab === 'additionalInfo' ? styles.activeTab : ''}`} onClick={() => handleTabChange('additionalInfo')}>Additional information</p>
                    <p className={`ml-10 ${selectedTab === 'reviews' ? styles.activeTab : ''}`} onClick={() => handleTabChange('reviews')}>Reviews</p>
                    <p className="ml-2">(3)</p>
                </div>

                <div className="flex-col mt-5">
                    <div className="border-t border-black" style={{ marginLeft: 280, marginRight: 280 }}></div>
                </div>

                <div className="">
                    {selectedTab === 'description' && (
                        <div className="mt-5 w-[1300px]" style={{ marginLeft: 280 }}>
                            <h1 className="mb-5" style={{ fontSize: 25, fontWeight: 800 }}>THE TRUE STRENGTH OF SUXNIX :</h1>
                            <p>Whey Protein Isolates (WPIs) are the purest form of whey protein that currently exists. WPIs are costly to use, but rate among th
                                e best proteins that money can buy. That’s why they’re the first ingredient you read on the Gold Standard 100% Whey™ label. By using
                                WPI as the primary ingredient along with premium ultra-filtered whey protein concentrate (WPC), we’re able to pack 24 grams of protein into ever
                                y serving to support your muscle building needs after training. ON’attention to detail also extends to mixability. This superior quality powder ha
                                s been instantized to mix easliy using a shaker cup or just a glass and spoon. There’s no doubt that this is the standard by which all other
                                whey proteins are measured.
                            </p>
                            {/* Długi opis - nie ma w bazie danych */}
                            {/* <h1 className="mb-5 mt-10" style={{ fontSize: 25, fontWeight: 800 }}>SUXNIX THE BASICS :</h1>
                            <ul>
                                <li className="mb-3">82% Protein by Weight (24g of Protein Per 31.5g Serving Size).</li>
                                <li className="mb-3">Whey Protein Isolates (WPI) Main Ingredient.</li>
                                <li className="mb-3">Whey Protein Micro-functions from Whey Protein Isolate and Ultra-Filtered Whey Protein Concentrate.</li>
                                <li className="mb-3">Over 4g of Naturally Occurring Glutamine & Glutamic Acid in Each Serving.</li>
                                <li className="mb-3">More than 5g of the Naturally Occurring Branched Chain Amino Acids (BCAAs) Leucine, Isoleucine, and Valine in Each Serving.</li>
                                <li className="mb-3">The “Gold Standard” for Protein Quality.</li>
                                <li className="mb-3">Banned Substance Tested Protein</li>
                                <li className="mb-3">French Vanilla Creme Flavored Whey Protein Powder</li>
                            </ul> */}
                        </div>
                    )}
                    {selectedTab === 'additionalInfo' && (
                        <div className="mt-5" style={{ marginLeft: 280 }}>
                            <table className=" max-w-2xl w-full whitespace-nowrap divide-y divide-gray-200">
                                <tbody className="divide-y divide-gray-200">

                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Calories</td>
                                        <td className="px-4 py-2">110</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Total Fat</td>
                                        <td className="px-4 py-2">1kg</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Saturated Fat</td>
                                        <td className="px-4 py-2">0.5g</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Cholesterol</td>
                                        <td className="px-4 py-2">40mg</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Total Carbohydrate</td>
                                        <td className="px-4 py-2">2g</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Protein</td>
                                        <td className="px-4 py-2">24g</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Total Sugars</td>
                                        <td className="px-4 py-2">2g</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Sodium</td>
                                        <td className="px-4 py-2">100mg</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="border-r border-gray-200 px-4 py-2">Calcium</td>
                                        <td className="px-4 py-2">140 mg</td>
                                    </tr>
                                    <tr>
                                        <td className="border-r border-gray-200 px-4 py-2">Potassium</td>
                                        <td className="px-4 py-2">160 mg</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Gramatur */}
                        </div>
                    )}
                    {selectedTab === 'reviews' && (
                        <div className="mt-5" style={{ marginLeft: 280 }}>
                            <p>Opinie uzytownkow</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductPage;
