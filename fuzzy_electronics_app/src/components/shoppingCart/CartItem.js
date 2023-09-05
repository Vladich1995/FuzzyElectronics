import styles from './CartItem.module.css';
import { FaPlus, FaMinus , FaShekelSign, FaWindowClose} from "react-icons/fa";
import { useCart } from '../contexts/CartProvider';
import { useState } from 'react';
const CartItem = (props) => {
    const {addProduct, removeProduct} = useCart();
    const [price, setPrice] = useState("");

    const addItemHandler = () => {
        addProduct(props.product.product);
    }

    const removeItemHandler = () => {
        removeProduct(props.product.product);
    }

    return (
        <div className={styles.itemContainer}>
            <div className={styles.priceArea}>
                <label>{props.product.product.price} <FaShekelSign /></label>
            </div> 
            <div className={styles.imageArea}>
                <img className={styles.image} src={props.product.product.pictureURL} alt="Product image" />
                <label className={styles.quantityLabel}>{props.product.quantity}</label>
            </div>
            <div className={styles.descriptionArea}>
                <label className={styles.descriptionLabel}>{props.product.product.description}</label>
            </div>
            <div className={styles.quantityArea}>
                <button type="button" onClick={addItemHandler}><FaPlus /></button>
                <button type="button" onClick={removeItemHandler}><FaMinus /></button>
            </div>
        </div>
    );
}

export default CartItem;