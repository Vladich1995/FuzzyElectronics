import React, { useEffect, useState } from 'react';
import Header from '../components/perms/Header';
import HomeCarousel from '../components/perms/HomeCarousel';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {


    return (
        <div className={styles.pageContainer}>
            <Header />
            <HomeCarousel />
        </div>
    );
};

export default HomeScreen;