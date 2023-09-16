import React, { useEffect, useState } from 'react';
import Header from '../components/perms/Header';
import HomeCarousel from '../components/perms/HomeCarousel';
import OnSaleItemsContent from './Content/OnSaleItemsContent';
import styles from './HomeScreen.module.css';
import { useAuth } from '../components/Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const {getUser} = useAuth();
    const navigate = useNavigate();
    console.log(getUser().email);
    useEffect(() => {
        console.log(getUser().email);
        if(getUser().email = 'alex@gmail.com'){
            navigate('/admin');
        }
    }, [])
    return (
        <div className={styles.pageContainer}>
            <Header />
            <HomeCarousel />
            <OnSaleItemsContent />
        </div>
    );
};

export default HomeScreen;