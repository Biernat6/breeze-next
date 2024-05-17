import styles from "./main.module.css";
import React from 'react';
import RightBar from "./rightbar/rightbar";
import Content from "./content/content";

const Main = () => {
  return (
    <main className="flex flex-col container mx-auto h-auto lg:flex-row text-lg max-w-[70%]">
      <Content />
      <RightBar />
    </main>
  );
};

export default Main;