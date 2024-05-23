"use client"
import 'tailwindcss/tailwind.css';
import Header from '@/app/ui/account/panel/header/header';
import Footer from '@/app/ui/account/panel/footer/footer';
import { FaUserAlt } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

const Panel = () => {
    const [selectedMenu, setSelectedMenu] = useState('information');

    const renderContent = () => {
        switch (selectedMenu) {
            case 'information':
                return (
                    <div>
                        <h1 className='mt-10 ml-10' style={{ fontSize: 30, fontWeight: 800 }}>Welcome to the Password</h1>
                        <p className='mt-3 ml-10' style={{ fontSize: 20 }}>Check or change your information as you want</p>
                        <form className='mt-5 ml-10'>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Name</label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="name" type="text" placeholder="Name" />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="lastname">Last Name</label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="lastname" type="text" placeholder="Last Name" />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type="email" placeholder="Email" />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="address">Address</label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="address" type="text" placeholder="Address" />
                            </div>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="button">Update</button>
                        </form>
                    </div>
                );
            case 'order':
                return <div>
                    <h1 className='mt-10 ml-10' style={{ fontSize: 30, fontWeight: 800 }}>Welcome to the Order</h1>
                    <p className='mt-3 ml-10' style={{ fontSize: 20 }}>Check and track your order</p>

                    <div className='flex items-center mt-10 ml-10 bg-white shadow-md rounded-lg p-4 w-[600px]'>
                        <img src={`https://via.placeholder.com/100`} alt="Product" className='w-24 h-24 mr-4' />
                        <div>
                            <p className='font-bold text-lg'>Product Name</p>
                            <p>Shipping Details</p>
                            <p>Adress</p>
                        </div>
                    </div>

                </div>

            case 'password':
                return <div>
                    <h1 className='mt-10 ml-10' style={{ fontSize: 30, fontWeight: 800 }}>Welcome to the information</h1>
                    <p className='mt-3 ml-10' style={{ fontSize: 20 }}>Check or change your password as you want</p>
                    <form className='mt-5 ml-10'>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Old Password</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="name" type="text" placeholder="Name" />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="lastname">New Password</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="lastname" type="text" placeholder="Last Name" />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Confirm New Password</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type="email" placeholder="Email" />
                        </div>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="button">Update</button>
                    </form>
                </div>
            case 'like':
                return <div>
                    <h1 className='mt-10 ml-10' style={{ fontSize: 30, fontWeight: 800 }}>Welcome to the Like product</h1>
                    <p className='mt-3 ml-10' style={{ fontSize: 20 }}>check your liked products</p>

                    <div className='flex items-center mt-10 ml-10 bg-white shadow-md rounded-lg p-4 w-[600px]'>
                        <img src={`https://via.placeholder.com/100`} alt="Product" className='w-24 h-24 mr-4' />
                        <div>
                            <p className='font-bold text-lg'>Product Name</p>
                            <p>Shipping Details</p>
                        </div>
                    </div>
                </div>;
            default:
                return <div>Select an option</div>;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
            <Header />
            <main className="flex justify-center items-center mt-36">
                <div className="w-1/5 p-4 mr-4 h-[600px]">
                    <div className="w-[345px] rounded-lg bg-gray-200 p-4 mr-4 h-[250px] shadow-lg" style={{ textAlign: 'center' }}>
                        <div className='mt-20'>
                            <p style={{ fontSize: 25, fontWeight: 800 }}>User name</p>
                            <p>User last name</p>
                            <p>User Email</p>
                        </div>
                    </div>
                    <div className="w-[345px] rounded-lg bg-gray-200 p-4 mr-4 h-[250px] mt-16 shadow-lg" style={{ textAlign: 'center', fontSize: 20 }}>
                        <p className='flex border-b border-gray-400 p-3 mb-1 cursor-pointer' onClick={() => setSelectedMenu('information')}>
                            <FaUserAlt className='mr-16 mt-1 ' />information<IoIosArrowForward className='ml-16 mt-1' />
                        </p>
                        <p className='flex border-b border-gray-400 p-3 cursor-pointer' onClick={() => setSelectedMenu('order')}>
                            <FaToolbox className='mt-1 ' style={{ marginRight: 95 }} />order<IoIosArrowForward className=' mt-1' style={{ marginLeft: 90 }} />
                        </p>
                        <p className='flex border-b border-gray-400 p-3 cursor-pointer' onClick={() => setSelectedMenu('password')}>
                            <RiLockPasswordFill className=' mt-1 ' style={{ marginRight: 75 }} />password<IoIosArrowForward className=' mt-1' style={{ marginLeft: 70 }} />
                        </p>
                        <p className='flex p-3 cursor-pointer' onClick={() => setSelectedMenu('like')}>
                            <FaHeart className=' mt-1 ' style={{ marginRight: 100 }} />like<IoIosArrowForward className=' mt-1' style={{ marginLeft: 105 }} />
                        </p>
                    </div>
                </div>
                <div className="w-1/2 rounded-lg bg-gray-200 p-4 ml-4 h-[600px] shadow-lg">
                    {renderContent()}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Panel;
