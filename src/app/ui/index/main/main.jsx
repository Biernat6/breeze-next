import styles from "./main.module.css";
import React from 'react';
import BlogAndFAQ from "./blogAndFAQ";
import InformationDiet from "./informationDiet";
import Reviews from "./reviews";
import SupplementPackages from "./supplementPackages";
import Products from "./products";


const Main = () => {
  return (
    <main>
      <InformationDiet />
      <Products />
      <SupplementPackages />
      <Reviews />
      <BlogAndFAQ />
    </main>
  );
};

export default Main;