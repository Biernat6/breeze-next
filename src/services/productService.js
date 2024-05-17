import axios from 'axios';
import api from './api';
export const fetchAllProducts = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};