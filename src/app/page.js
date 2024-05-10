import LoginLinks from '@/app/LoginLinks'
import ProductsList from '@/components/ProductsList'
import axios from 'axios'

export const metadata = {
    title: 'Laravel',
}

const Home = async () => {
    return (
        <>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <LoginLinks />
                <ProductsList />

            </div>
        </>
    )
}

export default Home
