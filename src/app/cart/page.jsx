"use client"
import 'tailwindcss/tailwind.css';
import Header from '@/app/ui/cart/header/header';
import Footer from '@/app/ui/cart/footer/footer';

const Cart = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            <Header />
            <main className="flex-grow flex justify-center items-start p-6 mt-36">
                <div className="w-[800px] bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Twój Koszyk</h1>
                    <ul>
                        <li className="flex justify-between items-center border-b pb-4 mb-4">
                            <div className="flex items-center">
                                <img src="https://via.placeholder.com/50" alt="Produkt 1" className="w-12 h-12 object-cover rounded mr-4" />
                                <div>
                                    <h2 className="text-xl font-semibold text-green-600">Produkt 1</h2>
                                    <p className="text-gray-500">Opis produktu 1</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-green-700">50 zł</p>
                            </div>
                        </li>
                        <li className="flex justify-between items-center border-b pb-4 mb-4">
                            <div className="flex items-center">
                                <img src="https://via.placeholder.com/50" alt="Produkt 2" className="w-12 h-12 object-cover rounded mr-4" />
                                <div>
                                    <h2 className="text-xl font-semibold text-green-600">Produkt 2</h2>
                                    <p className="text-gray-500">Opis produktu 2</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-green-700">75 zł</p>
                            </div>
                        </li>
                    </ul>
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                        <h2 className="text-2xl font-bold text-green-700">Suma:</h2>
                        <p className="text-2xl font-bold text-green-700">125 zł</p>
                    </div>
                    <div className="mt-6">
                        <button className="w-full bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300">Przejdź do płatności</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;
