import React, { useEffect, useState } from 'react';
import Header from '../components/perms/Header';
import HomeCarousel from '../components/perms/HomeCarousel';
import ProductsContent from './Content/ProductsContent';
import styles from './HomeScreen.module.css';
import { useAuth } from '../components/Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const {getUser} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(getUser() != null && getUser().email == 'alex@gmail.com'){
            navigate('/admin');
        }
    }, [])
    return (
        <div className={styles.pageContainer}>
            <Header />
            <HomeCarousel />
            <ProductsContent />
        </div>
    );
};

export default HomeScreen;