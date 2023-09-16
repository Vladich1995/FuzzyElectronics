import styles from './OnSaleItemScreen.module.css';
import Header from '../../components/perms/Header';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../components/Contexts/CartContext';

const OnSaleItemScreen = () => {
    const location = useLocation();
    const [product, setProduct] = useState(null);
    const { addProduct } = useCart();

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToCartHandler = () => {
        addProduct(product);
    }

    return (
        <>
            <Header />
            {product != null && <div className={styles.container}>
                <div className={styles.imageArea}>
                    <img className={styles.image} src={product.pictureURL} />
                    <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart <FaShoppingCart /></button></div>
                </div>
                <div className={styles.labelsArea}>
                    <label className={styles.label}>{product.brand}<span>:</span> מותג</label>
                    <label className={styles.label}>{product.model}<span>:</span> דגם</label>
                    <label className={styles.label}>{product.description}<span>:</span> תיאור</label>
                    <label className={styles.label}>{product.price}<span>:</span>מחיר רגיל</label>
                    <label className={styles.label}>{product.isOnSale}</label>
                </div>
            </div>}
        </>
    )
}

export default OnSaleItemScreen;