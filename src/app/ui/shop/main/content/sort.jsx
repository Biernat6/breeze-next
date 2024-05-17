import React from 'react';

const Sort = () => (
    <div className='w-full border-2 border-gray-100 h-[6%] flex justify-between items-center px-4'>
        <p className='text-base text-neutral-600 tracking-tighter'>
            Kategoria: Białko
        </p>
        <select
            id="sortingSelect"
            name="sortingSelect"
            className="w-[180px] text-base border-gray-300 focus:outline-none text-neutral-600 tracking-tighter"
        >
            <option value="default">Default Sorting</option>
            <option value="option1">Sort by popularity</option>
            <option value="option2">Sort by average rating</option>
            <option value="option3">Sort by latest</option>
            <option value="option4">Sort by price: low to high</option>
            <option value="option5">Sort by price: high to low</option>
        </select>
    </div>
);

export default Sort;
