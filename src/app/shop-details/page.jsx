/** @client */
import 'tailwindcss/tailwind.css';
import React from 'react';
import styles from "../ui/shop-details/shop-details.css";
import Footer from "../ui/shop-details/footer/footer";
import Header from "../ui/shop-details/header/header";
import Main from "../ui/shop-details/main/main";

const ShopDetails = () => {
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

export default ShopDetails;
