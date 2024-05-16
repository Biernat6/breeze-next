"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    FaRegEye,
    FaRegClock,
    FaRegEnvelope,
    FaChevronDown,
    FaChevronUp,
} from 'react-icons/fa';

import thumb01 from '../../../../../public/img/blog/post_thumb01.jpg';
import thumb02 from '../../../../../public/img/blog/post_thumb02.jpg';
import thumb03 from '../../../../../public/img/blog/post_thumb03.jpg';

const blogs = [
    {
        img: thumb01,
        category: 'Tips & Tricks',
        date: '1',
        title: 'HOW MUCH DO EAT YOU REALLY NEED...',
        author: 'Admin',
        comments: '24',
        views: '77',
    },
    {
        img: thumb02,
        category: 'Tips & Tricks',
        date: '12',
        title: 'SUPPLEMENTING YOUR DIET TOWARDS...',
        author: 'Admin',
        comments: '6',
        views: '87',
    },
    {
        img: thumb03,
        category: 'Tips & Tricks',
        date: '12',
        title: 'DIETARY SUPPLEMENT REPORT MARKET...',
        author: 'Admin',
        comments: '21',
        views: '21',
    },
];

const faqData = [
    {
        question: "SUXNIC INGREDIENTS PROVIDES A SEARCHABLE ?",
        number: "01.",
        answer: "There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages."
    },
    {
        question: "HOW TO EDIT SUXNIC THEMES ?",
        number: "02.",
        answer: "There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages."
    },
    {
        question: "SUXNIX APP IS A POWERFUL APPLICATION ?",
        number: "03.",
        answer: "There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages."
    },
    {
        question: "LATEST VERSION THOROUGH SUXNIX POWERFUL ?",
        number: "04.",
        answer: "There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages."
    },
    {
        question: "HOW TO TRACK MY ORDER ?",
        number: "05.",
        answer: "There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mt-8 ml-24">
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className={`${activeIndex === index ? 'shadow-lg' : ''
                        } p-6 select-none border-b-2 border-zinc-50 mb-5`}
                >
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => handleToggle(index)}
                    >
                        <p className="font-semibold text-base font-Roboto tracking-tighter">
                            <a className="text-orange-400 font-bold">{item.number}</a>{' '}
                            {item.question}
                        </p>
                        <span className="ml-2 ">
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                            >
                                <FaChevronUp className="text-orange-500" />
                            </motion.div>
                        </span>
                    </div>
                    {activeIndex === index && <p className="mt-2">{item.answer}</p>}
                </div>
            ))}
        </div>
    );
};

const Blog = ({ img, category, date, title, author, comments, views }) => (
    <div className="flex items-center py-6 text-black border-b-2 border-zinc-50 w-[80%]">
        <div className="mr-8 my-4">
            <Image src={img} className="rounded-lg" alt="thumb0x" />
        </div>
        <div className="flex-grow flex flex-col justify-between">
            <div className="flex justify-between mb-2">
                <p className="font-semibold hover:text-orange-400">{category}</p>
                <div className="flex items-center">
                    <FaRegClock className="text-zinc-500 mr-1" />
                    <p className="text-zinc-500">{date} Days ago</p>
                </div>
            </div>
            <h3 className="text-xl mb-2 font-bold hover:text-orange-400 font-Roboto tracking-tighter">
                {title}
            </h3>
            <div className="flex justify-between items-center">
                <p>
                    Post By - <a className="text-orange-400">{author}</a>
                </p>
                <div className="flex items-center">
                    <FaRegEnvelope className="text-zinc-500 mr-1 ml-20" />
                    <p className="text-zinc-500">{comments}</p>
                </div>
                <div className="flex items-center">
                    <FaRegEye className="text-zinc-500 mr-1" />
                    <p className="text-zinc-500">{views}</p>
                </div>
            </div>
        </div>
    </div>
);

const BlogAndFAQ = () => (
    <div className="flex flex-col pb-10 pt-24 container mx-auto h-auto lg:flex-row text-lg max-w-[70%]">
        {/* Blog */}
        <div className="lg:w-1/2  lg:border-r-2 border-zinc-50 mb-8 lg:mb-0 md:w-1/1">
            <div className="text-orange-400 font-bold">.. SUXNIX NEWS ..</div>
            <h1 className="text-5xl font-bold mt-4 tracking-tighter">LATEST NEWS</h1>
            <div className="">
                {blogs.map((blog, index) => (
                    <Blog
                        key={index}
                        img={blog.img}
                        category={blog.category}
                        date={blog.date}
                        title={blog.title}
                        author={blog.author}
                        comments={blog.comments}
                        views={blog.views}
                    />
                ))}
            </div>
        </div>
        {/* FAQ */}
        <div className="lg:w-1/2 md:w-1/1 ">
            <div className=" border-zinc-50">
                <div className="text-orange-400 font-bold ml-24">.. ASK QUESTION ..</div>
                <h1 className="text-5xl font-bold mt-4 ml-24 tracking-tighter">GET EVERY ANSWERS</h1>
            </div>
            <FAQ />
        </div>
    </div>
);

export default BlogAndFAQ;
