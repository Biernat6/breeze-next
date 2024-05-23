"use client"
import { MdSearch } from "react-icons/md";
import React, { useState } from 'react';
import styles from "./search.module.css";

const Search = ({ placeholder, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default Search;
