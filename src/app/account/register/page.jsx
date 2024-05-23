"use client"
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Header from '@/app/ui/account/register/header/header';
import Footer from '@/app/ui/account/register/footer/footer';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError(null);

        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Registration failed');
                console.log(errorData);
                return;
            }
            const data = await response.json();

        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
            <Header />
            <main className="flex-grow flex items-center justify-center mt-20">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform hover:scale-105 transition duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
                    {error && <div className="mb-4 text-red-600">{error}</div>}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <div className="mt-1 relative rounded-md shadow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Username"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <div className="mt-1 relative rounded-md shadow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="text-gray-400" />
                                </div>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    required
                                    value={form.lastname}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <div className="mt-1 relative rounded-md shadow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1 relative rounded-md shadow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={form.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <div className="mt-1 relative rounded-md shadow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="text-gray-400" />
                                </div>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Register;
