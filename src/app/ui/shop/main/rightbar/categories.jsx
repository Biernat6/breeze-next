import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";

const Categories = () => {
    const categories = ["BIAŁKO", "AKCESORIA", "KREATYNA"];

    return (
        <div className="pt-10">
            <h2 className='font-bold tracking-tighter text-base border-b h-[40px] border-neutral-600'>CATEGORIES</h2>
            <ul className="pl-0 text-xs font-bold text-gray-500 pt-6 ">
                {categories.map((category, index) => (
                    <li key={index} className="flex items-center hover:text-green-500" style={{ marginBottom: '3px' }}>
                        <span className="text-green-500 mr-1 text-lg">&#8226;</span>
                        {category}
                        <span className="flex-grow" />
                        <FaAngleDoubleRight className="text-gray-500" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
