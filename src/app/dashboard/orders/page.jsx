"use client"
import Link from "next/link";
import styles from "@/app/ui/dashboard/Orders/orders.module.css";
import Search from "@/app/ui/dashboard/search/search";
import React, { useEffect, useState } from 'react';
import { fetchAllOrders } from '@/services/orderService';
import Select from 'react-select';
import {
    MdToday,
    MdPending
} from 'react-icons/md';
import { useRouter } from 'next/navigation';

const Orders = () => {
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [orders, setOrders] = useState([]);
    const router = useRouter();

    const statusOptions = [
        { value: 'allStatus', label: 'All Status' },
        { value: 'pending', label: 'Pending' },
        { value: 'completed', label: 'Completed' },
        { value: 'cancelled', label: 'Cancelled' }
    ];

    const dateOptions = [
        { value: 'allDate', label: 'All Date' },
        { value: 'today', label: 'Today' }
    ];

    const handleStatusChange = (selectedOption) => {
        setSelectedStatus(selectedOption);
    };

    const handleDateChange = (selectedOption) => {
        setSelectedDate(selectedOption);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#2e374a',
            borderColor: 'transparent',
            color: '#fff',
            height: '10px',
            width: '190px',
            display: 'flex',
            alignItems: 'center',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#555' : '#333',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            height: '40px',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#333',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#fff',
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: '#555',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#aaa',
            display: 'flex',
            alignItems: 'center',
        }),
    };

    const handleOrderClick = (id) => {
        router.push(`/dashboard/orders/${id}`);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Unknown';
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'UTC'
        };
        return date.toLocaleString('pl-PL', options);
    }

    useEffect(() => {
        const loadOrders = async () => {
            const response = await fetchAllOrders();
            setOrders(response);
            // setFilteredOrders(response);
        };

        loadOrders();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..."
                // handleSearch={handleSearch} 
                />
                <div className={styles.dropdownContainer}>
                    <div className={styles.dropdown}>
                        <Select
                            value={selectedStatus}
                            onChange={handleStatusChange}
                            options={statusOptions}
                            styles={customStyles}
                            placeholder={<><MdPending /> Select Status</>}
                        />
                    </div>
                    <div className={styles.dropdown}>
                        <Select
                            value={selectedDate}
                            onChange={handleDateChange}
                            options={dateOptions}
                            styles={customStyles}
                            placeholder={<><MdToday /> Select Date</>}
                        />
                    </div>
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Data</td>
                        <td>Klient</td>
                        <td>Cena</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>{formatDate(order.created_at)}</td>
                            <td>{order.user.name} {order.user.lastname}</td>
                            <td>{order.total_price}$</td>
                            <td>
                                <div className={styles.cancelled}>
                                    Cancelled
                                </div>
                            </td>
                            <td>
                                <div className={styles.buttons}>
                                    <button className={`${styles.button} ${styles.view}`}
                                        onClick={() => handleOrderClick(order.id)}>
                                        View
                                    </button>
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Cancel
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
