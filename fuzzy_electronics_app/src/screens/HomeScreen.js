import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import IntroCarousel from '../components/IntroCarousel';
import OnSaleContainer from '../components/containers/OnSaleContainer';
import ExpandedProductOnSale from '../components/expandedCards/ExpandedProductOnSale';
import AuthenticationCard from '../components/cards/AuthenticationCard';
import Cart from '../components/shoppingCart/Cart';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openLogin, setOpenLogin] = useState(false);
    const [openCart, setOpenCart] = useState(false);


    const cardSelectHandler = (product) => {
        setSelectedProduct(product);
    }

    const closeCardHandler = () => {
        setSelectedProduct(null);
    }

    const openLoginHandler = () => {
        setOpenLogin(true);
    }

    const closeLoginHandler = () => {
        setOpenLogin(false);
    }

    const openCartHandler = () => {
        setOpenCart(true);
    }

    const closeCartHandler = () => {
        setOpenCart(false);
    }


    return (
        <div className={styles.pageContainer}>
            <Header onOpen={openLoginHandler} onOpenCart={openCartHandler} />
            <div className={styles.carouselArea}>
                <IntroCarousel />
            </div>
            {selectedProduct != null &&<ExpandedProductOnSale product={selectedProduct} onClose={closeCardHandler} />}
            <div className={styles.onSaleArea}>
                <OnSaleContainer onSelect={cardSelectHandler} />
            </div>
            {openLogin && <AuthenticationCard onClose={closeLoginHandler} />}
            {openCart && <Cart onClose={closeCartHandler} />}
        </div>
    );
};

export default HomeScreen;