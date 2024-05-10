import axios from 'axios';

export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/products', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('Produkty:', response.data);
        return response.data;
    } catch (error) {
        console.error('Błąd podczas pobierania produktów:', error.response ? error.response.data : error.message);
        return null;
    }
}