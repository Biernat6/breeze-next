"use client";
import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "@/app/ui/dashboard/categories/singleCategory/singleCategory.module.css";
import { MdClear } from "react-icons/md";
import Image from "next/image";

const SingleCategoryPage = ({ params }) => {
  const { id } = params;
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");

  const [formData, setFormData] = useState({
    name: '',
  });

  useEffect(() => {
    const loadCategoryAndProducts = async () => {
      try {
        const categoryResponse = await axios.get(`http://127.0.0.1:8000/api/findCategory/${id}`);
        const categoryData = categoryResponse.data;
        setCategory(categoryData);
        setFormData({
          name: categoryData.name,
        });

        const productsResponse = await axios.get(`http://127.0.0.1:8000/api/findProductsByCategory/${id}`);
        setProducts(productsResponse.data);

        const allProductsResponse = await axios.get('http://127.0.0.1:8000/api/products');
        setAllProducts(allProductsResponse.data);
      } catch (error) {
        console.error("Błąd ładowania kategorii lub produktów", error);
      }
    };

    loadCategoryAndProducts();
  }, [id]);

  const handleDeleteProduct = async (productId) => {
    const confirmDelete = window.confirm("Czy na pewno chcesz usunąć ten produkt?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/deleteProduct/${productId}`);
        setProducts(products.filter(product => product.id !== productId));
      } catch (error) {
        console.error("Błąd usuwania produktu", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/updateCategory/${id}`, formData);
      setCategory(response.data);
      alert("Kategoria zaktualizowana pomyślnie");
    } catch (error) {
      console.error("Błąd aktualizacji kategorii", error);
    }
  };

  const handleAddProductToCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://127.0.0.1:8000/api/addProductToCategory/${id}`, { product_id: selectedProductId });
      const updatedProductsResponse = await axios.get(`http://127.0.0.1:8000/api/findProductsByCategory/${id}`);
      setProducts(updatedProductsResponse.data);
      setSelectedProductId("");
    } catch (error) {
      console.error("Błąd dodawania produktu do kategorii", error);
    }
  };

  const availableProducts = allProducts.filter(product => !products.some(p => p.id === product.id));

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.categoryName}>{category.name}</div>
        <table className={styles.productsTable}>
          <thead>
            <tr>
              <th>Zdjęcie</th>
              <th>Nazwa</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <Image
                    src={product?.images && product.images.length > 0 ? product.images[0].url : '/empty_image.jpg'}
                    alt={product.name}
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                </td>
                <td>{product.name}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.id)} className={styles.deleteButton}>
                    <MdClear />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='grid grid-cols-2 gap-10'>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Nazwa</label>
            <input
              type="text"
              name="name"
              placeholder="Nazwa"
              value={formData.name}
              onChange={handleInputChange}
            />
            <button type="submit">Update</button>
          </form>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleAddProductToCategory} className={styles.form}>
            <label>Dodaj produkt do kategorii</label>
            <select
              name="product_id"
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
            >
              <option value="" disabled>Wybierz produkt</option>
              {availableProducts.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>
            <button type="submit">Dodaj</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryPage;
