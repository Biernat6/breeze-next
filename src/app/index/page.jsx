/** @client */
import React from 'react';
import styles from "../ui/index/index.css";
import Footer from "../ui/index/footer/footer";
import Header from "../ui/index/header/header";
import Main from "../ui/index/main/main";

const Index = () => {
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

export default Index;
