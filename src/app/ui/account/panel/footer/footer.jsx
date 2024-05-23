"use client"
import React from 'react';
import Logo from "../../../../../../public/img/logo/white_logo.png";
import Cards from "../../../../../../public/img/others/card_img.png";
import Footer_img from "../../../../../../public/img/bg/formula_shape01.png";
import Leaf1 from "../../../../../../public/img/others/footer_shape01.png";
import Leaf2 from "../../../../../../public/img/others/footer_shape02.png";
import Image from 'next/image';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import Link from 'next/link';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";

const footerSections = [
    {
        title: "ABOUT US",
        items: ["About Company", "Affiliate Program", "Customer Spotlight", "Reseller Program", "Our Shop", "Price & Plans"],
    },
    {
        title: "SUPPORT",
        items: ["Knowledge Base", "Blog", "Developer API", "FAQ", "Team", "Contact"],
    },
];

const FooterSection = ({ title, items }) => (
    <div className='flex w-[100%] md:w-[30%] lg:w-1/5 flex-col'>
        <h2 className="font-bold">{title}</h2>
        <ul className='space-y-2 mt-4'>
            {items.map((item, index) => (
                <li key={index} className="py-1 text-zinc-400 hover:text-white">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const HoverIcon = ({ Icon, href }) => (
    <Link href={href}>
        <div className='bg-neutral-900 w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-green-600'>
            <Icon className="text-white" size={20} />
        </div>
    </Link>
);

const contacts = [
    {
        icon: BsFillTelephoneFill,
        text: "+1 31-6555-0116",
    },
    {
        icon: BsFillEnvelopeFill,
        text: "Suxnix@example.com",
    },
    {
        icon: ImEarth,
        text: "www.suxnix.com",
    },
];

const Contact = ({ icon: Icon, text }) => (
    <li className="flex items-center space-x-2 py-1 text-white">
        <Icon className="text-green-600" size={20} />
        <span>{text}</span>
    </li>
);

const Footer = () => (
    <footer className='top-[200px] relative'>
        <div className='bg-black text-white text-lg'>
            <div>
                <Image src={Footer_img} className='w-full' alt="Footer background" />
            </div>
            <Image src={Leaf1} className='absolute left-0 pt-36' alt="Leaf1" />
            <Image src={Leaf2} className='absolute right-0' alt="Leaf2" />
            <div className='flex gap-10 pb-10 pt-24 px-4 lg:flex-nowrap flex-wrap container justify-between mx-auto'>
                <div className='flex w-[100%] md:w-[60%] lg:w-2/5 pr-20 gap-10 flex-col'>
                    <div>
                        <Image src={Logo} className='h-20 w-auto' alt="Logo" />
                    </div>
                    <div className='text-zinc-400 hover:text-white z-10'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta inventore quaerat iste necessitatibus dolorem sunt esse possimus, libero doloribus ex corrupti quasi laborum nobis totam, non tempore, illo pariatur dolor.</p>
                    </div>
                    <div className='flex gap-3 -mt-5'>
                        <HoverIcon Icon={SlSocialFacebook} href="https://www.facebook.com/" />
                        <HoverIcon Icon={SlSocialTwitter} href="https://twitter.com/" />
                        <HoverIcon Icon={SlSocialInstagram} href="https://www.instagram.com/" />
                        <HoverIcon Icon={SlSocialLinkedin} href="https://pl.linkedin.com/" />
                    </div>
                </div>
                {footerSections.map((section, index) => (
                    <FooterSection key={index} title={section.title} items={section.items} />
                ))}
                <div className='flex w-[100%] md:w-[30%] lg:w-1/5 flex-col'>
                    <h2 className="font-bold">CONTACT US</h2>
                    <ul className='space-y-2 mt-4'>
                        <li className="py-1 text-zinc-400 hover:text-white">
                            4140 Parker Rd. Allentown, New Mexico 31134
                        </li>
                    </ul>
                    <ul className='space-y-2 mt-10'>
                        {contacts.map((contact, index) => (
                            <Contact key={index} icon={contact.icon} text={contact.text} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className='border-t-2 border-neutral-800'>
                <div className='flex container flex-col md:flex-row items-center py-6 mx-auto md:justify-between'>
                    <div>
                        Copyright © 2022 Suxnix All Rights Reserved.
                    </div>
                    <div>
                        <Image src={Cards} alt="Accepted cards" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
