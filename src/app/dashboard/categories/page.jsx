"use client"
import styles from "@/app/ui/dashboard/categories/categories.module.css";
import Search from "@/app/ui/dashboard/search/search";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchAllCategories } from '@/services/categoryService';
import 'tailwindcss/tailwind.css';
import axios from "axios";


const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [formData, setFormData] = useState({ name: '' });
  const router = useRouter();

  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetchAllCategories();
      setCategories(response)
      setFilteredCategories(response);
    }

    loadCategories();
  }, []);

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

  const handleCategoryClick = (id) => {
    router.push(`/dashboard/categories/${id}`);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/destroyCategory/${id}`);
      setCategories(categories.filter(category => category.id !== id));
      setFilteredCategories(filteredCategories.filter(category => category.id !== id));
      alert('Kategoria został pomyślnie usunięta!');
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/createCategory', formData);
      alert('Kategoria została dodana pomyślnie!');

      const updatedCategories = await fetchAllCategories();
      setCategories(updatedCategories);
      setFilteredCategories(updatedCategories);
      setFormData({
        name: ''
      });
    } catch (error) {
      console.error('Błąd przy dodawaniu kategorii:', error);
      alert('Błąd');
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className='grid grid-cols-2 gap-10'>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a category..." handleSearch={handleSearch} />
        </div>
        <div>
          <div className="w-full">
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nazwa</th>
                  <th>Utworzono</th>
                  <th>Akcje</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.length > 0 && filteredCategories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}.</td>
                    <td>{category.name}</td>
                    <td>{formatDate(category.created_at)}</td>
                    <td>
                      <div className={styles.buttons}>
                        <button
                          className={`${styles.button} ${styles.view}`}
                          onClick={() => handleCategoryClick(category.id)}
                        >
                          View
                        </button>
                        <button className={`${styles.button} ${styles.delete}`}
                          onClick={() => handleDeleteCategory(category.id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className="font-bold font-Roboto text-center h-20 text-lg">STWÓRZ NOWĄ KATEGORIĘ</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Nazwa" name="name" value={formData.name} onChange={handleChange} required />
          <button type="submit">Utwórz</button>
        </form>
      </div>
    </div>
  );
};

export default CategoriesPage;
