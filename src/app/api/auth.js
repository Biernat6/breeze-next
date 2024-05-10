import axios from 'axios';


const apiURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


export const getProducts= async ()=> {
    try {
        const response = await axios.get(`${apiURL}/products`);
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    };


export const handleLogin = async (email, password) => {
    console.log('Payload: ', email, password)
    try {
        const response = await axios.post(`${apiURL}/login`, {email: email, password: password}, {
            headers: {
              'X-CSRF-TOKEN': csrfToken
            }}
        );
        return response.data;


    } catch(error) {
        console.error('Logowanie nieudane ', error)
        return error.data;
    }
}