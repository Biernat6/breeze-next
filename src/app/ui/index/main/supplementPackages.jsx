"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import pricing01 from '../../../../../public/img/others/pricing_01.png';
import pricing02 from '../../../../../public/img/others/pricing_02.png';
import pricing03 from '../../../../../public/img/others/pricing_03.png';

const SupplementPackages = () => {
    const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);
    const [hoveredDivIndex, setHoveredDivIndex] = useState(null);

    const handleMouseEnterButton = (index) => {
        setHoveredButtonIndex(index);
    };

    const handleMouseLeaveButton = () => {
        setHoveredButtonIndex(null);
    };

    const handleMouseEnterDiv = (index) => {
        setHoveredDivIndex(index);
    };

    const handleMouseLeaveDiv = () => {
        setHoveredDivIndex(null);
    };

    return (
        <div className="bg-neutral-100 w-full justify-center items-center">
            <div className='container mx-auto'>
                {/* Header */}
                <div className='text-center pt-16'>
                    <h1 className="text-amber-500 font-bold tracking-tighter">..  SUXNIX PLANS  ..</h1>
                    <h2 className="text-5xl font-bold mt-4 tracking-tighter">SUPPLEMENT PACKAGES</h2>
                </div>
                {/* Packages */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-[70%] mx-auto pb-[200px]'>
                    <div
                        className={`bg-white rounded-xl shadow-lg p-8 ${hoveredDivIndex === 0 ? 'border-amber-500 border-[1px] hover:border-[1px]' : 'hover:border-amber-500 hover:border-[1px]'
                            }`}
                        onMouseEnter={() => handleMouseEnterDiv(0)}
                        onMouseLeave={handleMouseLeaveDiv}
                    >
                        <h2 className='font-bold text-center text-lg text-neutral-800'>1 BOTTLE OF</h2>
                        <h1 className='font-bold text-center text-4xl mt-2 tracking-tighter'>SUXNIX</h1>
                        <h3 className='font-bold text-center mt-2 text-md text-neutral-800'>(1 X 250 Veggie Caps Bottle)</h3>
                        <Image src={pricing01} className="mx-auto h-[160px] w-auto mt-10" alt="pricing01" />
                        <div className="flex items-center justify-center mt-8 -ml-6 ">
                            <h1 className={`font-bold text-center text-6xl mt-2 tracking-tighter font-Roboto ${hoveredDivIndex === 0 ? 'text-amber-500' : 'text-neutral-800'}`}>49$</h1>
                            <p className="ml-1 text-sm text-neutral-600 max-w-[20px]">Per Bottle</p>
                        </div>
                        <h3 className='mt-2 font-bold text-center text-md text-neutral-600'>($299 TOTAL)</h3>
                        <h2 className='font-bold text-center mt-2 text-amber-500 tracking-tighter text-3xl'>SAVE 14%</h2>
                        <h2 className='font-bold text-center text-white tracking-tighter text-xl select-none'>+ Free Shipping</h2>
                        <div
                            className={`text-center w-[90%] h-[60px] bg-amber-500 text-white font-Roboto font-bold tracking-tighter rounded-md mx-4 mt-6 relative ${hoveredDivIndex === 0 ? 'hover:bg-white hover:text-amber-500 hover:border-2 hover:border-amber-500' : ''
                                }`}
                            onMouseEnter={() => handleMouseEnterButton(0)}
                            onMouseLeave={handleMouseLeaveButton}
                        >
                            <a className='text-[26px]'>
                                BUY NOW
                                <br />
                                <span className='text-[12px] text-center absolute left-0 right-0 mx-auto bottom-2'>365 DAY FULL MONEY BACK GUARANTEED</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-[70px] flex items-center justify-center bg-amber-500 text-white font-bold text-lg rounded-lg mb-4">
                            BEST VALUE
                        </div>
                        <div
                            className={`bg-white rounded-xl shadow-lg p-8 ${hoveredDivIndex === 1 ? 'border-amber-500 border-[1px] hover:border-[1px]' : 'hover:border-amber-500 hover:border-[1px]'
                                }`}
                            onMouseEnter={() => handleMouseEnterDiv(1)}
                            onMouseLeave={handleMouseLeaveDiv}
                        >
                            <h2 className='font-bold text-center text-lg text-neutral-800'>3 BOTTLE OF</h2>
                            <h1 className='font-bold text-center text-4xl mt-2 tracking-tighter'>SUXNIX</h1>
                            <h3 className='font-bold text-center mt-2 text-md text-neutral-800'>(3 X 250 Veggie Caps Bottle)</h3>
                            <Image src={pricing02} className="mx-auto h-[160px] w-auto mt-10" alt="pricing02" />
                            <div className="flex items-center justify-center mt-8 -ml-6 ">
                                <h1 className={`font-bold text-center text-6xl mt-2 tracking-tighter font-Roboto ${hoveredDivIndex === 1 ? 'text-amber-500' : 'text-neutral-800'}`}>49$</h1>
                                <p className="ml-1 text-sm text-neutral-600 max-w-[20px]">Per Bottle</p>
                            </div>
                            <h3 className='font-bold mt-2 text-center text-md text-neutral-600'>($299 TOTAL)</h3>
                            <h2 className='font-bold text-center mt-2 text-amber-500 tracking-tighter text-3xl'>SAVE 25%</h2>
                            <h2 className='font-bold text-center text-amber-500 tracking-tighter text-xl'>+ Free Shipping</h2>
                            <div
                                className={`text-center w-[90%] h-[60px] bg-amber-500 text-white font-Roboto font-bold tracking-tighter rounded-md mx-4 mt-6 relative ${hoveredDivIndex === 1 ? 'hover:bg-white hover:text-amber-500 hover:border-2 hover:border-amber-500' : ''
                                    }`}
                                onMouseEnter={() => handleMouseEnterButton(1)}
                                onMouseLeave={handleMouseLeaveButton}
                            >
                                <a className='text-[26px]'>
                                    BUY NOW
                                    <br />
                                    <span className='text-[12px] text-center absolute left-0 right-0 mx-auto bottom-2'>365 DAY FULL MONEY BACK GUARANTEED</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-[70px] flex items-center justify-center bg-amber-500 text-white font-bold text-lg rounded-lg mb-4">
                            BEST VALUE
                        </div>
                        <div
                            className={`bg-white rounded-xl shadow-lg p-8 ${hoveredDivIndex === 2 ? 'border-amber-500 border-[1px] hover:border-[1px]' : 'hover:border-amber-500 hover:border-[1px]'
                                }`}
                            onMouseEnter={() => handleMouseEnterDiv(2)}
                            onMouseLeave={handleMouseLeaveDiv}
                        >
                            <h2 className='font-bold text-center text-lg text-neutral-800'>6 BOTTLE OF</h2>
                            <h1 className='font-bold text-center text-4xl mt-2 tracking-tighter'>SUXNIX</h1>
                            <h3 className='font-bold text-center mt-2 text-md text-neutral-800'>(6 X 250 Veggie Caps Bottle)</h3>
                            <Image src={pricing03} className="mx-auto h-[160px] w-auto mt-10" alt="pricing03" />
                            <div className="flex items-center justify-center mt-8 -ml-6 ">
                                <h1 className='font-bold text-center text-6xl mt-2 tracking-tighter text-amber-500 font-Roboto'>49$</h1>
                                <p className="ml-1 text-sm text-amber-500 max-w-[20px]">Per Bottle</p>
                            </div>
                            <h3 className='font-bold mt-2 text-center text-md text-neutral-600'>($299 TOTAL)</h3>
                            <h2 className='font-bold text-center mt-2 text-amber-500 tracking-tighter text-3xl'>SAVE 40%</h2>
                            <h2 className='font-bold text-center text-amber-500 tracking-tighter text-xl'>+ Free Shipping</h2>
                            <div className={`text-center w-[90%] h-[60px] bg-amber-500 text-white font-Roboto font-bold tracking-tighter rounded-md mx-4 mt-6 hover:text-amber-500 hover:bg-white hover:border-2 hover:border-amber-500 relative`}>
                                <a className='text-[26px]'>
                                    BUY NOW
                                    <br />
                                    <span className='text-[12px] text-center absolute left-0 right-0 mx-auto bottom-2'>365 DAY FULL MONEY BACK GUARANTEED</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplementPackages;
