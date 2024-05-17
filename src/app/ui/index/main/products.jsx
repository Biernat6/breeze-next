import React from 'react';
import Image from 'next/image';


import liscPrawyGora from "../../../../../public/img/others/features_sec_shape01.png";
import liscSrodekLewo from "../../../../../public/img/others/features_sec_shape02.png";
import liscDolPrawo from "../../../../../public/img/others/features_sec_shape03.png";
import MietaZiemia from "../../../../../public/img/products/features_product_shape01.png";
import Aloes from "../../../../../public/img/products/features_product_shape02.png";
import Mieta from "../../../../../public/img/products/features_product_shape03.png";
import Puszak1 from "../../../../../public/img/products/features_product01.png";
import Puszka2 from "../../../../../public/img/products/features_product02.png";
import Worek from "../../../../../public/img/products/features_product03.png";
import { PiPlantFill } from "react-icons/pi";
import Index from '@/app/index/page';


const Products = () => (

    <div className="flex flex-col h-[2350px] relative mt-80">

        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <Image src={liscPrawyGora} />
            </div>
        </div>
        <div className="flex items-center justify-center mx-auto space-x-4 mb-60">

            <div style={{ position: "relative", width: 400, height: 100 }}>
                <Image src={Puszka2} width={400} height={100} style={{ position: "absolute", zIndex: 1, bottom: -280 }} />
                <Image className='right-[260] hover:right-[300]' src={MietaZiemia} width={400} height={100} style={{ position: "absolute", zIndex: 0, right: 260, top: 95 }} />
            </div>
            <div className="max-w-lg ml-40 relative z-10">
                <strong style={{ fontSize: 40, fontWeight: 700 }}>SERIOUS MASS</strong>
                <div className='flex ml-1 text-green-600'>
                    <PiPlantFill /> <PiPlantFill /> <PiPlantFill />
                    <div className='flex ml-2'>
                        <PiPlantFill /> <PiPlantFill /> <PiPlantFill />
                    </div>
                </div>
                <p className="mt-4" style={{ color: 'black', fontWeight: 800 }}>High-strength, 5000IU</p>
                <p className="mt-4">Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.</p>
                <div className="flex mt-10">
                    <button className="bg-green-600 hover:bg-amber-500 " style={{
                        border: '3px solid #fff',
                        borderRadius: 28,
                        color: "#fff",
                        padding: '12px 24px',
                        width: '170px',
                        height: '60px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 800
                    }}>
                        Shop now
                    </button>
                    <p className="mt-3 ml-2" style={{ fontSize: 23, fontWeight: 800 }}>$89.99</p>
                    <p className="line-through text-orange-500 ml-4 mt-3 " style={{ fontSize: 23, fontWeight: 800 }}>$117.99</p>
                </div>
            </div>
        </div>

        {/* <div style={{
            width: '150px', height: '150px', backgroundColor: 'turquoise', borderRadius: '50%',
        }}>
        </div> */}

        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 320, left: 0 }}>
                <Image src={liscSrodekLewo} />
            </div>
        </div>
        <div className="flex items-center justify-center mx-auto space-x-4 mt-60">

            <div className="max-w-lg ml-40 relative z-10">
                <strong style={{ fontSize: 40, fontWeight: 700 }}>SERIOUS MASS</strong>
                <div className='flex ml-1 text-green-600'>
                    <PiPlantFill /> <PiPlantFill /> <PiPlantFill />
                    <div className='flex ml-2'>
                        <PiPlantFill /> <PiPlantFill /> <PiPlantFill />
                    </div>
                </div>
                <p className="mt-4" style={{ color: 'black', fontWeight: 800 }}>High-strength, 5000IU</p>
                <p className="mt-4">Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.</p>
                <div className="flex mt-10">
                    <button className="bg-green-600 hover:bg-amber-500 " style={{
                        border: '3px solid #fff',
                        borderRadius: 28,
                        color: "#fff",
                        padding: '12px 24px',
                        width: '170px',
                        height: '60px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 800
                    }}>
                        Shop now
                    </button>
                    <p className="mt-3 ml-2" style={{ fontSize: 23, fontWeight: 800 }}>$89.99</p>
                    <p className="line-through text-orange-500 ml-4 mt-3 " style={{ fontSize: 23, fontWeight: 800 }}>$117.99</p>
                </div>
            </div>
            <div style={{ position: "relative", width: 400, height: 100 }}>
                <Image src={Puszka2} width={400} height={100} style={{ position: "absolute", zIndex: 1, bottom: -280 }} />
                <Image src={Aloes} width={400} height={100} style={{ position: "absolute", zIndex: 0, left: 140, top: 15 }} />
            </div>
        </div>

        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 480, right: 0 }}>
                <Image src={liscDolPrawo} />
            </div>
        </div>
        <div className="flex items-center justify-center mx-auto space-x-4 " style={{ marginTop: 450 }}>
            <div style={{ position: "relative", width: 400, height: 100 }}>
                <Image src={Puszka2} width={400} height={100} style={{ position: "absolute", zIndex: 1, bottom: -280 }} />
                <Image src={Mieta} width={400} height={100} style={{ position: "absolute", zIndex: 0, right: 200, top: 105 }} />
            </div>
            <div className="max-w-lg ml-40 relative z-10">
                <strong style={{ fontSize: 40, fontWeight: 700 }}>SERIOUS MASS</strong>
                <div className='flex ml-1 text-green-600'>
                    <PiPlantFill /> <PiPlantFill /> <PiPlantFill />
                    <div className='flex ml-2'>
                        <PiPlantFill /> <PiPlantFill /> <PiPlantFill />
                    </div>
        </div>
                <p className="mt-4" style={{ color: 'black', fontWeight: 800 }}>High-strength, 5000IU</p>
                <p className="mt-4">Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.</p>
                <div className="flex mt-10">
                    <button className="bg-green-600 hover:bg-amber-500 " style={{
                        border: '3px solid #fff',
                        borderRadius: 28,
                        color: "#fff",
                        padding: '12px 24px',
                        width: '170px',
                        height: '60px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 800
                    }}>
                        Shop now
                    </button>
                    <p className="mt-3 ml-2" style={{ fontSize: 23, fontWeight: 800 }}>$89.99</p>
                    <p className="line-through text-orange-500 ml-4 mt-3 " style={{ fontSize: 23, fontWeight: 800 }}>$117.99</p>
                </div>
            </div>

        </div>
    </div>
);

export default Products;
