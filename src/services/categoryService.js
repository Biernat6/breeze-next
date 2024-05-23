import axios from 'axios';
import api from './api';

export const fetchAllCategories = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/indexCategory');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};