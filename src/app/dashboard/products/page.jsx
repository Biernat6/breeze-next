"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/Products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
// import Pagination from "@/app/ui/dashboard/pagination/pagination";
import React, { useEffect, useState } from 'react';
import { indexAdministration } from '@/services/productService';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      const response = await indexAdministration();
      setProducts(response);
      setFilteredProducts(response);
    };

    loadProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  const handleProductClick = (id) => {
    router.push(`/dashboard/products/${id}`);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/deleteProduct/${id}`);
      setProducts(products.filter(product => product.id !== id));
      setFilteredProducts(filteredProducts.filter(product => product.id !== id));
      alert('Produkt został pomyślnie usunięty!');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." handleSearch={handleSearch} />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Kategoria</th>
            <th>Cena</th>
            <th>Utworzono</th>
            <th>Modyfikacja</th>
            <th>Sprzęt</th>
            <th>Akcje</th>
          </tr>
        </thead>
        {filteredProducts.length > 0 && filteredProducts.map((product) => (
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product?.images[0].url}
                    alt={product.name}
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.name}
                </div>
              </td>
              <td>{product.category ? product.category.name : 'Unknown'}</td>
              <td>{product.price}$</td>
              <td>{formatDate(product.created_at)}</td>
              <td>{formatDate(product.updated_at)}</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                  <button className={`${styles.button} ${styles.view}`}
                    onClick={() => handleProductClick(product.id)}>
                      View
                    </button>
                  <button className={`${styles.button} ${styles.delete}`} onClick={() => handleDeleteProduct(product.id)}>
                      Delete
                    </button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ProductsPage;
