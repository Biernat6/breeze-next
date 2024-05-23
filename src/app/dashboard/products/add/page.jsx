"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    category_id: '',
    price: '',
    url: '',
    description: ''
  });

  useEffect(() => {
    const loadCategories = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/indexCategory');
      setCategories(response.data);
    };

    loadCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addProduct', formData);
      console.log('Produkt dodany:', response.data);
      alert('Produkt został dodany pomyślnie!');
      setFormData({
        name: '',
        category_id: '',
        price: '',
        url: '',
        description: ''
      });
    } catch (error) {
      console.error('Błąd przy dodawaniu produktu:', error);
      alert('Błąd');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Nazwa"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          required
        >
          <option value="">Wybierz kategorie</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Cena"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="url"
          placeholder="URL"
          value={formData.url}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          id="description"
          rows="16"
          placeholder="Opis"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Stwórz</button>
      </form>
    </div>
  );
};

export default AddProductPage;
