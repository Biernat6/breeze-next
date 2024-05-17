"use client"
import React, { useState } from 'react';
import styles from "./header.module.css";
import { IoCartOutline, IoListCircle } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Logo from "../../../../../public/img/logo/white_logo.png";
import reviewbg from '../../../../../public/img/bg/testimonial_bg.jpg';
import headerBottom from '../../../../../public/img/bg/testimonial_bottom_shape.png';
import leaf1 from '../../../../../public/img/others/video_shape01.png';
import leaf2 from '../../../../../public/img/others/video_shape02.png';

function NavigationItem({ label, href }) {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href={href}>{label}</a>
    </li>
  );
}

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Image src={leaf1} width={180} alt="leaf1" className='absolute top-[380px] z-10 h-[140px] w-auto' />
      <Image src={leaf2} width={180} alt="leaf2" className='absolute top-[350px] right-0 z-10 h-[200px] w-auto' />
      <header className="relative text-white bg-cover bg-center h-[500px] overflow-hidden" style={{ backgroundImage: `url(${reviewbg.src})`, backgroundSize: 'cover' }}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <div className={styles.branding}>
              <span className="p-6 m-5">
                <Image src={Logo} width={180} alt="Logo" />
              </span>
            </div>
            <div className="hidden lg:block navigation-container">
              <NavigationItem label="Home" href="#" />
              <NavigationItem label="Product" href="#" />
              <NavigationItem label="Shop" href="/shop" />
              <NavigationItem label="News" href="#" />
              <NavigationItem label="Contacts" href="#" />
            </div>
            <div className={styles.icons} style={{ padding: 7, margin: 45 }}>
              <IoCartOutline className={styles.icon} style={{ color: '#fff' }} />
              <IoIosSearch className={styles.icon} style={{ color: '#fff' }} />
              <IoListCircle className='' style={{ color: 'green', fontSize: 50 }} onClick={() => { setMenuOpen(!isMenuOpen) }} />
            </div>
          </ul>
        </nav>
        <div className='flex flex-col items-center justify-center h-[25vh] font-bold'>
          <h1 style={{ fontSize: 60 }}>OUR SHOP</h1>
          <div className="flex justify-center items-center">
            <p className="mr-2">Home</p>
            <div className="border-l border-#fff h-8 mx-4"></div>
            <p className='font-bold'>Our Shop</p>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3, delay: .2 }} className="fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-20">
              <motion.div initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .3 }} exit={{ opacity: 0, x: 200 }} className="right-0 fixed top-0 bottom-0 lg:w-[500px] w-[300px] bg-white flex p-10 flex-col">
                <div className="flex justify-between">
                  <div className="flex lg:hidden">
                    <Image src={Logo} width={120} alt="Logo" />
                  </div>
                  <button onClick={() => { setMenuOpen(!isMenuOpen) }} className="flex lg:hidden" style={{ color: '#ffa500' }}>X</button>
                  <button onClick={() => { setMenuOpen(!isMenuOpen) }} className="lg:flex hidden border p-4 ml-80" style={{ fontFamily: 'Franklin Gothic Medium', fontSize: 25, color: 'black', borderRadius: 50, backgroundColor: '#BEFFC9', borderColor: '#BEFFC9', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>X</button>
                </div>
                <div className="lg:flex hidden mt-20 m-12" style={{ fontSize: 28, fontFamily: 'Franklin Gothic Medium' }}>
                  <p style={{ color: 'black' }}>GETTING ALL OF THE <span style={{ color: 'green' }}>NUTRIENTS</span> YOU NEED SIMPLY CANNOT BE DONE WITHOUT SUPPLEMENTS.</p>
                </div>
                <div>
                  <p className="lg:flex hidden ml-12 mr-5 responsive-text" style={{ fontSize: 13, fontFamily: 'Franklin Gothic Medium' }}>
                    Nam libero tempore, cum soluta nobis eligendi cumque quod placeat facere possimus assumenda omnis dolor repellendu sautem temporibus officiis</p>
                </div>
                <div className="lg:flex hidden m-12 mt-60">
                  <p style={{ fontSize: 25, fontFamily: 'Franklin Gothic Medium', color: 'black' }}>
                    +1 599 162 4545
                    SUXNIX@GMAIL.COM</p>
                </div>
                <div className="lg:flex hidden m-0 p-0">
                  <p className="ml-12 mr-40" style={{ fontSize: 13, fontFamily: 'Franklin Gothic Medium' }}>
                    5689 Lotaso Terrace, Culver City,
                    CA, United States </p>
                </div>
                <div className="lg:flex hidden ml-12 mt-5">
                  <ul className="flex list-none m-0 p-0">
                    <li className="border p-5 mr-5" style={{ color: 'black', borderRadius: 50, backgroundColor: '#BEFFC9', borderColor: '#BEFFC9' }}><FaFacebookF /></li>
                    <li className="border p-5 mr-5" style={{ color: 'black', borderRadius: 50, backgroundColor: '#BEFFC9', borderColor: '#BEFFC9' }}><RiInstagramFill /></li>
                    <li className="border p-5 mr-5" style={{ color: 'black', borderRadius: 50, backgroundColor: '#BEFFC9', borderColor: '#BEFFC9' }}><FaLinkedinIn /></li>
                  </ul>
                </div>
                <div className="flex lg:hidden mt-20 flex-col">
                  <ul className="space-y-6">
                    <li className="border-t">Home</li>
                    <li className="border-t">Product</li>
                    <li className="border-t">Shop</li>
                    <li className="border-t">News</li>
                    <li className="border-t">Contacts</li>
                  </ul>
                </div>
                <div className="flex lg:hidden mt-20 flex-row justify-center">
                  <ul className="flex list-none m-0 p-0">
                    <li className="border p-2 mr-2" style={{ color: 'black' }}><FaFacebookF /></li>
                    <li className="border p-2 mr-2" style={{ color: 'black' }}><RiInstagramFill /></li>
                    <li className="border p-2 mr-2" style={{ color: 'black' }}><FaLinkedinIn /></li>
                    <li className="border p-2 mr-2" style={{ color: 'black' }}><FaTwitter /></li>
                    <li className="border p-2 mr-2" style={{ color: 'black' }}><FaYoutube /></li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 w-full">
          <Image src={headerBottom} alt="Footer background" layout="responsive" objectFit="cover" />
        </div>
      </header>
    </div>
  );
}

export default Header;