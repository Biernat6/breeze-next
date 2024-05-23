import axios from 'axios';
import api from './api';

export const fetchAllOrders = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/indexOrder');
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};