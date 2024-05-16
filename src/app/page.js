//import LoginLinks from '@/app/LoginLinks'
//import axios from 'axios'
import 'tailwindcss/tailwind.css'; 
import Index from './index/page'

export const metadata = {
    title: 'Laravel',
}

const Home = async () => {
    return (
        <>
            <Index />
        </>
    )
}

export default Home
