import React from 'react';
import Image from 'next/image';


import liscPrawyGora from "../../../../../public/img/others/features_sec_shape01.png"
import liscSrodekLewo from "../../../../../public/img/others/features_sec_shape02.png"
import liscDolPrawo from "../../../../../public/img/others/features_sec_shape03.png"
import MietaZiemia from "../../../../../public/img/products/features_product_shape01.png"
import Aloes from "../../../../../public/img/products/features_product_shape02.png"
import Mieta from "../../../../../public/img/products/features_product_shape03.png"
import Puszak1 from "../../../../../public/img/products/features_product01.png"
import Puszka2 from "../../../../../public/img/products/features_product02.png"
import Worek from "../../../../../public/img/products/features_product03.png"

const Products = () => (
    <div className='w-full '>
        <Image className="" src={liscPrawyGora} />
        <div>
            <Image className="w-[10%] h-[20%]" src={Puszak1} />
        </div>
        <div>
            <strong>SERIOUR MASS</strong>
            <p>High-strength, 5000IU</p>
            <p>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Lo
                w vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D defi
                ciency can lead to weak bones, rickets in children, and osteoporosis in adults.</p>
            <button>Shop now</button>
            <p>$89.99</p>
            <p>$117.99</p>
        </div>
        <Image className="" src={liscSrodekLewo} />
        <div>
            <Image className="w-[10%] h-[20%]" src={Puszka2} />
        </div>
        <div>
            <strong>PROTEIN WHEY</strong>
            <p>High-strength, 4000IU</p>
            <p>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Lo
                w vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D defi
                ciency can lead to weak bones, rickets in children, and osteoporosis in adults.</p>
            <button>Shop now</button>
            <p>$59.99</p>
            <p>$79.99</p>
        </div>
    </div>
);

export default Products;