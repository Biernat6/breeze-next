import axios from '@/lib/axios'

const csrf = () => axios.get('/sanctum/csrf-cookie')

export const registerUser = async(name, lastname, email, password) => {
    try {
        await csrf();
        
        const res = await axios.post("http://localhost:8000/api/register", {
            name, lastname, email, password
        })

        if (res.data){
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.email));
        }
        
        return res.data
        
    } catch (error) {
        console.error("Błąd podczas rejestracji:", error)
        throw error;
    }
};

const csrff = () => axios.get('/sanctum/csrf-cookie')

export const loginUser = async(email, password) => {
    try {
        await csrff();
        
        const res = await axios.post("http://localhost:8000/api/login", {
            email, password
        })

        if (res.data){
            localStorage.setItem("user", JSON.stringify(res.data.email));
        }
        
        return res.data
        
    } catch (error) {
        console.error("Błąd podczas logowania:", error)
        throw error;
    }
};