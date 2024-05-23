"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { MdClear } from "react-icons/md";

const SingleProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [prodImages, setProdImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category_id: ''
  });
  const [imageUrl, setImageUrl] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/findProduct/${id}`);
        const productData = response.data;
        setProduct(productData);
        setFormData({
          name: productData.name,
          description: productData.description,
          price: productData.price,
          category_id: productData.category_id
        });
      } catch (error) {
        console.error("Błąd ładowania produktu", error);
      }
    };

    const loadCategories = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/indexCategory`);
        setCategories(response.data);
      } catch (error) {
        console.error("Błąd ładowania kategorii", error);
      }
    };

    loadProduct();
    loadCategories();
  }, [id]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/findProduct/${id}/images`);
        setProdImages(response.data);
      } catch (error) {
        console.error("Błąd ładowania obrazów", error);
      }
    };

    loadImages();
  }, [id]);

  const handleAddImage = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/addImageByUrl/${id}`, { url: imageUrl });
      setProdImages([...prodImages, { url: imageUrl }]);
      setImageUrl('');
    } catch (error) {
      console.error("Błąd dodawania obrazu", error);
    }
  };

  const handleDeleteImage = async (imageId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/deleteImage/${imageId}`);
      setProdImages(prodImages.filter(image => image.id !== imageId));
    } catch (error) {
      console.error("Błąd usuwania obrazu", error);
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/modifiedProduct/${id}`, formData);
      const response = await axios.get(`http://127.0.0.1:8000/api/findProduct/${id}`);
      const updatedProductData = response.data;
      setProduct(updatedProductData);
      setFormData({
        name: updatedProductData.name,
        description: updatedProductData.description,
        price: updatedProductData.price,
        category_id: updatedProductData.category_id
      });
      alert('Produkt został zmodyfikowany pomyślnie!');
    } catch (error) {
      console.error("Błąd aktualizacji produktu:", error);
    }
  };

  const handleUpdateImage = async (index) => {
    try {
      const imageId = prodImages[index].id;
      await axios.put(`http://127.0.0.1:8000/api/updateImage/${imageId}`, { url: prodImages[index].url });
      alert('Obraz produktu został zaktualizowany pomyślnie!');
    } catch (error) {
      console.error("Błąd aktualizacji obrazu produktu:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer2}>
        <form action="" className={styles.form}>
          {prodImages.length > 0 &&
            prodImages.map((image, index) => (
              <div key={index}>
                <div className={styles.imgContainer}>
                  <div className={styles.deleteButtonContainer}>
                    <button className={styles.deleteButton} onClick={() => handleDeleteImage(image.id)}><MdClear /></button>
                  </div>
                  <Image src={image.url} alt={image.alt} fill />
                </div>
                <div className={styles.imgUpdateForm}>
                  <label>Img URL</label><br />
                  <input
                    type="text"
                    name="url"
                    placeholder="URL"
                    value={prodImages[index].url}
                    onChange={(e) => {
                      const updatedImages = [...prodImages];
                      updatedImages[index].url = e.target.value;
                      setProdImages(updatedImages);
                    }}
                  />
                  <button className={styles.imgUpdateButton} onClick={() => handleUpdateImage(index)}>Update Image</button>
                </div>
              </div>
            ))
          }
        </form>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleUpdateProduct} className={styles.form}>
          <label>Title</label>
          <input
            type="text" 
            name="name"
            placeholder="Nazwa"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Cena"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })} 
          />
          <label>Category</label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <label>Description</label>
          <textarea
            name="description"
            rows="10"
            placeholder="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
          <button type="submit">Update</button>
        </form>
        <div className={styles.imgForm}>
          <form onSubmit={handleAddImage} className={styles.form}>
            <label>URL</label>
            <input
              type="text"
              name="url"
              placeholder="URL"
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <button type="submit">Add Image</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SingleProductPage;
