import { useState } from 'react';
import styles from './BuildByYourselfScreen.module.css';
import Header from '../components/Header';
import Sidebar from '../components/sidebars/Sidebar';
import ProductsContainer from '../components/containers/ProductsContainer';
import ExpandedProductOnSale from '../components/expandedCards/ExpandedProductOnSale';
import AuthenticationCard from '../components/cards/AuthenticationCard';
import Cart from '../components/shoppingCart/Cart';

const BuildByYourselfScreen = () => {
    const [productsCategory, setProductsCategory] = useState("Cases");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openLogin, setOpenLogin] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const cardSelectHandler = (product) => {
        setSelectedProduct(product);
    }

    const closeCardHandler = () => {
        setSelectedProduct(null);
    }

    const setProductsCategoryHandler = (category) => {
        setProductsCategory(category);
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
            <Header onOpen={openLoginHandler} onOpenCart={openCartHandler}/>
            <Sidebar onChoose={setProductsCategoryHandler} />
            <div className={styles.explanationBanner}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="images/Case.png" alt="Image" />
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="images/Keyboard.png" alt="Image" />
                </div>
                <div className={`${styles.labels}`}>
                    <label className={styles.label}>בחר את החלקים הרצויים</label>
                    <label className={styles.label}>היעזר בסרגל שמימין</label>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="images/MB.png" alt="Image" />
                </div>
            </div>
            {selectedProduct != null &&<ExpandedProductOnSale product={selectedProduct} onClose={closeCardHandler} />}
            <div className={styles.productsArea}>
                <ProductsContainer category={productsCategory} onSelect={cardSelectHandler} />
            </div>
            {openLogin && <AuthenticationCard onClose={closeLoginHandler} />}
            {openCart && <Cart onClose={closeCartHandler} />}
        </div>
    );
}

export default BuildByYourselfScreen;