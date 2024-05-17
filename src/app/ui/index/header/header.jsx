"use client"
import React from 'react';
import styles from "./header.module.css";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoListCircle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Brands } from "./client/brands.jsx";
import Logo from "../../../../../public/img/logo/logo.png"
import banner from "../../../../../public/img/banner/banner_round_bg.png"
import suple from "../../../../../public/img/banner/banner_img01.png"
import lewy from "../../../../../public/img/banner/banner_shape03.png"
import prawy from "../../../../../public/img/banner/banner_shape04.png"
import lisclewy from "../../../../../public/img/banner/banner_shape01.png"
import liscprawy from "../../../../../public/img/banner/banner_shape02.png"
import Image from 'next/image'

function NavigationItem({ label, href }) {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href={href}>{label}</a>
    </li>
  );
}

function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header} style={{ padding: 0, margin: 0 }}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <div className={styles.branding}>
            <span className="p-6 m-5" > <Image src={Logo} width={180} /> </span>
          </div>

          <div className="hidden lg:block navigation-container">
            <NavigationItem label="Home" href="#" />
            <NavigationItem label="Product" href="#" />
            <NavigationItem label="Shop" href="/shop" />
            <NavigationItem label="News" href="#" />
            <NavigationItem label="Contacts" href="#" />
            <NavigationItem label="Contacts" href="#" />
          </div>

          <div className={styles.icons} style={{ padding: 7, margin: 45 }}>
            <IoCartOutline className={styles.icon} />
            <IoIosSearch className={styles.icon} />
            <IoListCircle className='' style={{ color: 'green', fontSize: 50 }} onClick={() => { setMenuOpen(!isMenuOpen) }} />
          </div>
        </ul>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3, delay: .2 }} className="fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-20">
            <motion.div initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .3 }} exit={{ opacity: 0, x: 200 }} className={`right-0 fixed top-0 bottom-0 lg:w-[500px] w-[300px] bg-white flex p-10 flex-col`}>
              <div className="flex justify-between">
                <div className="flex lg:hidden">
                  <Image src={Logo} width={120} />
                </div>
                <button onClick={() => { setMenuOpen(!isMenuOpen) }} className="flex lg:hidden" style={{ color: '#ffa500' }}>X</button>

                <button onClick={() => { setMenuOpen(!isMenuOpen) }} className="lg:flex hidden border p-4 ml-80"
                  style={{ fontFamily: 'Franklin Gothic Medium', fontSize: 25, color: 'black', borderRadius: 50, backgroundColor: '#BEFFC9', borderColor: '#BEFFC9', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>X</button>
              </div>

              <div className=" lg:flex hidden mt-20 m-12" style={{ fontSize: 28, fontFamily: 'Franklin Gothic Medium' }}>
                <p style={{ color: 'black' }}>GETTING ALL OF THE <span style={{ color: 'green' }}>NUTRIENTS</span> YOU NEED SIMPLY CANNOT BE DONE WITHOUT SUPPLEMENTS.</p>
              </div>

              <div>
                <p className=" lg:flex hidden ml-12 mr-5 responsive-text" style={{ fontSize: 13, fontFamily: 'Franklin Gothic Medium' }}>
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
                  <li className="border-t" >Home</li>
                  <li className="border-t	">Product</li>
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
            </motion.div></motion.div>)}
      </AnimatePresence>
      <main>
        <div className={styles.container}>
          <section className={styles.section}>
            <p className={styles.sectionText}>.. INCREASED ENERGY WITH SUXNIX ..</p>
          </section>
        </div>

        <div style={{ position: 'relative', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image src={lisclewy} style={{ marginRight: 'auto' }} />
          <div style={{ padding: '0 20px', zIndex: 1, position: 'relative' }}>
            <p className="responsive-text mt-2" style={{ color: 'black', fontSize: 'clamp(50px, 4vw, 50px)', fontFamily: 'Georgia' }}>MIX PROTEIN PROVIDED WAY<br /> TO GROWTH</p>
          </div>
          <Image src={liscprawy} style={{ marginLeft: 'auto' }} />
        </div>


        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <Image className="lg:flex hidden" src={lewy} style={{ height: '80%', marginRight: '60px', marginTop: '360px' }} />
          <Image className="md:flex hidden" src={banner} />
          <Image className="lg:flex hidden" src={prawy} style={{ height: '80%', marginLeft: '110px', marginTop: '300px' }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            bottom: -15,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Image className="md:flex hidden md:w-[450px] lg:w-[550px]" src={suple} />
          </div>
          <button className="bg-amber-500 hover:bg-green-600" style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '3px solid #fff',
            borderRadius: 28,
            color: "#fff",
            padding: '12px 24px',
            width: '170px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            Shop now
          </button>
          <Image className="flex md:hidden mt-20 flex-row" src={suple} />
        </div>
        <p className="mt-20" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: 65, height: 2, backgroundColor: '#ffa500', marginRight: 10 }}></span>
          PERFECT BRAND IS FEATURED ON
          <span style={{ width: 65, height: 2, backgroundColor: '#ffa500', marginLeft: 10 }}></span>
        </p>

        {/* brands animation*/}
        <Brands />
      </main>
    </header >
  );
}
export default Header;
