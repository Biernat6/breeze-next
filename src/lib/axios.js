import Axios from 'axios'

const token = localStorage.getItem('token');

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // Authorization: `Bearer ${token}`
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios
