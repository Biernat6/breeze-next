/** @client */
import 'tailwindcss/tailwind.css';
import React from 'react';
import styles from "../ui/shop/shop.css";
import Footer from "../ui/shop/footer/footer";
import Header from "../ui/shop/header/header";
import Main from "../ui/shop/main/main";
import ProductList from "../ui/shop/main/content/productList.jsx"

const Shop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
